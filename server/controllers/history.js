const Workout = require('../../database/index');

module.exports = {
  getAllHistory: async (req, res) => {
    try {
      const data = await Workout.find(req.query);
      res.json(data);
    } catch (err) {
      res.send(err);
    }
  },

  getOneRecord: async (req, res) => {
    console.log(req.params)
    try {
      const record = await Workout.find({ _id: req.params.id });
      res.json(record[0].notes);
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
    //   try {
    //     const note = await Workout.find({ _id: "62fc1294032c72b301b1a713" });
    //     console.log('first note', note[0].notes);
    //     res.send(note);
    //   } catch (err) {
    //     res.send(err);
    //   }
    // }
  },

  patchHistoryNotes: async (req, res) => {
    try {
      await Workout.updateOne({ _id: req.params.id }, { notes: req.body.notes });
      res.send('updated');
    } catch (err) {
      res.send(err);
    }
  }
};