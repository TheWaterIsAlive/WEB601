const express = require('express');
const app = express()
const router = express.Router()
const config = require('./config')
const mysql = require('mysql')



const knex = require('knex')({

    client:'mysql',
    connection:{
    host:'127.0.0.1',
    user:'root',
    password:'Muchduck203',
    database:'nelsonfoods'
    
    }
    
    
    });

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
router.get('/bussnesses', routes.listBussness.listAllBussnessKnex);
app.use('/api', router);

/*
connection.connect(error => {
    // error = 1; to test connection
    if (error) {
        console.error('Error connections to the database: ', error)
        return process.exit()
    }

    
    app.locals.connection = connection;
    
*/

    app.listen(config.APIServerPort, () => {
        console.log(`Server started on port ${config.APIServerPort}`);
    });
//})