const w2v = require("word2vec");
const sentiment = require('node-sentiment');
const json = require("./topics.json");
const random = require("random");

function generateAnswer(message) {
  const words = message.split(" ").filter((word) => word.length>2);
  let similarityArray = [];

  const insult = formattedAnswer(message)
  if (insult) {
    return insult;
  }

  const resFinal = words.map(element => {
      Object.keys(json).forEach( key => {
        similarityArray.push([w2v.similarity(element,key), key]);
      });
      similarityArray.sort((a,b) => b[0]-a[0]);
      return similarityArray[0];
  });

  return SentimentAnalysis(resFinal[1],message);

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

function formattedAnswer(text) {
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
