// make a connection
// require mongoose
const mongoose = require('mongoose');
// this returns a promoise
mongoose.connect('mongodb://localhost:27017/practice')
  .then(() => {
    console.log("connection success!")
  })   // check of errors after connection
  .catch((err) => {
    console.log("ERROR ON INITIAL CONNECTION: ", err);
  })

// create a schema

const praticeSchema = new mongoose.Schema({
  title: String,
  image: String,
  summary: String,
  genre: Array
});

// create a model
const Anime = mongoose.model('Anime', praticeSchema);
// export that module

module.exports = Anime;