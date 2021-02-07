/* This file hands all of my programs connections to the Bussness database */

// This funtion is used for filtering basied on bussessness
/* This funtion gets a list of all of addresses and bussnessname from the bussnesses table */
function getAllBussnessKnex(req, res) {
  const {
    // Establishes a local connection to the database
    knex,
  } = req.app.locals;
  knex
    .select("bussnessName", "address") // Select statement mirror those which are use with SQL
    .from("bussnesses") // Choice which table we select from

    .then((data) => res.status(200).json(data)) // After the select statement this line of code returns an all clear message as well as the obtained data.
    .catch((error) => res.status(500).json(error)); // Displayers an error if the task isn't successful and returns and error message.
}

// This is used as a way to select on relvant informaion for a log in user as well as filtering for a single bussness
// This funtion get a single bussness from the bussnesses table. This selection is basied an entered busssness name
function getSingleBussnessKnex(req, res) {
  const { knex } = req.app.locals;
  const {
    name, // This area gain the name field from the route which is called aka /:name
  } = req.params;
  knex
    .select("bussnessName", "address") // Select statement mirror those which are use with SQL
    .from("bussnesses") // Choice which table we select from
    .where({
      bussnessName: `${name}`, // Selects only the database enters which match the entered name, as the name is the primary key there shouldn't be any duplicates.
    })

    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
}

// Used for creating a  new bussness
// This funtion creates a new bussness
function postBussnessKnex(req, res) {
  const { knex } = req.app.locals;

  const payload = req.body; // Stores the large amount of data which is needed for this in the payload

  const mandatoryColumns = ["bussnessName", "address"]; // This columns can not be left blank when the user enters new records.
  const payloadKeys = Object.keys(payload);
  const mandatoryColumnsExists = mandatoryColumns.every((mc) =>
    payloadKeys.includes(mc)
  ); // Makes sure that the paylaoad confonforms to the mandator column rules
  if (mandatoryColumnsExists) {
    knex("bussnesses")
      .insert(payload)
      .then((response) => {
        if (response) {
          res.status(201).json("Bussness record created"); // if the payload has the correct madatory feild this will enter the data into the database and return a confirmation message
        }
      })
      .catch((error) => res.status(500).json(error)); // Regualar error
  } else {
    return res
      .status(400)
      .json(`Mandatory Columns are required ${mandatoryColumns}`); // Error for which is for when a manadory column is not filled.
  }
}

// Funtion for updating a bussness
function putBussnessKnex(req, res) {
  const { knex } = req.app.locals;
  const {
    name, // Has both the standard naming paramater and the payload peramitor as it needs to target a spicifc record and update as much of that information as required
  } = req.params;
  const payload = req.body;
  knex("bussnesses")
    .where("bussnessName", name)
    .update(payload)
    .then((response) => {
      if (response) {
        res.status(204).json(`Bussness with name ${name} updated`);
      } else {
        // These messages dissplay the name of the bussness as part of the error/confirmation messages
        return res.status(404).json(`Bussness with name ${name} not found.`);
      }
    })
    .catch((error) => res.status(500).json(error));
}

// This function will allow the user to delete bussness records
function deleteBussnessKnex(req, res) {
  const { knex } = req.app.locals;
  const { name } = req.params;
  knex("bussnesses")
    .where("bussnessName", name)
    .del() // the knex equivilant to the delete sql function
    .then((response) => {
      if (response) {
        res.status(200).json(`Bussness with name ${name} is removed.`);
      } else {
        res.status(404).json(`Bussnes with name ${name} is not found.`);
      }
    })
    .catch((error) => res.status(500).json(error));
}

module.exports = {
  // This are allows for the funtions of this file to be exported and use in other files.
  getAllBussnessKnex,
  getSingleBussnessKnex,
  postBussnessKnex,
  putBussnessKnex,
  deleteBussnessKnex,
};
