var express = require('express');
var router = express.Router();
var https = require('https');

/**
 * `/summoners/by-name` route responsible for fetching summoner information.
 *
 * @param  {Object}   req  Request object. Contains the summonerName string used
 *                         to search by summoner name.
 * @param  {Object}   res  Response object.
 * @param  {Function} next
 * @return {Object}        Returns the summoner object information for the
 *                         supplied name.
 */
router.get('/by-name', function(req, res, next) {
  const summonerName = req.query.summonerName;

  if (!summonerName) {
    res.status(404).send({
      message: "You must supply a summoner name."
    });
    return false;
  }

  // Setting this to na1 for now until I work more on shard region tags.
  const options = {
    hostname: 'na1.api.riotgames.com',
    path: `/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${req.apiKey}`,
    method: 'GET'
  };

  const request = https.request(options, (response) => {
    let datum = '';

    response.on('data', (data) => {
      datum = data.toString('utf-8');
    }).on('end', () => {
      res.send(JSON.parse(datum));
    });
  });

  request.end();
});

module.exports = router;
