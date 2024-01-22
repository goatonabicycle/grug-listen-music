import fs from "fs";
import readline from "readline";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) =>
    rl.question(question, (answer) => resolve(answer)),
  );
}

function getFormattedDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return { formattedDate: `${year}-${month}-${day}`, year };
}

async function generateContent() {
  const artistName = await ask("Artist Name: ");
  const albumName = await ask("Album Name: ");
  const description = await ask("Description: ");
  const tagsInput = await ask("Tags (comma-separated): ");
  const bandcampEmbedCode = await ask("Bandcamp Embed Code: ");
  const bandcampLink = await ask("Bandcamp Album Link: ");

  const { formattedDate, year } = getFormattedDate();
  const tags = tagsInput.split(",").map((tag) => tag.trim());

  const content = `---
artist: "${artistName}"
album: "${albumName}"
description: "${description}"
date: "${formattedDate}"
image: "/images/album/${artistName}-${albumName}.jpg"
tags:
  - ${artistName}
${tags.map((tag) => `  - "${tag}"`).join("\n")}
  - "${year}"
visible: true
---

[Words about album will go here]

Grug favourite parts:

1. SongTitle \`0:00\` - Thoughts about moment.

Listen/buy here:

<iframe
  style={{ border: "0", width: "350px", height: "830px" }}
  src="https://bandcamp.com/EmbeddedPlayer/album=${bandcampEmbedCode}/size=large/bgcol=333333/linkcol=ffffff/transparent=true/"
  seamless>
  <a href="${bandcampLink}">
    ${albumName} by ${artistName}
  </a>
</iframe>
`;

  return { content, year, artistName, albumName };
}

async function writeToFile(content, year, artistName, albumName) {
  const dir = path.join(__dirname, `content/blog/${year}`);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // Sanitize artistName and albumName to create a valid filename
  const safeArtistName = artistName.replace(/[^a-zA-Z0-9]/g, "-");
  const safeAlbumName = albumName.replace(/[^a-zA-Z0-9]/g, "-");
  const fileName = `${safeArtistName}-${safeAlbumName}.mdx`;
  const filePath = path.join(dir, fileName);

  fs.writeFile(filePath, content, (err) => {
    if (err) throw err;
    console.log(`****************************************`);
    console.log(`The file has been saved, nice!`);
    console.log(`See here: ${filePath}`);
    console.log(`****************************************`);
    rl.close();
  });
}

async function main() {
  const { content, year, artistName, albumName } = await generateContent();
  await writeToFile(content, year, artistName, albumName);
}

main();
