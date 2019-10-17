const knex = require('knex')({



    client:'mysql',
    connection:{
    host:'127.0.0.1',
    user:'root',
    password:'Muchduck203',
    database:'nelsonfoods'
    
    }
    
    
    });


module.exports = {

    knex
/*database,
APIServerPort
*/
}