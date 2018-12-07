const w2v = require("word2vec"); //import word2vec for using similarities
const sentiment = require('node-sentiment'); //import sentiment
const json = require("./topics.json");
const random = require("random"); //import random number

function generateAnswer(message) { //this function fetch the JSON to find the more similar subreddit and send sarcastic quotes
  const words = message.split(" ").filter((word) => word.length>2); //delete short words because it doesn't mean anything
  let similarityArray = []; //we build the similarity array

  const insult = formattedAnswer(message) //detect if there is an insult
  if (insult) {
    return insult;
  }

  const resFinal = words.map(element => { //we store in resFinal a value with the max similarity and the associated topic
      Object.keys(json).forEach( key => {
        similarityArray.push([w2v.similarity(element,key), key]);
      });
      similarityArray.sort((a,b) => b[0]-a[0]);
      return similarityArray[0];
  });

  return SentimentAnalysis(resFinal[1],message); //return sentiment analysis on the topic given the input

}

function SentimentAnalysis(topic,text) {
  let quotes = [];
  const sentimentInput = sentiment(text);
  json[topic].forEach( value => {
    if (sentiment(value) != sentimentInput) { // for the sake of sarcasm : we respond with the inverse sentiment
      quotes.push(value);  // store the different quotes associated with the topic
    }
  });
  const size = quotes.length();
  const r = random(min = 0, max = size -1);
  return quotes[r]; //chose a random one since there may be several ones

}

function formattedAnswer(text) { // detect the insults
  var answer

  const swrWords = ["arse","arsehole","arses","ass","asses","asshole","bastard","bitch","bloody","boob","butt","butts","cock","cocks","crap","crappy","cunt","damn","dang","darn","dick","dicks","dumb","dyke","fuck","fucked","fucker","fuckin","fucks","goddam","heck","hell","homo","jeez","mofo","motherf","nigger","piss","prick","pussy","queer","screw","shit","sob","sonofa","suck","sucked","sucks","tit","tits","titties","titty","wanker"];
  swrWords.forEach(word => {
    if (text.indexOf(word) !== -1) {
      answer = "Wow, you said '" + word +"', didn't you? Your mom will be really proud of you!"
      return answer
    }
  });
  return false

}
