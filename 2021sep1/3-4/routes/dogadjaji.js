const express = require("express");
const kontroler = require('../controllers/dogadjaj');

const router = express.Router();

router.get('/', kontroler.prikaziPocetnu);
router.get('/dogadjaji', kontroler.prikaziDogadjaje);
router.post('/dogadjaji/azuriraj', kontroler.prikaziAzuriranDogadjaj);

module.exports = router;
