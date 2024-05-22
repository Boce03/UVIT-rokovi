const express = require("express");
const kontroler = require("../controllers/raspored");

const router = express.Router();

router.get('/', kontroler.prikaziPocetnuStranicu);
router.get('/raspored', kontroler.prikaziRaspored);
router.post('/raspored/obrisi', kontroler.obrisiCas);

module.exports = router;
