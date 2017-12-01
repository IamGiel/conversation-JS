


// /**
//  * Heirarchical conversation example
//  */

// 'use strict';
// var inquirer = require('inquirer');

// var directionsPrompt = {
//   type: 'list',
//   name: 'direction',
//   message: 'Which direction would you like to go?',
//   choices: ['Forward', 'Right', 'Left', 'Back']
// };

// function main() {
//   console.log('You find youself in a small room, there is a door in front of you.');
//   exitHouse();
// }

// function exitHouse() {
//   inquirer.prompt(directionsPrompt).then(answers => {
//     if (answers.direction === 'Forward') {
//       console.log('You find yourself in a forest');
//       console.log(
//         'There is a wolf in front of you; a friendly looking dwarf to the right and an impasse to the left.'
//       );
//       encounter1();
//     } else {
//       console.log('You cannot go that way. Try again');
//       exitHouse();
//     }
//   });
// }

// function encounter1() {
//   inquirer.prompt(directionsPrompt).then(answers => {
//     var direction = answers.direction;
//     if (direction === 'Forward') {
//       console.log('You attempt to fight the wolf');
//       console.log(
//         'Theres a stick and some stones lying around you could use as a weapon'
//       );
//       encounter2b();
//     } else if (direction === 'Right') {
//       console.log('You befriend the dwarf');
//       console.log('He helps you kill the wolf. You can now move forward');
//       encounter2a();
//     } else {
//       console.log('You cannot go that way');
//       encounter1();
//     }
//   });
// }

// function encounter2a() {
//   inquirer.prompt(directionsPrompt).then(answers => {
//     var direction = answers.direction;
//     if (direction === 'Forward') {
//       var output = 'You find a painted wooden sign that says:';
//       output += ' \n';
//       output += ' ____  _____  ____  _____ \n';
//       output += '(_  _)(  _  )(  _ \\(  _  ) \n';
//       output += '  )(   )(_)(  )(_) ))(_)(  \n';
//       output += ' (__) (_____)(____/(_____) \n';
//       console.log(output);
//     } else {
//       console.log('You cannot go that way');
//       encounter2a();
//     }
//   });
// }

// function encounter2b() {
//   inquirer
//     .prompt({
//       type: 'list',
//       name: 'weapon',
//       message: 'Pick one',
//       choices: [
//         'Use the stick',
//         'Grab a large rock',
//         'Try and make a run for it',
//         'Attack the wolf unarmed'
//       ]
//     })
//     .then(() => {
//       console.log('The wolf mauls you. You die. The end.');
//     });
// }

// main();

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
    if (inquirerResponse.sportName === "basketball") {
      console.log("\nNice! We have an event for " + inquirerResponse.sportName);
      basketball();
    }
    else {
      console.log("\nNice! We have an event for " + inquirerResponse.sportName);
    }
  });

