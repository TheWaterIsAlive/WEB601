const express = require("express");
const app = express();
// const port = 3000;
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
    const bussness = await knex("bussnesses");
    res.json(bussness);
  } catch (e) {
    console.log(e);
  }
});

app.post("/bussnesses", async (req, res) => {
  try {
    const bussnessName = req.body.bussnessName;
    const address = req.body.address;
    // eslint-disable-next-line no-unused-vars
    const id = await knex("bussnesses").insert({
      bussnessName: bussnessName,
      address: address,
    });
    res.json({
      bussnessName,
      address,
    });
  } catch (e) {
    console.log(e);
    // eslint-disable-next-line no-undef
    next(e);
  }
});

app.put("/bussnesses/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const bussnessName = req.body.bussnessName;
    const address = req.body.address;

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
    // eslint-disable-next-line no-undef
    next(e);
  }
});

app.delete("/bussnesses/:name", async (req, res) => {
  try {
    const name = req.params.name;

    await knex("bussnesses").where("bussnessName", name).del();
    res.json({
      name,
    });
  } catch (e) {
    console.log(e);
    // eslint-disable-next-line no-undef
    next(e);
  }
});
