const express = require('express');
const app = express();
const cors = require('cors');
const itemsController = require('./controllers/itemsController');
const { handleErrors } = require('./middleware/custom_errors');
// 

app.set('port', process.env.PORT || 8000);

// Parses key value pairs in request
app.use(express.urlencoded({ extended: true }));
// Converts json strings to the an object and attaches it to req.body
app.use(express.json());

// Use cors package to allow connections from all domains

app.use(cors());

// Log each request as it comes in for debugging
// const requestLogger = require('./middleware/request_logger');
// app.use(requestLogger);

// Redirect any requests to the homepage to books shop
app.get('/', (req, res) => {
	res.redirect('/shop/items');
});

// Require the user resource routes and controllers

app.use('/shop/items', itemsController);

// The catch all for handling errors

app.use(handleErrors);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
