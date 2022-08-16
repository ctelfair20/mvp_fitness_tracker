const Workout = require('../../database/index');

module.exports = {
  getHistory: async (req, res) => {
    try {
      const data = await Workout.find(req.query);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  },

  createHistory: (req, res) => {
    const workoutDoc = new Workout(req.body);
    workoutDoc.save();
    res.send('saved');
  },

  deleteHistory: async (req, res) => {
    try {
      await Workout.findOneAndDelete({ _id: req.body.id });
      res.send('deleted');
    } catch (err) {
      res.send(err);
    }
  }
};