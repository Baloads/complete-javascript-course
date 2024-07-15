'use strict';

let secret = Math.round(Math.random() * 19) + 1;
let highscore = highscoreGet();
let score = 20;

console.log(secret, highscore);

function highscoreSet(score) {
  document.querySelector('.highscore').textContent = score;
}

function highscoreGet() {
  return Number(document.querySelector('.highscore').textContent);
}

function scoreUpdate(score) {
  document.querySelector('.score').textContent = score;
}

const checkClickHandle = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'I said guess...';
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Between 1 and 20 please...';
  } else if (guess > secret) {
    document.querySelector('.message').textContent = 'Too high!';
    score -= 1;
    scoreUpdate(score);
  } else if (guess < secret) {
    document.querySelector('.message').textContent = 'Too Low!';
    score -= 1;
    scoreUpdate(score);
  } else {
    document.querySelector('.message').textContent = 'You guessed it!';
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.background = '#60b347';

    if (score > highscoreGet()) {
      highscoreSet(score);
    }
  }
};

const againClickHandle = function () {
  score = 20;
  scoreUpdate(score);
  document.querySelector('.number').textContent = '?';
  secret = Math.round(Math.random() * 19) + 1;
  document.querySelector('.message').textContent = 'Start guessing';
  console.log(`New secret is ${secret}`);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222';
};

document.querySelector('.check').addEventListener('click', checkClickHandle);
document.querySelector('.again').addEventListener('click', againClickHandle);
