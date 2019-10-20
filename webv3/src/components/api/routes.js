const listBussness = require('./bussnessesKnex')
const listUser = require('./userKnex')
//const listCalander = require('./calanderKnex')
//const listCalanderEntry = require('./calanderEntryKnex')
const listMenu = require('./menuKnex')
const listMenuItem = require('./menuItemKnex')
//const listDefault = require('./menuDefaultsKnex')
// This fill manages the relationships between the restfull.js routes and the fills which contain the knex 

module.exports = {

    listBussness,
    listUser,
    // listCalander,
    // listCalanderEntry,
    listMenu,
    listMenuItem,
    // listDefault
}