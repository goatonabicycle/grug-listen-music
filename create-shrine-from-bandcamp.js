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
      .map((i, el) => $(el).text().trim())
      .get();

    let bandcampEmbedCode = "";
    const htmlContent = response.data;
    const albumIdCommentMatch = htmlContent.match(/<!-- album id (\d+) -->/);
    if (albumIdCommentMatch && albumIdCommentMatch.length > 1) {
      bandcampEmbedCode = albumIdCommentMatch[1];
    }

    const tracklist = $(".track_list .track_row_view")
      .map((i, el) => ({
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
      tags,
      bandcampEmbedCode,
      tracklist,
      imageUrl,
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
}

function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return { formattedDate: `${year}-${month}-${day}`, year };
}

async function generateContent(bandcampURL) {
  const {
    artistName,
    albumName,
    description,
    tags,
    bandcampEmbedCode,
    tracklist,
    imageUrl,
  } = await scrapeBandcamp(bandcampURL);

  const { formattedDate, year } = getFormattedDate();

  const safeArtistName = sanitizeFileName(artistName);
  const safeAlbumName = sanitizeFileName(albumName);
  const imagePath = `./public/images/album/${safeArtistName}-${safeAlbumName}.jpg`;

  let songTitles = tracklist
    .map(
      (track, index) => `${index + 1}. ${track.trackTitle} \`0:00\` - Moment`,
    )
    .join("\n");

  const content = `---
artist: "${artistName}"
album: "${albumName}"
description: ""
date: "${formattedDate}"
image: "${imagePath.replace("./public", "")}"
tags:
  - ${tags.map((tag) => `"${tag}"`).join("\n  - ")}
  - "${year}"
visible: true
---

[Words about album will go here]

Description from bandcamp: ${description}

Grug favourite parts:

${songTitles}

Listen/buy here:

<iframe
  style={{ border: "0", width: "350px", height: "830px" }}
  src="https://bandcamp.com/EmbeddedPlayer/album=${bandcampEmbedCode}/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
  seamless>
  <a href="${bandcampURL}">
    ${albumName} by ${artistName}
  </a>
</iframe>
`;

  if (imageUrl) {
    await downloadImage(imageUrl, imagePath);
  }

  return { content, year, artistName, albumName, imagePath };
}

async function writeToFile(
  content,
  year,
  artistName,
  albumName,
  imagePath,
  imageUrl,
) {
  const dir = path.join(__dirname, `content/blog/${year}`);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const fileName = `${sanitizeFileName(artistName)}-${sanitizeFileName(
    albumName,
  )}.mdx`;
  const filePath = path.join(dir, fileName);

  fs.writeFile(filePath, content, (err) => {
    if (err) throw err;
    console.log(`****************************************`);
    console.log(`The file has been saved, nice!`);
    console.log(`See here: ${filePath}`);
    console.log(`****************************************`);
  });

  if (imageUrl) {
    await downloadImage(imageUrl, imagePath);
  }
}

async function main() {
  const bandcampURL = process.argv[2];
  if (!bandcampURL) {
    console.error("Please provide a Bandcamp album URL.");
    process.exit(1);
  }

  const { content, year, artistName, albumName, imagePath, imageUrl } =
    await generateContent(bandcampURL);
  await writeToFile(content, year, artistName, albumName, imagePath, imageUrl);
}

main();
