// import controllers
const readFileController = require('./../controllers/readFileController');
const writeFileController = require('./../controllers/writeFileController');
const sharedController = require('./../controllers/sharedController');

// set routes with middlewares and contollers. 
let setRouter = (app) => {
    app.get('/read', readFileController.readFile);
    app.get('/write/:data', writeFileController.writeFile);
    app.get('*', sharedController.generateMessage);
}

// export routes
module.exports = {
    setRouter: setRouter
}