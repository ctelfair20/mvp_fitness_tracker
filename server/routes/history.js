const express = require('express');
const router = express.Router();

const {
  getHistory,
  createHistory,
  deleteHistory,
  patchHistoryNotes
} = require('../controllers/history');



router.get('/', getHistory);
router.post('/', createHistory);
router.delete('/', deleteHistory);
router.patch('/:id', patchHistoryNotes);

module.exports = router;