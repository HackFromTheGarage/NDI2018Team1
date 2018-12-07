//const w2v = require("word2vec"); //import word2vec for using similarities
var sentiment = require('node-sentiment'); //import sentiment
const json = require("./topics.json");
var levenshtein = require('fast-levenshtein');

var Filter = require('bad-words'),
    filter = new Filter();

function generateAnswer(message) { //this function fetch the JSON to find the more similar subreddit and send sarcastic quotes
  const words = message.split(" ").filter((word) => word.length>2); //delete short words because it doesn't mean anything

  const insult = formattedAnswer(message) //detect if there is an insult
  if (insult) {
    return insult;
  }

  const resFinal = words.map(element => { //we store in resFinal a value with the max similarity and the associated topic
      let similarityArray = []; //we build the similarity array
      Object.keys(json).forEach( key => {
        similarityArray.push([levenshtein.get(element,key), key]);
      });
      similarityArray.sort((a,b) => a[0]-b[0]);
      return similarityArray[0];
  });

  resFinal.sort((a,b) => a[0]-b[0])

  const comments = json[resFinal[0][1]];

  const rand = parseInt(Math.random()*(comments.length - 1));

  console.log(rand, comments[rand])

  return comments[rand];

  //return SentimentAnalysis(resFinal[0][1],message); //return sentiment analysis on the topic given the input

}

function SentimentAnalysis(topic,text) {
  let quotes = [];
  const sentimentInput = sentiment(text);
  console.log(sentimentInput, text)
  json[topic].forEach( value => {
    if (sentiment(value) != sentimentInput) { // for the sake of sarcasm : we respond with the inverse sentiment
      quotes.push(value);  // store the different quotes associated with the topic
    }
  });
  const size = quotes.length;
  const r = Math.random()*(size-1);
  return quotes[r]; //chose a random one since there may be several ones

}

function formattedAnswer(text) { // detect the insults

  if (filter.isProfane(text)) {
    return "Wow so classy ... Your mom didn't tell you to be more polite ?";
  }

}

module.exports = generateAnswer;
