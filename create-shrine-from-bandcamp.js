import fs from "fs";
import axios from "axios";
import cheerio from "cheerio";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function scrapeBandcamp(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const artistName = $("#name-section h3 span a").text().trim();
    const albumName = $(".trackTitle").first().text().trim();
    const description = $(".tralbumData.tralbum-about").text().trim();
    const imageUrl = $("a.popupImage").attr("href");
    const tags = $(".tralbumData.tralbum-tags a.tag")
      .map((_, el) => $(el).text().trim())
      .get();

    const albumIdCommentMatch = response.data.match(/<!-- album id (\d+) -->/);
    const bandcampEmbedCode = albumIdCommentMatch ? albumIdCommentMatch[1] : "";

    const tracklist = $(".track_list .track_row_view")
      .map((_, el) => ({
        trackNumber: $(el)
          .find(".track-number-col .track_number")
          .text()
          .trim(),
        trackTitle: $(el).find(".title-col .track-title").text().trim(),
        trackDuration: $(el).find(".title-col .time").text().trim(),
      }))
      .get();

    return {
      artistName,
      albumName,
      description,
      imageUrl,
      tags,
      bandcampEmbedCode,
      tracklist,
    };
  } catch (error) {
    console.error("Error scraping Bandcamp:", error);
    throw error;
  }
}

function sanitizeFileName(name) {
  return name.replace(/[^a-zA-Z0-9]/g, "-").replace(/-+/g, "-");
}

async function downloadImage(url, imagePath) {
  try {
    const response = await axios({
      url,
      method: "GET",
      responseType: "stream",
    });

    const writer = fs.createWriteStream(imagePath);
    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
  } catch (error) {
    console.error("Error downloading image:", error);
    throw error;
  }
}

function getFormattedDate() {
  const date = new Date();
  return {
    formattedDate: date.toISOString().split("T")[0],
    year: date.getFullYear(),
  };
}

async function generateBlogContent(bandcampURL) {
  const albumData = await scrapeBandcamp(bandcampURL);
  const { formattedDate, year } = getFormattedDate();

  const safeArtistName = sanitizeFileName(albumData.artistName);
  const safeAlbumName = sanitizeFileName(albumData.albumName);
  const imagePath = `./public/images/album/${safeArtistName}-${safeAlbumName}.jpg`;

  let songTitles = albumData.tracklist
    .map(
      (track, index) => `${index + 1}. ${track.trackTitle} \`0:00\` - Moment`,
    )
    .join("\n");

  const content = `---
artist: "${albumData.artistName}"
album: "${albumData.albumName}"
description: ""
date: "${formattedDate}"
image: "${imagePath.replace("./public", "")}"
tags:
  - ${albumData.tags.map((tag) => `"${tag}"`).join("\n  - ")}
  - "${year}"
visible: false
---

[Words about album will go here]

Description from bandcamp: ${albumData.description}

Grug favourite parts:

${songTitles}

Listen/buy here:

<iframe
  style={{ border: "0", width: "350px", height: "800px" }}
  src="https://bandcamp.com/EmbeddedPlayer/album=${
    albumData.bandcampEmbedCode
  }/size=large/bgcol=333333/linkcol=ffffff/transparent=true/" 
  seamless>
  <a href="${bandcampURL}">
    ${albumData.albumName} by ${albumData.artistName}
  </a>
</iframe>
`;

  return { content, year, albumData, imagePath };
}

async function writeContentToFile(generatedContent) {
  const dirPath = path.join(__dirname, `content/blog/${generatedContent.year}`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const fileName = `${sanitizeFileName(
    generatedContent.albumData.artistName,
  )}-${sanitizeFileName(generatedContent.albumData.albumName)}.mdx`;
  const filePath = path.join(dirPath, fileName);

  fs.writeFile(filePath, generatedContent.content, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      throw err;
    }
    console.log(`****************************************`);
    console.log(`File saved, nice!`);
    console.log(`See here: ${filePath}`);
    console.log(`****************************************`);
  });

  if (generatedContent.albumData.imageUrl) {
    await downloadImage(
      generatedContent.albumData.imageUrl,
      generatedContent.imagePath,
    );
  }
}

async function main() {
  try {
    const bandcampURL = process.argv[2];
    if (!bandcampURL) {
      throw new Error("Please provide a Bandcamp album URL.");
    }

    const generatedContent = await generateBlogContent(bandcampURL);
    await writeContentToFile(generatedContent, bandcampURL);

    console.log("Empty shrine build. Now must write!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
