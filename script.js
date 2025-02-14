'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highscore = 0;

//Funções para reduzir códigos repetidos
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayBackground = function (background) {
  document.querySelector('body').style.backgroundColor = background;
};
const displayWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayText = function (text) {
  document.querySelector('.txt').textContent = text;
};
const displayGuess = function (guess) {
  document.querySelector('.guess').style.display = guess;
};
const displayCheck = function (check) {
  document.querySelector('.check').style.display = check;
};

//Botão para verificar se o chute é igual ou número 
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  //Quando nenhum número foi informado
  if (!guess) {
    displayMessage('⛔ Nenhum número informado!');

    //Quando o chute for igual ao número
  } else if (guess === secretNumber) {
    displayText('Você acertou! 👏');
    displayMessage('🎉 Você acertou o número secreto!');
    displayNumber(secretNumber);
    displayBackground('#60b347');
    displayWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Quando o chute for diferente do número
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '📉 Chute baixo, tente um número maior!' : '📈 Chute alto, tente um número menor!');
    score--;
    displayScore(score);
    } else {
      displayText('Game Over!');
      displayMessage('😢 Você perdeu!');
      displayScore(0);
      displayBackground('#ff0000');
      displayGuess('none');
      displayCheck('none');
    }
  }
});

//Botão para iniciar um novo jogo
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  displayMessage('Chute um número...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';
  displayWidth('15rem');
  displayBackground('#222');
  displayText('Adivinhe o Número!');
  displayGuess('block');
  displayCheck('block');
});