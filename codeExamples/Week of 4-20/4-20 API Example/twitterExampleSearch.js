var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});


//print the text from each tweet

//JSON
//field for statuses
//array inside
//each array entry is a JSON
//each entry has a 'text' field

let searchParam = {q:'socks', count:50 };
client.get('search/tweets', searchParam, function(error,data,response){
    if(error){
        console.log('Not good');
    }else{
         let statuses= data.statuses;
         for(let i=0; i<statuses.length; i++){
             let text = statuses[i].text;
             console.log(text);
         }
    }

})