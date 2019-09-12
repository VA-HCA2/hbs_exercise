// nodemon server.js
const http = require('http');

const express = require('express');
const hbs = require('hbs');
//Require files 
const fs = require('fs');
const bodyParser = require('body-parser');

// include routes
const leagues = require('./routes/leagues');
const teams = require('./routes/teams');

var app = express();

// register hbs partials
hbs.registerPartials(__dirname + '/views/partials');

console.log(__dirname + '/views/partials')
// set view engine
app.set('view engine', 'hbs');

// Middleware
app.use(express.static(__dirname + '/public'));

// partials
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

// use routes
app.use('/leagues', leagues);
app.use('/teams', teams);

app.get('/index', (request, response) => {
 response.render('index.hbs', {pageTitle: 'Leagues'});
});

// Error-handling middleware 
// Handle http 404 response
app.use((request, response, next) => {
    response.status(404).redirect('/404.html');
});

const port = 3000;
const server = http.createServer(app).listen(port);

server.on('listening', () => {
	console.log(`Server Listening on ${server.address().port}`);
});