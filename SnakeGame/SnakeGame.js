let context;
//BOARD
const ROWS = 20;
const COLUMN = 20;
const BLOCK_SIZE = 25;
const BORDER_COLOR = "black";

//SNAKE
const SNAKE_COLOR = "green";
let snakeX = BLOCK_SIZE * 5;
let snakeY = BLOCK_SIZE * 5;
let snakeBody = [];

//FOOD
const FOOD_COLOR = "red";
let foodX;
let foodY;

let velocityX = 0;
let velocityY = 0;

let gameOver = false;

window.onload = () => {
  gameBoard = document.getElementById("gameBoard");
  gameBoard.width = ROWS * BLOCK_SIZE;
  gameBoard.height = COLUMN * BLOCK_SIZE;
  context = gameBoard.getContext("2d");

  placeFood();
  document.addEventListener("keyup", changeDirection);
  setInterval(update, 100);
};

const update = () => {
  drawBoard();
  drawFood();

  if (snakeX == foodX && snakeY == foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  drawSnake();

  for (let i = 0; i < snakeBody.length; i++) {
    context.fillRect(snakeBody[i][0], snakeBody[i][1], BLOCK_SIZE, BLOCK_SIZE);
  }

  if (
    snakeX < 0 ||
    snakeX >= gameBoard.width ||
    snakeY < 0 ||
    snakeY >= gameBoard.height
  ) {
    gameOver = true;
    alert("Game Over");
  }

  for (let i = 0; i < snakeBody.length; i++) {
    if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
      gameOver = true;
      alert("Game Over");
    }
  }
};

const drawBoard = () => {
  context.fillStyle = BORDER_COLOR;
  context.fillRect(0, 0, gameBoard.width, gameBoard.height);
};

const drawSnake = () => {
  context.fillStyle = SNAKE_COLOR;
  snakeX += velocityX * BLOCK_SIZE;
  snakeY += velocityY * BLOCK_SIZE;
  context.fillRect(snakeX, snakeY, BLOCK_SIZE, BLOCK_SIZE);
};

const drawFood = () => {
  context.fillStyle = FOOD_COLOR;
  context.fillRect(foodX, foodY, BLOCK_SIZE, BLOCK_SIZE);
};

const placeFood = () => {
  foodX = Math.floor(Math.random() * ROWS) * BLOCK_SIZE;
  foodY = Math.floor(Math.random() * COLUMN) * BLOCK_SIZE;
};

const changeDirection = (event) => {
  if (event.keyCode == 37 && velocityX != 1) {
    velocityX = -1;
    velocityY = 0;
  } else if (event.keyCode == 38 && velocityY != 1) {
    velocityX = 0;
    velocityY = -1;
  } else if (event.keyCode == 39 && velocityX != -1) {
    velocityX = 1;
    velocityY = 0;
  } else if (event.keyCode == 40 && velocityY != -1) {
    velocityX = 0;
    velocityY = 1;
  }
};
