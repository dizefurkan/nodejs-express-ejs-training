var express = require('express');
var router = express.Router();
var controller = require('../controller/Login.js');

router.get('/', controller.index);
router.post('/', controller.submit);

module.exports = router;