//Function 1 Gets a List of all of the records in the menu item table
//Function 2 Get a single record basied on a primary key
//Function 3 Create a new record and inforces mandatory fields
//Function 4 Updates a record based on an ID
//Function 5 Deletes a record based on ID

//This is used to list all of the menu item
function getAllMenuItemKnex(req, res) {
  const { knex } = req.app.locals;
  knex
    .select(
      "itemID",
      "menuID",
      "itemName",
      "itemDescription", // Select column are the columns from the database
      "itemCost",
      "energy",
      "protein",
      "fat",
      "carbohydrates", // which will be retrieve and displayed to the user
      "sugar",
      "dietaryFibre",
      "sodium",
      "allergenCondentions",
      "image"
    )
    .from("menuItem") //This decides what table the columns will be selected from

    /* Provides feedback on the resaults of 
        the queary the 200 messages are a sign of success 
        and the json file is what stores the information 
        which the is displayied to the user */
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
} /*The 500 messages are error messages and this 
        provides an error message when it is displayed */

function getSingleMenuItemKnex(req, res) {
  const { knex } = req.app.locals;
  const { id } = req.params;
  knex
    .select(
      "menuID",
      "itemName",
      "itemDescription",
      "itemCost",
      "energy",
      "protein",
      "fat",
      "carbohydrates",
      "sugar",
      "dietaryFibre",
      "sodium",
      "allergenCondentions",
      "image"
    )
    .from("menuItem")
    .where({
      itemID: `${id}`, //This is the imput which lets the database find the specifid record is managed
    })

    /* Provides feedback on the resaults of 
        the queary the 200 messages are a sign of success 
        and the json file is what stores the information 
        which the is displayied to the user */
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
} /*The 500 messages are error messages and this 
        provides an error message when it is displayed */

function postMenuItemKnex(req, res) {
  const { knex } = req.app.locals;

  const payload = req.body;

  const mandatoryColumns = [
    "menuID",
    "itemName",
    "itemDescription",
    "itemCost",
  ]; //A User must fill these fields,
  //the field which are important to the sites funtinalities and users experience.
  const payloadKeys = Object.keys(payload);
  const mandatoryColumnsExists = mandatoryColumns.every((mc) =>
    payloadKeys.includes(mc)
  );
  if (mandatoryColumnsExists) {
    knex("menuItem")
      .insert(payload)
      .then((response) => {
        if (response) {
          res.status(201).json("Menu item record created");
        }
      })
      .catch((error) => res.status(500).json(error));
  } else {
    return res
      .status(400)
      .json(`Mandatory Columns are required ${mandatoryColumns}`);
  }
}

function putMenuItemKnex(req, res) {
  const { knex } = req.app.locals;
  const { id } = req.params;
  const payload = req.body;
  knex("menuItem")
    .where("itemID", id)
    .update(payload)
    .then((response) => {
      if (response) {
        res.status(204).json(`menuItem with ID ${id} updated`);
      } else {
        return res.status(404).json(`menuItem with ID ${id} not found.`);
      }
    })
    .catch((error) => res.status(500).json(error));
}

function deleteMenuItemKnex(req, res) {
  const { knex } = req.app.locals;
  const { id } = req.params;
  knex("menuItem")
    .where("itemID", id)
    .del()
    .then((response) => {
      if (response) {
        res.status(200).json(`menuItem with ID ${id} is removed.`);
      } else {
        res.status(404).json(`menuItem with ID ${id} is not found.`);
      }
    })
    .catch((error) => res.status(500).json(error));
}

module.exports = {
  getAllMenuItemKnex,
  getSingleMenuItemKnex,
  postMenuItemKnex,
  putMenuItemKnex,
  deleteMenuItemKnex,
};
