const express = require('express');
const app = express()
const router = express.Router()
const config = require('./config')
const mysql = require('mysql')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const middleware = require('./middleware');



const knex = require('knex')({

    client:'mysql',
    connection: config.database
    
    
    });
    app.locals.knex = knex

//const connection = mysql.createConnection(config.database)

const routes = require('./routes')


//const middlewares = require('./middleware')
//const bodyParser = require('body-parser')

//const jsonParser = bodyParser.json()

/*
const knex = require('knex')({
    client: 'mysql',
    connection: config.database
})

app.locals.knex = knex
*/



//router.get('/bussnesses', routes.bussnesslist.listAllBussnessKnex);
//router.get('/bussnesses/:id', routes.bussnesslist.listSingleBussnessKnex);
router.get('/bussnesses', routes.listBussness.getAllBussnessKnex);
router.get('/bussnesses/:name', routes.listBussness.getSingleBussnessKnex);
router.post('/bussnesses', jsonParser, routes.listBussness.postBussnessKnex);
router.put('/bussnesses/:name', jsonParser, routes.listBussness.putBussnessKnex);
router.delete('/bussnesses/:name', routes.listBussness.deleteBussnessKnex);



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

router.get('/menu', routes.listMenu.getAllMenuKnex);
router.get('/menu/:id', middleware.checkID, routes.listMenu.getSingleMenuKnex);
router.post('/menu', jsonParser, routes.listMenu.postMenuKnex);
router.put('/menu/:id', jsonParser, middleware.checkID, routes.listMenu.putMenuKnex);
router.delete('/menu/:id', middleware.checkID, routes.listMenu.deleteMenuKnex);

router.get('/menuItem', routes.listMenuItem.getAllMenuItemKnex);
router.get('/menuItem/:id', middleware.checkID, routes.listMenuItem.getSingleMenuItemKnex);
router.post('/menuItem', jsonParser, routes.listMenuItem.postMenuItemKnex);
router.put('/menuItem/:id', jsonParser, middleware.checkID, routes.listMenuItem.putMenuItemKnex);
router.delete('/menuItem/:id', middleware.checkID, routes.listMenuItem.deleteMenuItemKnex);



app.use((req, res, next) => {

res.append('Access-Control-Allow-Origin', ['*']);
res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.append('Access-Control-Allow-Headers', 'Content-Type');
next();

});



app.use('/api', router);

    app.listen(config.APIServerPort, () => {
        console.log(`Server started on port ${config.APIServerPort}`);
    });
