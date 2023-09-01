// Selecting elements using querySelector
const holes = document.querySelectorAll('.hole');
const scoreboard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;

// Function to generate a random time within a range
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Function to select a random hole
function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (hole === lastHole) {
    console.log("That's the same hole");
    return randomHole(holes);
  }
  lastHole = hole;

  return hole;
}

// Function to make a mole appear
function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);

  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) peep();
  }, time);
}

let timeUp = false;
let score = 0;

// Function to start the game
function startGame() {
  scoreboard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();

  // Set a timer to end the game after 10 seconds
  setTimeout(() => {
    timeUp = true;
  }, 10000); // 10 seconds
}

// Function to handle whacking a mole
function wack(e) {
  if (!e.isTrusted) return; // Cheater!

  score++;
  this.parentNode.classList.remove('up');
  scoreboard.textContent = score;
}

// Adding click event listeners to moles
moles.forEach(mole => mole.addEventListener('click', wack));
