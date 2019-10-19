function getAllBussnessKnex(req, res) {
  
    const {
        knex
    } = req.app.locals
    knex
        .select('bussnessName', 'address')
        .from('bussnesses')
     
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}



function getSingleBussnessKnex(req, res) {
  
    const {
        knex
    } = req.app.locals
    const{
        name
    } = req.params
    knex
        .select('bussnessName', 'address')
        .from('bussnesses')
        .where({
            bussnessName: `${name}`
        })
     
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}


function postBussnessKnex(req, res) {
    const {
        knex
    } = req.app.locals
    
    const payload = req.body

    const mandatoryColumns = ['bussnessName', 'address']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    if (mandatoryColumnsExists) {
        knex('bussnesses')
            .insert(payload)
            .then(response =>{
                if (response){
                     res.status(201).json('Bussness record created')
                    }})
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}


function putBussnessKnex(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        name
    } = req.params
    const payload = req.body
    knex('bussnesses')
        .where('bussnessName', name)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json(`Bussness with name ${name} updated`)
            } else {
                return res.status(404).json(`Bussness with name ${name} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}



function deleteBussnessKnex(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        name
    } = req.params
    knex('bussnesses')
        .where('bussnessName', name)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Bussness with name ${name} is removed.`)
            } else {
                res.status(404).json(`Bussnes with name ${name} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}


module.exports = {
    getAllBussnessKnex,
    getSingleBussnessKnex,
    postBussnessKnex,
    putBussnessKnex,
    deleteBussnessKnex


}