const express = require('express');

const router = express.Router();

const userListController = require('../controllers/userList');

router.get('/', userListController.prikaziKorisnike);
router.get('/user', userListController.obrisiKorisnika);
router.post('/starost', userListController.izdvojPoStarosti);

module.exports = router;
