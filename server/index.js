const path = require('path');
const express = require('express');
const Workout = require('../database/index');

const app = express();
var cors = require('cors');
const port = 4000;
// const publicPath = path.join(__dirname, '..', 'public');
app.use(cors());
app.use(express.json());
app.use(express.static("build"));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/workout', (req, res) => {
  console.log('req', req.query)
  Workout.find(req.query)
    .then((data) => {
      // console.log(data);
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

