const express = require('express');
const cors = require('cors');

const historyRoutes = require('./routes/history');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());
// app.use(express.static("build"));
// app.use(express.static("public"));

app.use('/', historyRoutes);

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});

