const { crudSchema } = require("../models");

const addTask = (body) => {
 
  return crudSchema.create(body);
  
};

const getTask = () => {
  return crudSchema.find();
};

const updateTask = (id, body) => {
  return crudSchema.findByIdAndUpdate(id, body);
};
const deleteTask = (id) => {
  return crudSchema.findByIdAndDelete(id);
};

module.exports = { addTask,getTask,updateTask,deleteTask };
