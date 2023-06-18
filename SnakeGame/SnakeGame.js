let context;
//BOARD
const ROWS = 20;
const COLUMN = 20;
const BLOCK_SIZE = 25;
const BORDER_COLOR = "black";

//SNAKE
const SNAKE_START_X = 20;
const SNAKE_START_Y = 20;
const SNAKE_COLOR = "green";

//FOOD
const FOOD_COLOR = "red";
let foodX;
let foodY;

window.onload = () => {
  gameBoard = document.getElementById("gameBoard");
  gameBoard.width = ROWS * BLOCK_SIZE;
  gameBoard.height = COLUMN * BLOCK_SIZE;
  context = gameBoard.getContext("2d");

  drawBoard();
  drawSnake();
  placeFood();
};

const drawBoard = () => {
  context.fillStyle = BORDER_COLOR;
  context.fillRect(0, 0, gameBoard.width, gameBoard.height);
};

const drawSnake = () => {
  context.fillStyle = SNAKE_COLOR;
  context.fillRect(SNAKE_START_X, SNAKE_START_Y, BLOCK_SIZE, BLOCK_SIZE);
};

const placeFood = () => {
  context.fillStyle = FOOD_COLOR;
  foodX = Math.floor(Math.random() * ROWS) * BLOCK_SIZE;
  foodY = Math.floor(Math.random() * COLUMN) * BLOCK_SIZE;
  context.arc(foodX, foodY, 12.5, 0, 2 * Math.PI);
  context.fill();
};
