const mongoose = require("mongoose");

connectdb = () => {
  mongoose
    .connect(process.env.URI)
    .then(() => {
      console.log("db connect success");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

module.exports = {connectdb};
