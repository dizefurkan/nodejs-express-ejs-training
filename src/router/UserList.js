var express = require('express');
var router = express.Router();
var controller = require('../controller/UserList');

router.get('/', controller.index);
router.get('/delete/:username', controller.delete);
router.get('/update/:username', controller.getUpdate);
router.post('/update', controller.postUpdate);

module.exports = router;