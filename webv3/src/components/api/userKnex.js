function getAllUserKnex(req, res) {
  
    const {
        knex
    } = req.app.locals
    knex
        .select('username', 'accountPassword', 'email', 'bussnessName')
        .from('users')
     
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}



function getSingleUserKnex(req, res) {
  
    const {
        knex
    } = req.app.locals
    const{
        name
    } = req.params
    knex
    .select('username', 'accountPassword', 'email', 'bussnessName')
    .from('users')
        .where({
            username: `${name}`
        })
     
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}


function postUserKnex(req, res) {
    const {
        knex
    } = req.app.locals
    
    const payload = req.body

    const mandatoryColumns = ['username', 'accountPassword', 'email']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    if (mandatoryColumnsExists) {
        knex('users')
            .insert(payload)
            .then(response =>{
                if (response){
                     res.status(201).json('User item record created')
                    }})
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}


function putUserKnex(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        name
    } = req.params
    const payload = req.body
    knex('users')
        .where('username', name)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json(`User with ID ${name} updated`)
            } else {
                return res.status(404).json(`User with ID ${name} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}



function deleteUserKnex(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        name
    } = req.params
    knex('users')
        .where('username', name)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`User with ID ${name} is removed.`)
            } else {
                res.status(404).json(`User with ID ${name} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}


module.exports = {
    getAllUserKnex,
    getSingleUserKnex,
    postUserKnex,
    putUserKnex,
    deleteUserKnex


}