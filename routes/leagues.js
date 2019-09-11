const express = require('express');
const fs = require('fs');
const leaguesRouter = express.Router();
const dataPath = './data/';

leaguesRouter.get("/", function (request,response) { 
    response.end(fs.readFileSync(dataPath + 'leagues.json'));
})
      
      module.exports = leaguesRouter;