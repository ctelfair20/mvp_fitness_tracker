const Workout = require('../../database/index');

module.exports = {
  getHistory: (req, res) => {
    Workout.find(req.query)
      .then((data) => {
        res.json(data);
      }).catch(err => {
        res.send(err);
      })
  },

  createHistory: (req, res) => {
    const workoutDoc = new Workout(req.body);
    workoutDoc.save();
    res.send('saved')
  },
}