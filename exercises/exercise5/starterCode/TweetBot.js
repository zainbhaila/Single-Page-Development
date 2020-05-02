var Twitter = require('twitter');
const express = require('express');
const server = express();

var client = new Twitter({
    consumer_key: 'J6mFLQ1ua0qajIp83i3jK7Isw',
    consumer_secret: 'PxvEvyDn5dg2WA2BXYg9j4q0jXDBOYBG7njH9DaI8C6KFr6g83',
    access_token_key: '1256650341166338049-qcpnEYuuuqs1SPud2EA8o5qXY1lWDL',
    access_token_secret: '9NmVYKgjsnF742cnWXTkK4AR3D3Xfnoqi6ygFe28tPNC4'
});

server.get("/api/tweets/:query", function(req, res) {
  let searchParams = {q: req.params.query, lang: "en", count: 50};
  client.get('search/tweets', searchParams, function(error, data, response) {
    if (error) {
      console.log("Request failed: " + error);
      res.send(error);
    }
    else {
      let tweets = data.statuses.map(x => x["text"].toLowerCase()); // get all text in lower case`
      tweets = tweets.map(x => x.replace(/(https?:\/\/)?t.co\/(\w*)?/g, "").replace(/(rt )?@\w+:?/g, "")); // replace urls and RTs
      tweets = tweets.map(x => x.replace(/[\u1000-\uFFFF]+/g, "").replace(/#\w*/g, "")); // replace emojis and hashtags
      tweets = tweets.map(x => x.replace(/[^a-zA-Z\-\s]/g, "").replace(/\s+/g, " ").trim()); // replace whitespace, non-alphabetical strings

      // beginning of bag of words implementation
      tweets = tweets.map(x => x.split(" ").filter(x => x != " ")); // split and remove all spaces

      // store dictionary of words
      let word_array = [];
      for (const sentence of tweets) {
        word_array = word_array.concat(sentence);
      }
      word_array = Array.from(new Set(word_array));
      word_array.sort();



      res.send(word_array);
    }
  });
});

server.listen(5000, () => {
  console.log("Connected.");
});
