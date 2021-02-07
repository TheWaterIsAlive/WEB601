// import {store} from "../../redux/store/index";
// //import connect from "react-redux";
// import { LOGIN } from "../../redux/constants/action-types";
//Function 1 Gets a List of all of the records in the usertable
//Function 2 Get a single record basied on a primary key
//Function 3 Create a new record and inforces mandatory fields
//Function 4 Updates a record based on a Username
//Function 5 Deletes a record based on a USername

// const mapDispatchToProps = (dispatch) => {
//     return {

//         login: (usersName) => {

//             dispatch({type: LOGIN, payload: usersName})

//         }

//     };
//   }

//List users for administration purposes
function getAllUserKnex(req, res) {
  const { knex } = req.app.locals;
  knex
    .select("username", "accountPassword", "email", "bussnessName")
    .from("users")

    /* Provides feedback on the resaults of 
        the queary the 200 messages are a sign of success 
        and the json file is what stores the information 
        which the is displayied to the user */
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
} /*The 500 messages are error messages and this 
        provides an error message when it is displayed */

function getSingleUserKnex(req, res) {
  const { knex } = req.app.locals;
  const { name } = req.params;
  knex
    .select("username", "accountPassword", "email", "bussnessName")
    .from("users")
    .where({
      username: `${name}`, //This is the imput which lets the database find the specifid record is managed
    })

    /* Provides feedback on the resaults of 
        the queary the 200 messages are a sign of success 
        and the json file is what stores the information 
        which the is displayied to the user */
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json(error));
} /*The 500 messages are error messages and this 
        provides an error message when it is displayed */

function postUserKnex(req, res) {
  const { knex } = req.app.locals;

  const payload = req.body;

  const mandatoryColumns = ["username", "accountPassword", "email"];
  const payloadKeys = Object.keys(payload);
  const mandatoryColumnsExists = mandatoryColumns.every((mc) =>
    payloadKeys.includes(mc)
  );
  if (mandatoryColumnsExists) {
    knex("users")
      .insert(payload)
      .then((response) => {
        if (response) {
          res.status(201).json("User item record created");
          // store.dispatch(logIn({username}));
        }
      })
      .catch((error) => res.status(500).json(error));
  } else {
    return res
      .status(400)
      .json(`Mandatory Columns are required ${mandatoryColumns}`);
  }
}

function putUserKnex(req, res) {
  const { knex } = req.app.locals;
  const { name } = req.params;
  const payload = req.body;
  knex("users")
    .where("username", name)
    .update(payload)
    .then((response) => {
      if (response) {
        res.status(204).json(`User with ID ${name} updated`);
      } else {
        return res.status(404).json(`User with ID ${name} not found.`);
      }
    })
    .catch((error) => res.status(500).json(error));
}

function deleteUserKnex(req, res) {
  const { knex } = req.app.locals;
  const { name } = req.params;
  knex("users")
    .where("username", name)
    .del()
    .then((response) => {
      if (response) {
        res.status(200).json(`User with ID ${name} is removed.`);
      } else {
        res.status(404).json(`User with ID ${name} is not found.`);
      }
    })
    .catch((error) => res.status(500).json(error));
}

// const ConnectedAddUser = connect(null, mapDispatchToProps)(postUserKnex);
module.exports = {
  //This are allows for the funtions of this file to be exported and use in other files.
  getAllUserKnex,
  getSingleUserKnex,
  postUserKnex,
  putUserKnex,
  deleteUserKnex,
};
