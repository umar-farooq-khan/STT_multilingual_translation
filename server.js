const express = require('express');
const app = express();
const port = 3000;

// Sample event data
const events = [
    { title: "Event 1", description: "Description of Event 1" },
    { title: "Event 2", description: "Description of Event 2" }
    // Add more event objects as needed
];

app.set('view engine', 'ejs');
app.use(express.static('public')); // Assuming your HTML file is in a 'public' directory

app.get('/', (req, res) => {
    console.log(events);
    res.render('index', { events: events });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
