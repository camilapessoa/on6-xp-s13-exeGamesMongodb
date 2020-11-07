const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./models/repository')
db.connect()


const router = require('../src/routes/gamesRoutes');
//const { gamesCollection } = require('./models/gamesSchema');

app.use(cors());
app.use(express.json());
app.use('/', router);
//app.use('/',games);

module.exports = app;