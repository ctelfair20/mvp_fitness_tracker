const express = require('express');
const router = express.Router();

const {
  getAllHistory,
  getOneRecord,
  createHistory,
  deleteHistory,
  patchHistoryNotes
} = require('../controllers/history');



router.get('/', getAllHistory);
router.get('/:id', getOneRecord);
router.post('/', createHistory);
router.delete('/', deleteHistory);
router.patch('/:id', patchHistoryNotes);

module.exports = router;