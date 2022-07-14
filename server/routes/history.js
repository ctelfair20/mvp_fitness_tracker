const express = require('express');
const { getHistory, createHistory } = require('../controllers/history');
const router = express.Router();

router.get('/', getHistory);
router.post('/', createHistory);

module.exports = router;