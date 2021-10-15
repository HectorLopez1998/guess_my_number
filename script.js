'use strict';
// The DOM is a connection point between HTML documents and JavaScript code.
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Answer!';

// document.querySelector('.number').textContent = 22;
// document.querySelector('.highscore').textContent = 12;

// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);
const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let keepingScore = 20;


// This will select the check btn and then return an element. Now in that element we can call the event addEventListener method.
// The addEventListener method expects an event handler function as a second argument
document.querySelector('.check').addEventListener('click', function (){
  // We are logging the value of the class guess after each click on the check btn.
  //console.log(document.querySelector('.guess').value );
  // Here we save the value of the guess class into a variable so we can use it later
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if(!guess) {
    document.querySelector('.message').textContent = '😒 Invalid Number';
  }else if(guess === secretNumber){
    document.querySelector('.message').textContent = '🎉 Correct Answer!';
  }else if(guess !== secretNumber){
    document.querySelector('.message').textContent = 'try again.';
    keepingScore = keepingScore - 1;
    document.querySelector('.score').textContent = keepingScore;
  }
})
