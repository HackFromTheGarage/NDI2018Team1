const w2v = require("word2vec");
const sentiment = require('node-sentiment');
const json = require("./topics.json");
const random = require("random");

function generateAnswer(message) {
  const words = message.split(" ").filter((word) => word.length>2);
  let similarityArray = [];

  const resFinal = words.map(element => {
      Object.keys(json).forEach( key => {
        similarityArray.push([w2v.similarity(element,key), key]);
      });
      similarityArray.sort((a,b) => b[0]-a[0]);
      return similarityArray[0];
  });

  return SentimentAnalysis(resFinal,message);

}

function SentimentAnalysis(topic,text) {
  let quotes = [];
  const sentimentInput = sentiment(text);
  json[topic].forEach( value => {
    if (sentiment(value) != sentimentInput) {
      quotes.push(value);
    }
  });
  const size = quotes.length();
  const r = random(min = 0, max = size -1);
  return quotes[r];

}
