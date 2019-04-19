// import controllers
const readFileController = require('./../controllers/readFileController');
const writeFileController = require('./../controllers/writeFileController');
const sharedController = require('./../controllers/sharedController');

// set routes with middlewares and contollers. 
let setRouter = (app) => {
    app.get('/read', readFileController.readFile);
    app.post('/write/:data', writeFileController.writeFile); // execute POST call to write from tools like postman
    app.get('/write/:data', writeFileController.writeFile); // execute GET call to write from browser for demo - idealy it should be POST call.
    app.get('*', sharedController.generateMessage);
}

// export routes
module.exports = {
    setRouter: setRouter
}