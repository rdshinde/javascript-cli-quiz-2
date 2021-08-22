// Importing chalk and readlineSync
const chalk = require('chalk');
const readlineSync = require('readline-sync');

// score is initiated below
let score = 0;

// question bank array with objects containing questions and answers.
const questionBank = [
  {question:`\n 1. How many marvel movies are there in the 'Avenger' series ?. 
   a : 4 
   b : 3 
   c : 5\n Option: `,
  ans : 'a'
  },
  {question:`\n 2. Who was the 🦹‍♀️v️️️i️l️l️a️i️n️ in 'The Avengers' which was released in 2012?. 
   a : Thanos 
   b : Hydra 
   c : Loki\n Option: `,
  ans : 'c'
  },
  {question:`\n 3. In which movie 🎥 'Vision' was born?. 
   a : The Avengers (2012)
   b : Avengers: Age of Ultron (2015) 
   c : Avengers: Infinity War (2018)\n Option: `,
  ans : 'b'
  },
  {question:`\n 4. Who played the character of 'Hulk'? . 
   a : Mark Ruffalo 
   b : Jeremy Renner 
   c : Chris Evans\n Option: `,
  ans : 'a'
  },
  {question:`\n 5. In which movie 🎥  'Thanos' appeared for the first time?. 
   a : The Avengers (2012)
   b : Avengers: Age of Ultron (2015) 
   c : Avengers: Infinity War (2018)
   d : Avengers: Endgame (2019) \n Option: `,
  ans : 'a'
  },
  {question:`\n 6. Which is the immortal character in 'Avenger' movies?. 
   a : The Hulk 
   b : The Iron Man 🦾 
   c : The Captain America
   d : The Thor \n Option: `,
  ans : 'd'
  }
];
// Scoreboard of players
const scoreboard = [{
  name: 'Rishikesh',
  score: 30,
},
{
  name:'Arya',
  score:25
},
{
  name:'Rohit',
  score:25
}
];
// Defining function for welcome message.
function welcomeMessage(){
  //Taking the input of players username
const userName = readlineSync.question("What's your name?\n");

// Displaying 
console.log(chalk.blueBright.bgWhite.bold(`               Welcome ${chalk.red(userName)}, \n Let's check how much you know about 'The Avengers'.`));
console.log(chalk.white('__________________________________________'))

console.log(chalk.blueBright(`You have to answer question related to 'The Avengers' movies. \n#1. Every correct answer will give you five points.\n#2.For wrong answer NO GAIN, ONLY PAIN😥. 🚨Your score will decrease by five. So be cautious. \n#3. Enter the correct option to answer the question.\nSo 'Avengers Assemble'!`));

console.log(chalk.red(`\n\n  I hope you will enjoy it. :)\n  Best Of Luck!`));
}

// Defining function for correct answer messages.
function correctAnsMessage(score){
  // Creating array of messages for correct answers to give random message from it.
  const winMessages = ['Great Job! 👏 ','Very Good!','Ohh! Nice Guess!','Nicely Done!','Ohh! You nailed it!','✅ Correct!','You are doing great job! 👏 '];
  const random = Math.floor(Math.random() * winMessages.length); 
  console.log(chalk.green(winMessages[random],`\n Your Score is: ${score} \n --------------------------------------------`)); 
}
// Defining Function for wrong answer messages.
function wrongAnsMessage(score){
  // Creating array of messages for wrong answers to give random message from it.
  const loseMessages = ['Oh no! you lose.😭','Wrong! ❌ Try to remember this.','You are losing the game!','You lose!😔'];
  const random = Math.floor(Math.random() * loseMessages.length); 
  console.log(chalk.redBright(loseMessages[random],`\n Your Score is: ${score} \nTry again. \n --------------------------------------------`)); 
}
// Function to display scoreboard.
function displayScoreboard(){
  console.log(chalk.red(`\nScoreboard`))
  for(let i=0;i<scoreboard.length;i++){
    console.log(chalk.blueBright(`${i+1}. ${scoreboard[i].name} - ${scoreboard[i].score}`))
  } 
}
// Function for end Message
function endMessage(){
  console.log(` Your final score is: ${score}\n I hope you enjoyed the game. Send me the screenshot of your score and I'll add your score on scoreboard.  Thanks for participating.🙏🏻`)
}

// Main Function Definition 

function playGame(){
  welcomeMessage();
  for(let i=0;i< questionBank.length;i++){
    var status = true;
    // Infinite loop to ask question again and again if user gives wrong answer.
    while(status){
      var userAns = readlineSync.question(questionBank[i].question);
      if(userAns.toLowerCase() === questionBank[i].ans){
        score = score + 5;
        correctAnsMessage(score);
        status = false;
      }
      else{
        score = score - 5;
        if(score<0){
          score=0;
        }
        wrongAnsMessage(score);
        status = true;
      }
    }
  
}
  displayScoreboard();
  endMessage();
}
playGame();
