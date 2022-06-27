//Naming a Snake
const snakeNames = require('snake-names'); 
let namePicked = snakeNames.random();
console.log("Let this snake's name be", namePicked);

//Naming Female Snakes
let femaleSnakeNames = snakeNames.female;
let randomIndex = Math.floor(Math.random() * femaleSnakeNames.length)
console.log("This female snake's name is", femaleSnakeNames[randomIndex])
