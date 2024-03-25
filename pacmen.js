//create array of pacman images
const pacArray = [
  ['./PacMan1.png', './PacMan2.png'],
  ['./PacMan3.png', './PacMan4.png'],
];

const pacMen = []; // array to hold the pacmen
var focus = 0; // will be used to animate pacman 'chomp'
let pageWidth = window.innerWidth; //to detect edges on x-axis
let pageHeight = window.innerHeight; //to detect edges on y-axis
let direction = 0;

//function returns an object with random values:
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10);
  let position = setToRandom(200);
  // adds image to the div with id = game at position x, y
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  newimg.style.position = 'absolute';
  newimg.src = pacArray[direction][focus];
  newimg.width = 100;
  newimg.style.left = position.x;
  newimg.style.top = position.y;

  //adds new child image to game
  game.appendChild(newimg);
  



  return {
    position,
    velocity,
    newimg,
  };
}

function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.newimg.src = pacArray[direction][focus]; //changes image 

    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;

  });

  setTimeout(update, 20);
}

function checkCollisions(item) {
  //detects collision with window edges and reverses item trajectory
    if (item.position.x + item.velocity.x + item.newimg.width > pageWidth || item.position.x < 0) {
        item.velocity.x = -item.velocity.x;
        direction = (direction + 1) % 2; //still flips all items on screen at once
    }

    if (item.position.y + item.velocity.y + item.newimg.height > pageHeight || item.position.y < 0) {
        item.velocity.y = -item.velocity.y;
    }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

