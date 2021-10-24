const express = require('express');
const Twitter = require('twit');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const client = new Twitter({
    consumer_key: 'BE88at7QqkLtcy29PFhL8BNL9',
    consumer_secret: 't75ZlPlf9o6Etkr35CPjdL2Kn5ed6yzvt5F1FiCz5E606Pf51w',
    access_token: '1194145778568032256-JQ1wWOxQkGBpxjMFNcK5jYSWh31uHf',
    access_token_secret: 'hgeW8pKnc3KcDXIxNoluHblvgQQHXC5uyIfRWbHSbzwRP'
  });

// ----------------------------Get Home TimeLine with 10 record---------------------
app.get('/home_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
   
    client
      .get(`statuses/home_timeline`, params)
      .then(timeline => {
         
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});

// ----------------------------Get Mentions TimeLine with 10 record---------------------
app.get('/mentions_timeline', (req, res) => {
    const params = { tweet_mode: 'extended', count: 10 };
   
    client
      .get(`statuses/mentions_timeline`, params)
      .then(timeline => {
       
        res.send(timeline);
      })
      .catch(error => {
      res.send(error);
    });
      
});

// ----------------------------Posting Tweets---------------------
app.post('/post_tweet', (req, res) => {
 
   const {tweet} = req.body;
     
      client
        .post(`statuses/update`, tweet)
        .then(tweeting => {
          console.log(tweeting);
           
          res.send(tweeting);
        })
   
       .catch(error => {
        res.send(error);
      });
});

// ----------------------------Delete Tweets---------------------
app.post('/delete_tweet/:id', (req, res) => {
  const { id } = req.params;
  // tweet delete by data[i].id_str
     client.post('statuses/destroy/:id', { id: id }, function (err, data, response) {
      res.send('tweet deleted')
    })

});

// ----------------------------Search Tweets---------------------
app.post('/search_tweet', (req, res) => {
 
  const { tweet } = req.body;
  client.get('search/tweets', {q: tweet}, function(error, tweets, response) {
    res.send(tweets.statuses);
 });
});
app.listen(4000, () => console.log('Server running'))