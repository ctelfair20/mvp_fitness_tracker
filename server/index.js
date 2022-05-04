const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/workout', (req, res) => {
  res.send('I did the thing')
})

app.listen(port, () => {
  console.log(`listening in port ${port}`)
})

