`strict mode`;
const main = document.querySelector('.main');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
let matchResult = [0, 0];
const gameWin = function (pl, cm) {
  if (pl === cm) {
    return 'DRAW';
  }
  if (pl === 'paper') {
    if (cm === 'scissors') {
      return 'Computer';
    } else {
      return 'Player';
    }
  } else if (pl === 'scissors') {
    if (cm === 'rock') {
      return 'Computer';
    } else {
      return 'Player';
    }
  } else if (pl === 'rock') {
    if (cm === 'paper') {
      return 'Computer';
    } else {
      return 'Player';
    }
  }
};
const playGame = function (e) {
  let playerChoise = e.target.value;
  let computerChoise = Math.random();
  if (computerChoise < 0.34) {
    computerChoise = 'paper';
  } else if (computerChoise <= 0.68) {
    computerChoise = 'rock';
  } else {
    computerChoise = 'scissors';
  }
  console.log(playerChoise, computerChoise);
  let result = gameWin(playerChoise, computerChoise);
  console.log(result);
  if (result == 'Computer') {
    matchResult[1]++;
    result += ' win!';
  } else if (result == 'Player') {
    matchResult[0]++;
    result += ' win!';
  } else {
    result = 'Draw!';
  }
  console.log(matchResult);
  const prefix = '/pic' + '/';
  const player = prefix + playerChoise + '.png';
  const computer = prefix + computerChoise + '.png';
  score.innerHTML = `Player ${matchResult[0]}/${matchResult[1]} Computer`;
  displayMatch(player, computer, result);
  console.log(main);
  if (matchResult[0] == 10 || matchResult[1] == 10) {
    setTimeout(function () {
      (matchResult[0] = 0), (matchResult[1] = 0);
      score.innerHTML = `Player ${matchResult[0]}/${matchResult[1]} Computer`;
      winner(result);
    }, 3500);
  }
};

const displayMatch = function (pl, cp, rs) {
  main.classList.add('overlay');
  player.classList.add('player1');
  computer.classList.add('computer1');
  player.querySelector('.img').src = pl;
  computer.querySelector('.img').src = cp;
  message.innerHTML = rs;

  setTimeout(function () {
    message.classList.add('message1');
    setTimeout(function () {
      main.classList.remove('overlay');
      main.classList.remove('overlay');
      player.classList.remove('player1');
      message.classList.remove('message1');
      computer.classList.remove('computer1');
      player.querySelector('.img').src = '';
      computer.querySelector('.img').src = '';
      message.innerHTML = '';
    }, 3000);
  }, 450);
};

const winner = function (res) {
  main.classList.add('overlay');
  message.classList.add('message1');
  const res1 = res.slice(0, res.length - 1);
  message.innerHTML = `${res1} the game!`;
  setTimeout(function () {
    main.classList.remove('overlay');
    message.classList.remove('message1');
  }, 3000);
};
buttons.forEach(el => el.addEventListener('click', playGame));
