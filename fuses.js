const Fuse = require('fuse.js'); // If using Node.js or include Fuse.js in your HTML

const referenceText = "قد افلح المؤمنون";
const searchText = "قد أفلح المؤمنون";

const fuse = new Fuse([referenceText], {
    includeScore: true,
    threshold: 0.3 // Adjust the threshold for strictness of matching
});

const result = fuse.search(searchText);

if (result.length > 0) {
    console.log("Match found!");
} else {
    console.log("No match found.");
}