// This class is not commonly used

function getAllMenuKnex(req, res) {
  const { knex } = req.app.locals;
  knex
    .select("bussnessName", "address")
    .from("bussnesses")

    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
}

// This funtion is occasionally used to find the relationship between menu items and bussnesses
function getSingleMenuKnex(req, res) {
  const { knex } = req.app.locals;
  // const { id } = req.params;
  knex
    .select("bussnessName", "address")
    .from("bussnesses")
    .where({
      id: "bussnessName",
    })

    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
}

// Used mostly when a new bussness is created
function postMenuKnex(req, res) {
  const { knex } = req.app.locals;

  const payload = req.body;

  const mandatoryColumns = ["bussnessName", "address"];
  const payloadKeys = Object.keys(payload);
  const mandatoryColumnsExists = mandatoryColumns.every((mc) =>
    payloadKeys.includes(mc)
  );
  if (mandatoryColumnsExists) {
    knex("bussnesses")
      .insert(payload)
      .then((response) => res.status(201).json("Bussness record created"))
      .catch((error) => res.status(500).json(error));
  } else {
    return res
      .status(400)
      .json(`Mandatory Columns are required ${mandatoryColumns}`);
  }
}

// Only used to completely replace a menu
function putMenuKnex(req, res) {
  const { knex } = req.app.locals;
  const { id } = req.params;
  const payload = req.body;
  knex("bussnesses")
    .where("bussnessName", id)
    .update(payload)
    .then((response) => {
      if (response) {
        res.status(204).json();
      } else {
        return res.status(404).json(`Bussness with name ${id} not found.`);
      }
    })
    .catch((error) => res.status(500).json(error));
}

function deleteMenuKnex(req, res) {
  const { knex } = req.app.locals;
  const { id } = req.params;
  knex("bussneses")
    .where("bussnessName", id)
    .del()
    .then((response) => {
      if (response) {
        res.status(200).json(`Bussness with name ${id} is removed.`);
      } else {
        res.status(404).json(`Bussnes with name ${id} is not found.`);
      }
    })
    .catch((error) => res.status(500).json(error));
}

module.exports = {
  getAllMenuKnex,
  getSingleMenuKnex,
  postMenuKnex,
  putMenuKnex,
  deleteMenuKnex,
};
