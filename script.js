'use strict';
// The DOM is a connection point between HTML documents and JavaScript code.
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Answer!';

// document.querySelector('.number').textContent = 22;
// document.querySelector('.highscore').textContent = 12;

// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);
// state variable, because it is part of the app state.
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let keepingScore = 20;
let highscore = 0;

const displayMessage = function (message){
  document.querySelector('.message').textContent = message;
};

// This will select the check btn and then return an element. Now in that element we can call the event addEventListener method.
// The addEventListener method expects an event handler function as a second argument
document.querySelector('.check').addEventListener('click', function (){
  // We are logging the value of the class guess after each click on the check btn.
  //console.log(document.querySelector('.guess').value );
  // Here we save the value of the guess class into a variable so we can use it later
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if(!guess) {
    displayMessage('😒 Invalid Number');
  }else if(guess === secretNumber){
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🎉 Correct Answer!');
    //document.querySelector('.message').textContent = '🎉 Correct Answer!';
    if(keepingScore > highscore) {
      highscore = keepingScore;
      document.querySelector('.highscore').textContent = highscore;
    }
  }else if(guess !== secretNumber){
    if(keepingScore > 1){
      displayMessage('try again.');
      keepingScore = keepingScore - 1;
      document.querySelector('.score').textContent = keepingScore;
    }else{
      document.querySelector('body').style.backgroundColor = '#B22222';
      displayMessage('❌You lose!');
      document.querySelector('.score').textContent = 0;
    }
  }
 
});
const resetGame = function (){
  keepingScore = 20;
   secretNumber = Math.trunc(Math.random() * 20 + 1);
   document.querySelector('.score').textContent = keepingScore;
   displayMessage('Start guessing...');
   document.querySelector('.guess').value = '';
   document.querySelector('.number').textContent = '?';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
   console.log(secretNumber);
};

document.querySelector('.again').addEventListener('click', function (){
   resetGame()
});
