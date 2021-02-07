const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// This file is for testing purposes and is no part of the program.

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "Muchduck203",
    database: "nelsonfoods",
  },
});

app.get("/", (req, res) => res.send("Hello World!"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  bodyParser.json({
    limit: "8MB",
  })
);

app.get("/bussnesses", async (req, res) => {
  try {
    let bussness = await knex("bussnesses");
    res.json(bussness);
  } catch (e) {
    console.log(e);
  }
});

app.post("/bussnesses", async (req, res) => {
  try {
    let bussnessName = req.body.bussnessName;
    let address = req.body.address;
    let id = await knex("bussnesses").insert({
      bussnessName: bussnessName,
      address: address,
    });
    res.json({
      bussnessName,
      address,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

app.put("/bussnesses/:name", async (req, res) => {
  try {
    let name = req.params.name;
    let bussnessName = req.body.bussnessName;
    let address = req.body.address;

    await knex("bussnesses").where("bussnessName", name).update({
      address: address,
    });
    res.json({
      name,
      bussnessName,
      address,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

app.delete("/bussnesses/:name", async (req, res) => {
  try {
    let name = req.params.name;

    await knex("bussnesses").where("bussnessName", name).del();
    res.json({
      name,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});
