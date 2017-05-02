var express = require('express');
var router = express.Router();
var https = require('https');
var env = require('../../.env');

/**
 * `/shards` route responsible for returning all shard data for every region.
 *
 * @param  {Object}   req  Request object
 * @param  {Object}   res  Response object
 * @param  {Function} next
 * @return {Array.Object}  List of all shard data
 */
router.get('/', function(req, res, next) {
  let options = {
    hostname: 'na.api.riotgames.com',
    path: `/lol/status/v1/shards?api_key=${env.apiKey}`,
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

/**
 * `/shards/regions` route responsible for returning the list of available
 * regions and their region tags.
 *
 * @param  {Object}   req  Request object
 * @param  {Object}   res  Response object
 * @param  {Function} next
 * @return {Array.Object}  Array of objects containing region name and tag pairs
 */
router.get('/regions', function(req, res, next) {
  let options = {
    hostname: 'na.api.riotgames.com',
    path: `/lol/status/v1/shards?api_key=${env.apiKey}`,
    method: 'GET'
  };

  const request = https.request(options, (response) => {
    let datum = '';

    response.on('data', (data) => {
      datum = data.toString('utf-8');
    }).on('end', () => {
      let dataArr = [];
      JSON.parse(datum).forEach( (shard) => {
        dataArr.push({region: shard.name, regionTag: shard.region_tag});
      });

      res.send(dataArr);
    });
  });

  request.end();
});

module.exports = router;
