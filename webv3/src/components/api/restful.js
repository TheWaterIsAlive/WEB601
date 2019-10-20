const express = require('express'); 
const app = express()
const router = express.Router()
const config = require('./config')
const mysql = require('mysql')
app.use(express.static('src'));
var cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const middleware = require('./middleware');
//imports required files


const knex = require('knex')({

    client: 'mysql',
    connection: config.database //Sets up the connection that was made in the config 


});
app.locals.knex = knex  // Creates a local connection for this file too use

const routes = require('./routes')


//Routes to which allows for the access to the busssness table
router.get('/bussnesses', routes.listBussness.getAllBussnessKnex);           // Users name instead of ID as this table uses name as a primary key
router.get('/bussnesses/:name', routes.listBussness.getSingleBussnessKnex);
router.post('/bussnesses', jsonParser, routes.listBussness.postBussnessKnex);//Has jsonParser to pass large sets of infomration
router.put('/bussnesses/:name', jsonParser, routes.listBussness.putBussnessKnex);
router.delete('/bussnesses/:name', routes.listBussness.deleteBussnessKnex);


//Routes to which allows for the access to the user table
router.get('/users', routes.listUser.getAllUserKnex);
router.get('/users/:name', routes.listUser.getSingleUserKnex);
router.post('/users', jsonParser, routes.listUser.postUserKnex);
router.put('/users/:name', jsonParser, routes.listUser.postUserKnex);
router.delete('/users/:name', routes.listUser.deleteUserKnex);

/*
router.get('/calander', routes.listCalander.getAllCalanderKnex);
router.get('/calander/:id', middleware.checkID, routes.listCalander.getSingleCalanderKnex);
router.post('/calander', jsonParser, routes.listCalander.postCalanderKnex);
router.put('/calander/:id', jsonParser, middleware.checkID, routes.listCalander.putCalanderKnex);
router.delete('/calander/:id', middleware.checkID, routes.listCalander.deleteCalanderKnex);
*/

//Routes to which allows for the access to the menu table
router.get('/menu', routes.listMenu.getAllMenuKnex);
router.get('/menu/:id', middleware.checkID, routes.listMenu.getSingleMenuKnex); // This uses  middle wear to make sure that the infomraiton past iin is an interger
router.post('/menu', jsonParser, routes.listMenu.postMenuKnex);
router.put('/menu/:id', jsonParser, middleware.checkID, routes.listMenu.putMenuKnex);
router.delete('/menu/:id', middleware.checkID, routes.listMenu.deleteMenuKnex);


//Routes to which allows for the access to the menu item table
router.get('/menuItem', routes.listMenuItem.getAllMenuItemKnex);
router.get('/menuItem/:id', middleware.checkID, routes.listMenuItem.getSingleMenuItemKnex); // This uses  middle wear to make sure that the infomraiton past iin is an interger
router.post('/menuItem', jsonParser, routes.listMenuItem.postMenuItemKnex);
router.put('/menuItem/:id', jsonParser, middleware.checkID, routes.listMenuItem.putMenuItemKnex);
router.delete('/menuItem/:id', middleware.checkID, routes.listMenuItem.deleteMenuItemKnex);



app.use((req, res, next) => {

    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');//Sets up the peramiters which the program is about to funtion under
    res.append('Access-Control-Allow-Headers', 'Content-Type');       //This includes the types of methods allowed the place which queries cab origonate
    next();                                                           // What information is past

});



app.use('/api', cors(), router); //Requires /api as this is an API, cors is just here just incase it was needed.

app.listen(config.APIServerPort, () => {
    console.log(`Server started on port ${config.APIServerPort}`); // Starts server listening so it can take input
});                                                                // Users the port from the config fill