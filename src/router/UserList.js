var express = require('express');
var router = express.Router();
var controller = require('../controller/UserList');

router.get('/', controller.index);
router.get('/update', controller.redirecttoindex);
router.get('/delete/:id', controller.delete);
router.get('/update/:id', controller.getUpdate);
router.post('/update', controller.postUpdate);

module.exports = router;