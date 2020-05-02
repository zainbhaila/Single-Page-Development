var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

let searchParam = {id:'1253489042668175361' };
client.get('statuses/lookup', searchParam, function(error,data,response){
    if(error){
        console.log('Not good');
    }else{
        let tweetJSON = data[0];
        console.log(data[0]);
    }

})


