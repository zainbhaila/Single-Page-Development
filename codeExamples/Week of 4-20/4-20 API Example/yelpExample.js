
const yelp = require('yelp-fusion');

const apiKey = '';
const client = yelp.client(apiKey);

let searchParams = {term: 'Bob\'s Shanghai 66', location: 'rockville, md'}
client.search(searchParams).then((response) => {
    console.log(response.jsonBody.businesses[0].name)
}).catch(
    e => { console.log(e);});