const express = require("express");
const kontroler = require("../controllers/studenti");

const router = express.Router();

router.get('/', kontroler.prikaziPocetnuStranicu);
router.get('/postignucastudenata', kontroler.prikaziStudenta);
router.post('/novopolaganje', kontroler.dodajPolaganje);

module.exports = router;
