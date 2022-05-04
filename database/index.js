const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fitness').
  catch(error => {
    console.log('whoops...never connected')
  });

mongoose.connection.on('error', err => {
  console.log('huh? Error after conection');
});