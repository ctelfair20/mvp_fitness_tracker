const express = require('express');
const { getHistory, createHistory, deleteHistory } = require('../controllers/history');
const router = express.Router();

router.get('/', getHistory);
router.post('/', createHistory);
router.delete('/', deleteHistory);

module.exports = router;