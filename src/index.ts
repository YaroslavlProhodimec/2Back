import express from 'express'
import path from 'path'
// const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Set 'ejs' as the view engine
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Express App' });
});


// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { title: 'Error' });
});

// Start the server
app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});
