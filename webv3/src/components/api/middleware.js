//Makes sure that an idea is a number
function checkID(req, res, next) {
  const id = +req.params.id; //gets imput from parent
  if (Number.isInteger(id)) {
    //Check if input is a number
    next(); //If it is move to next middleware
  } else {
    return res.status(400).json("ID must be an integer"); //Shows a error message and end the commication
  }
}

module.exports = {
  checkID, //export middleware so they can be used
};
