const express = require("express");
const kontroler = require("../controllers/lekovi");

const router = express.Router();

router.get('/', kontroler.ucitajPocetnuStranicu);
router.get('/lekovi', kontroler.ucitajLekove);
router.post('/recept', kontroler.ucitajRecept)

module.exports = router;
