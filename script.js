// image
const dice = document.querySelector(".dice");
dice.style.display = "none";
let randomR;

// buttons
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScore1 = document.querySelector("#current--0");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let gameOver = true;
let currentscore = 0;
let activplayer = 0;
let score = [0, 0];
const switchPlayer = () => {
  currentscore = 0;
  document.getElementById(`current--${activplayer}`).textContent = 0;
  activplayer = activplayer == 1 ? 0 : 1;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};
btnRoll.addEventListener("click", () => {
  if (gameOver) {
    randomR = Math.ceil(Math.random() * 6);

    dice.style.display = "block";
    dice.src = `./dice-${randomR}.png`;
    currentscore += randomR;
    document.getElementById(`current--${activplayer}`).textContent =
      currentscore;
    if (randomR == 1) {
      switchPlayer();
    }
  }
});
//hold
btnHold.addEventListener("click", () => {
  if (gameOver) {
    score[activplayer] += currentscore;
    document.getElementById(`score--${activplayer}`).textContent =
      score[activplayer];
    if (score[activplayer] >= 100) {
      gameOver = false;
      document
        .querySelector(`.player--${activplayer}`)
        .classList.add("player--winner");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", () => {
  gameOver = true;
  currentscore = 0;
  activplayer = 0;
  score = [0, 0];
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  document.querySelector(`.player--0`).classList.remove("player--winner");
  document.querySelector(`.player--1`).classList.remove("player--winner");
});
