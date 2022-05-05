const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fitness')
  .catch(error => {
    console.log('whoops...never connected')
  });

mongoose.connection.on('error', err => {
  console.log('huh? Error after conection');
});

const workoutSchema = new mongoose.Schema({
  exercise: String,
  sets: Number,
  repititions: Number,
  date: Date
});

const Workout = mongoose.model('Workout', workoutSchema);
// const workoutDoc = new Workout({
//   date: '05/01/2022',
//   exercise: 'sit-ups',
//   sets: 2,
//   repititions: 10
// });

// Workout.find()
//   .then((data) => { console.log(data) })

module.exports = Workout