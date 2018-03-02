var express = require('express');
var router = express.Router();
var controller = require('../controller/UserList');

router.get('/', controller.index);
router.get('/delete/:username', controller.delete);

module.exports = router;