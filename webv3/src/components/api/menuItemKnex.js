function getAllMenuItemKnex(req, res) {
  
    const {
        knex
    } = req.app.locals
    knex
        .select('menuID', 'itemName', 'itemDescription', 'itemCost', 'energy', 'protein', 'fat', 'carbohydrates', 'sugar', 'dietaryFibre', 'sodium', 'vegaterian', 'vegan', 'allergenCondentions')
        .from('menuItem')
     
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}



function getSingleMenuItemKnex(req, res) {
  
    const {
        knex
    } = req.app.locals
    const{
        id
    } = req.params
    knex
    .select('menuID', 'itemName', 'itemDescription', 'itemCost', 'energy', 'protein', 'fat', 'carbohydrates', 'sugar', 'dietaryFibre', 'sodium', 'vegaterian', 'vegan', 'allergenCondentions')
    .from('menuItem')
        .where({
            itemID: `${id}`
        })
     
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}


function postMenuItemKnex(req, res) {
    const {
        knex
    } = req.app.locals
    
    const payload = req.body

    const mandatoryColumns = ['menuID', 'itemName', 'itemDescription', 'itemCost']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    if (mandatoryColumnsExists) {
        knex('menuItem')
            .insert(payload)
            .then(response =>{
                if (response){
                     res.status(201).json('Menu item record created')
                    }})
            .catch(error => res.status(500).json(error))

    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}


function putMenuItemKnex(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    const payload = req.body
    knex('menuItem')
        .where('itemID', id)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json(`menuItem with ID ${id} updated`)
            } else {
                return res.status(404).json(`menuItem with ID ${id} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}



function deleteMenuItemKnex(req, res) {
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex('menuItem')
        .where('itemID', id)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`menuItem with ID ${id} is removed.`)
            } else {
                res.status(404).json(`menuItem with ID ${id} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}


module.exports = {
    getAllMenuItemKnex,
    getSingleMenuItemKnex,
    postMenuItemKnex,
    putMenuItemKnex,
    deleteMenuItemKnex


}