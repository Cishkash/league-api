var express = require('express');
var router = express.Router();

router.use('/shards', require('./static/shards'));

module.exports = router;
