const APIServerPort = 4200; // Sets up the port which will be used by the servers api/backend

const database = {
  // Creates a connection to the database and provides the information need to connect to that database

  host: "localhost",
  port: 3306,
  user: "root",
  password: "Muchduck203",
  database: "nelsonfoods",
  insecureAuth: true,
};

module.exports = {
  database, // Exports the connection to the database
  APIServerPort, // Export the choosen port so other files can use it
};
