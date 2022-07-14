module.exports = {
  getHistory: (req, res) => {
    res.send('Should get all history for a given day');
  },

  createHistory: (req, res) => {
    res.send('Should create a new history for a given day');
  },
}