var PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');
var personality_insights = new PersonalityInsightsV3({
  username: "dc9370f1-4bb2-400c-b971-e8002a334efe",
  password: "kgZ3FDvpsSmH",
  version_date: '2016-10-20'
});

var textForTesting = "Call me Ishmael. Some years ago-never mind how long precisely-having "
    + "little or no money in my purse, and nothing particular to interest me on shore, "
    + "I thought I would sail about a little and see the watery part of the world. "
    + "It is a way I have of driving off the spleen and regulating the circulation. "
    + "Whenever I find myself growing grim about the mouth; whenever it is a damp, "
    + "drizzly November in my soul; whenever I find myself involuntarily pausing before "
    + "coffin warehouses, and bringing up the rear of every funeral I meet; and especially "
    + "whenever my hypos get such an upper hand of me, that it requires a strong moral "
    + "principle to prevent me from deliberately stepping into the street, and methodically "
    + "knocking people's hats off-then, I account it high time to get to sea as soon as I can. "
    + "This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself "
    + "upon his sword; I quietly take to the ship. There is nothing surprising in this. "
    + "If they but knew it, almost all men in their degree, some time or other, cherish "
    + "very nearly the same feelings towards the ocean with me. There now is your insular "
    + "city of the Manhattoes, belted round by wharves as Indian isles by coral reefs-commerce surrounds "
    + "it with her surf. Right and left, the streets take you waterward."

var params = {
  // Get the content items from text field
  text: textForTesting,
  consumption_preferences: true,
  raw_scores: true,
  headers: {
    'accept-language': 'en',
    'accept': 'application/json'
  }
};

personality_insights.profile(params, function(error, response) {
  if (error)
    console.log('Error:', error);
  else
    var unique = {};
    res = JSON.stringify(response, null, 2);
    //console.log(Object.keys(response));
    //console.log(res);
    var personality = response["personality"];
    for (var x in personality){
        //console.log(personality[x]);
      if (personality[x]["name"] == "Openness"){
          unique["Openness"] = Number(personality[x]["percentile"]).toFixed(3) * 100;
      }
        if (personality[x]["name"] == "Openness"){
            unique["Openness"] = Number(personality[x]["percentile"]).toFixed(3) * 100;
        }
    }
    console.log(unique);

  }
);
