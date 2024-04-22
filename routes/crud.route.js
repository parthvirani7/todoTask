const express = require("express")
const route =  express.Router();
const {crudController} = require("../controllers")
const validation =  require("../middlewares/validate");
const { crudValidation } = require("../validation");
const { upload } = require("../middlewares/multer");

route.post("/add",upload.single("imageName"), crudController.addTask);
route.get("/get",crudController.getTask);
route.post("/update/:id",crudController.updateTask);
route.post("/delete/:id",crudController.deleteTask);



module.exports = route