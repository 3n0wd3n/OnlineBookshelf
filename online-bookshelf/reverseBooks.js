const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "src", "app", "books.json");
const newFilePath = path.join(__dirname, "src", "app", "newBooks.json");

// Načti JSON soubor
const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

// Otoč pořadí knih
data.books.reverse();

// Ulož nový JSON soubor
fs.writeFileSync(newFilePath, JSON.stringify(data, null, 2));

console.log("Soubor newBooks.json byl vytvořen s otočeným pořadím knih.");
