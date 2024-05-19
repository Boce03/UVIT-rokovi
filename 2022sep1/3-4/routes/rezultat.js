const express = require("express");
const kontroler = require("../controllers/rezultat");


const router = express.Router();

router.get('/', kontroler.prikaziPocetnuStranicu);
router.get('/rezultati', kontroler.prikaziRezultate);
router.post('/novopitanje', kontroler.unesiPitanje);

module.exports = router;
