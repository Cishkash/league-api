var express = require('express');
var router = express.Router();

router.use('/shards', require('./static/shards'));
router.use('/summoners', require('./summoner/summoners'));

module.exports = router;
