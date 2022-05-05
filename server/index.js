// const path = require('path');
const express = require('express');
const Workout = require('../database/index');

const app = express();
const port = 4000;
// const publicPath = path.join(__dirname, '..', 'public');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/workout', (req, res) => {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
})
///////THIS WORKS IN POSTMAN////////////
// app.post("/workout", (req, res) => {
//   console.log('req.body', req.body)
//   res.send('I did the thing');
// });
app.post("/workout", (req, res) => {
  console.log("Connected to React");
  console.log('req.body', req.body);
  const workoutDoc = new Workout(req.body);
  workoutDoc.save();
  res.send('saved')
});

// app.post("/workoutz", (req, res) => {
//   console.log("Connnnnnnected to React");
//   console.log('req.body', req.body);
//   // res.redirect("/");
// });

app.listen(port, () => {
  console.log(`listening in port ${port}`)
})

