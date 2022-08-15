const express = require('express');
const Workout = require('../database/index');
const cors = require('cors');

const historyRoutes = require('./routes/history');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
// app.use(express.static("build"));
// app.use(express.static("public"));
// app.use((req, res, next) => { console.log(req.url); next() })

//test route
app.use('/', historyRoutes);

app.delete('/workout', (req, res) => {
  console.log("trying to delete")
})

app.listen(port, () => {
  console.log(`listening in port ${port}`)
})

