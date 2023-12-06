"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
// const path = require('path');
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
// Serve static files from the 'public' directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Set 'ejs' as the view engine
app.set('view engine', 'ejs');
// Define routes
app.get('/', function (req, res) {
    res.render('index', { title: 'Express App' });
});
// Error handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).render('error', { title: 'Error' });
});
// Start the server
app.listen(port, function () {
    console.log("App listening on http://localhost:".concat(port));
});
