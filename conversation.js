
//functions to call
function basketball() {
  inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
        type: "list",
        message: "Who would you play one-on-one?",
        name: "playerName",
        choices: ["LeBron", "Kobe", "Jordan", "Kyrie", "Durant", "Westbrook"]
      }
      ])
      .then(function(basketballResponse) {
        console.log(basketballResponse.playerName);
        if(basketballResponse.playerName === "LeBron"){
          console.log("Lebrons Height and skills is almost impossible to beat - you lost");
        }
        if(basketballResponse.playerName === "Kobe"){
          console.log("overhyped, you got Kobe, especially without Shaq... you win!");
        }
        if(basketballResponse.playerName === "Jordan"){
          console.log("nuff said - you lost");
        }
        if(basketballResponse.playerName === "Kyrie"){
          console.log("Hmmm... Kyrie cant be guarded - you lost");
        }
        if(basketballResponse.playerName === "Durant"){
          console.log("Durants Height and skills is almost impossible to beat - you lost");
        }
        if(basketballResponse.playerName === "Westbrook"){
          console.log("He can be good most times - you stand a chance.");
        }
      });
}
// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "list",
      message: "What is your favorite sport?",
      name: "sportName",
      choices: ["basketball", "pingpong", "tennis", "football", "soccer", "none"]
    }
  ])
  .then(function(inquirerResponse) {
    console.log(inquirerResponse);
    if (inquirerResponse.sportName === "none") {
      console.log("\nWe will add more sport in our next list!.\n");     
    }
    else if (inquirerResponse.sportName === "basketball") {
      console.log("\nNice! We have an event for " + inquirerResponse.sportName);
      basketball();
    }
     else{
      console.log("\nNice! We have an event for " + inquirerResponse.sportName);
    }
  });

