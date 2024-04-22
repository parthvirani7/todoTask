const multer = require("multer");

const fs = require("fs");
const path = require("path");

// for storage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync(path.join(__dirname, "../public/images"), { recursive: true }),
      cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    cb(null,file.originalname);
  },
});

// for upload

const upload = multer({ storage: storage });
module.exports = { upload };
