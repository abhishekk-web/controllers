const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const shopController = require('../controllers/product');

const adminData = require('./admin');

const router = express.Router();

router.get('/', shopController.getProducts);

module.exports = router;
