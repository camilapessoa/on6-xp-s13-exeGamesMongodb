const express = require('express');
const controller = require('../controllers/gamesControllers');
const router = express.Router();
//const cors = require('cors');

router.get('/games', controller.getAllGames);

router.get('/games/:id', controller.getGameById);

/* router.put('/games/:id', cors(), controller.updateAllGame);

router.patch('/games/:id', cors(), controller.updatePartGame);  */

module.exports = router;