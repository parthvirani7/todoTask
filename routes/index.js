const express = require("express")
const route =  express.Router();
const crudRoute = require("./crud.route")
route.use("/crud",crudRoute);


module.exports = route;