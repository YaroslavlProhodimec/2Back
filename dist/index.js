"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// const path = require('path');
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Serve static files from the 'public' directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
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
