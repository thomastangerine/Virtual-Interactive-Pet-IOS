const request = require('request');
const express = require('express');

const app = express();



// define urls


app.get('foursquare'), function(req, res) {
  var ll = req.query.ll;
  request({
    url: 'https://api.foursquare.com/v2/venues/explore',
    method: 'GET',
    qs: {
      client_id: 'PHPYTFG0OU3ALNMODYC1X432CCQVOCNGW2GMRQM4JP2WVRZD',
      client_secret: 'JTLINVTFX3WRRIGESGVNZLXO2GNJ1HLWZN4GOZR52RH5JVQX',
      ll: ll,
      limit: 7
    }
  }, function(err, res, body) {
    if (err) {
      console.error(err);
    } else {
      res.send(body)
    }
  });

}

app.get('/', function(req, res) {
    res.sendFile('/Users/thomastang/Virtual-Interactive-Pet-IOS/happyMeter.html');
});
app.listen(3000, () => console.log("Listening to your app running"))
