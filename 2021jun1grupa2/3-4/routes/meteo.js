const express = require("express");
const kontroler = require('../controllers/meteo');

const router = express.Router();

router.get('/', kontroler.dohvatiStatistike);
router.post('/detalji', kontroler.dohvatiDetalje);

module.exports = router;
