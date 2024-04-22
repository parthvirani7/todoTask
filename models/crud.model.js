const { string } = require("joi");
const mongoose = require("mongoose");
const crudSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default:true,
    },
  },
  {
    timestamps: true,
  }
);

const crud = mongoose.model("crudSchema", crudSchema);

module.exports = crud
