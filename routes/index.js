var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
  // Setup CORS for multiple domains
  const allowedOrigins = ['http://localhost:3000', 'http://champdashboard.net'];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'League api' });
});

module.exports = router;
