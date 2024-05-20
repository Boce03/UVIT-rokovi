const express = require("express");
const kontroler = require("../controllers/izvodjaci");
const kontrolerGlas = require('../controllers/glasanja');

const router = express.Router();

router.get('/', kontroler.prikaziPocetnuStranicu);
router.get('/rezultatiglasanja', kontroler.unesiRezultateGlasanja);
router.post('/izvestaj', kontroler.prikaziIzvestaj);

module.exports = router;
