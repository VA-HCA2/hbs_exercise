const express = require('express');
const fs = require('fs');
const teamsRouter = express.Router();
const dataPath = './data/';

teamsRouter.get("/", function (request,response) { 
    response.end(fs.readFileSync(dataPath + 'teams.json'));
})
      
      module.exports = teamsRouter;