function listAllBussnessKnex(req, res) {

const {
    knex
} = req.app.locals
knex
    .select(bussnessName, address)
    .from(bussnesses)

    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error))


}