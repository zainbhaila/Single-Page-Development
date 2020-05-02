var Twitter = require('twitter');
const express = require('express');
const server = express();

var client = new Twitter({
    consumer_key: 'J6mFLQ1ua0qajIp83i3jK7Isw',
    consumer_secret: 'PxvEvyDn5dg2WA2BXYg9j4q0jXDBOYBG7njH9DaI8C6KFr6g83',
    access_token_key: '1256650341166338049-qcpnEYuuuqs1SPud2EA8o5qXY1lWDL',
    access_token_secret: '9NmVYKgjsnF742cnWXTkK4AR3D3Xfnoqi6ygFe28tPNC4'
});

// a function to get the most frequent element of a list
// has a mild random element to it
function rand_mode(lst) {
  let counting = {};
  for (i of lst) { // get counts of each element
    counting[i] = (counting[i] != undefined ? counting[i] : 0) + 1;
  }

  let max = "";
  let count = 0;
  for (i in counting) { // get the max element
    if (counting[i] > count) {
      count = counting[i];
      max = i;
    }
    else if (counting[i] === count) { // if values are the same pick 50/50
      if (Math.round(Math.random()) == 0) {
        count = counting[i];
        max = i;
      }
    }
    else {
      if (Math.random() < .2) {
        count = counting[i];
        max = i;
      }
    }
  }

  return max;
}

server.get("/api/tweets/:query", function(req, res) {
  let searchParams = {q: req.params.query, lang: "en", count: 50};
  client.get('search/tweets', searchParams, function(error, data, response) {
    if (error) {
      console.log("Request failed: " + error);
      res.send(error);
    }
    else {
      // cleaning tweets before putting them in bag of words
      let tweets = data.statuses.map(x => x["text"].toLowerCase()); // get all text in lower case
      tweets = tweets.map(x => x.replace(/(https?:\/\/)?t.co\/(\w*)?/g, "").replace(/(rt )?@\w+:?/g, "")); // replace urls and RTs
      tweets = tweets.map(x => x.replace(/[\u1000-\uFFFF]+/g, "").replace(/#\w*/g, "")); // replace emojis and hashtags
      tweets = tweets.map(x => x.replace(/[^a-zA-Z\-\s]/g, "").replace(/\s+/g, " ").trim()); // replace whitespace, non-alphabetical strings
      tweets = tweets.map(x => x.split(" ").filter(x => x != " ")); // split and remove all spaces

      /*
      // beginning of bag of words implementation
      // store dictionary of words
      let word_array = [];
      for (const sentence of tweets) {
        word_array = word_array.concat(sentence);
      }
      word_array = Array.from(new Set(word_array));
      word_array.sort();

      let base_zeroes = Array(word_array.length).fill(0); // create base sparse array for each sentence

      // store vectorization of each sentence
      let count_array = [];
      for (const sentence of tweets) {
        let temp_zeroes = base_zeroes.slice(); // clone the base sparse array
        for (const word of sentence) {
          let i = word_array.indexOf(word);
          temp_zeroes[i] += 1;
        }
        count_array.push(temp_zeroes);
      }
      */

      // word positional frequency
      let structure = []
      for (const sentence of tweets) {
        for (const i in sentence) {
          if (i > structure.length - 1) {
            structure.push([]);
          }
          structure[i].push(sentence[i])
        }
      }
      structure = structure.map(x => rand_mode(x));

      // build the new tweet
      let new_tweet = "";
      for (i in structure) {
        if ((new_tweet + " " + structure[i]).length <= 280) {
          new_tweet += " " + structure[i];
        }
        else {
          break;
        }
      }

      res.send(new_tweet);
    }
  });
});

server.listen(5000, () => {
  console.log("Connected.");
});
