const { crudService } = require("../services");
const path = require("path");
const fs = require("fs");
const uploadImage = require("../middlewares/cloudinary")

// ADD task

const addTask = async (req, res) => {
  try {
    const file = req.file;
    let image = await uploadImage(req.file.path);
     console.log(image,"image");

    const body = {
      imageName: image.secure_url,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,  
    };
    
    console.log(body,"task");
    const task = await crudService.addTask(body); 
   
    if (!task) {
      throw new Error("Something went wrong");
    }


    res.status(201).json({
      message: "task Created success",
      data: task,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// const addTask = async (req, res) => {
//   try {
//     if (!req.file || !req.file.path) {
//       throw new Error("No file uploaded");
//     }

//     const file = req.file;
//     let image = await uploadImage(req.file.path);
//     console.log(image, "image");

//     const body = {
//       imageName: image.secure_url,
//       name: req.body.name,
//       email: req.body.email,
//       phone: req.body.phone,
//     };

//     console.log(body, "task");
//     const task = await crudService.addTask(body);

//     if (!task) {
//       throw new Error("Something went wrong");
//     }

//     res.status(201).json({
//       message: "task Created success",
//       data: task,
//     });
//   } catch (err) {
//     res.status(400).json({ success: false, message: err.message });
//   }
// };

// GET task

const getTask = async (req, res) => {
  const task = await crudService.getTask();
  console.log(task, "task get");

  res.render("./index.ejs", { message: task });
  // res.render('index.ejs', { title: 'Employee Records', records:task });
  // res.status(200).json({
  //   message: "task get success",
  //   data: task,
  // });
};

// UPDATE task

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);
    const task = await crudService.updateTask(id, body);
    res.status(200).json({
      message: "task updated success",
      data: task,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE task
const deleteTask = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const task = await crudService.deleteTask(id);
    if (!task) {
      throw new Error("something went wrong");
    }
res.render("./index.ejs")
    // res.status(200).json({
    //   message: "task delete success",
    //   data: task,
    // });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  getTask,
  addTask,
  updateTask,
  deleteTask,
};
