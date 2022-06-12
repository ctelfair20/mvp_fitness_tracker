const express = require('express');
const Workout = require('../database/index');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
app.use(express.static("build"));
app.use(express.static("public"));

app.get('/workout', (req, res) => {
  console.log('req', req.query)
  Workout.find(req.query)
    .then((data) => {
      res.json(data);
    }).catch(err => {
      res.send(err);
    })
})

app.post("/workout", (req, res) => {
  console.log("Connected to React");
  console.log('req.body', req.body);
  const workoutDoc = new Workout(req.body);
  workoutDoc.save();
  res.send('saved')
});

app.listen(port, () => {
  console.log(`listening in port ${port}`)
})

