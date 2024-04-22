const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dnt52iypu",
  api_key: "795424587949115",
  api_secret: "tIJc-XiaePJoGxk2mWFPIhwb7qw",
});

let uploadImage = (path) => {
 return cloudinary.uploader.upload(
    path,
    function (error, result) {
        // console.log(result);
      return result;
    }
  );
};
// uploadImage("https://sitechecker.pro/wp-content/uploads/2023/05/URL-meaning.jpg")

module.exports = uploadImage;
