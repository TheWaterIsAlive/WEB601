const express = require('express');
const app = express()
const router = express.Router()

const port = 3333
const config = require('./config')

const mysql = require('mysql')

const connection = mysql.createConnection(config.database)

const router = require('./routes')



router.get('/Bussnesses', router.bussnessList.listAllBussnesses);


app.use('/api', router);

app.locals.connection = connection;

app.listen(port, () => {

    console.log(`Server started on port ${port}`)

});