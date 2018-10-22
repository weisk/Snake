/*
TODO:
	-Fix collisions of the snake: it should not be allowed to touch your body or
	to collide with the boundaries of the canvas.
*/

var snake, fruit, interval, game;

function setup() {
	createCanvas(600, 600);
	game = new Game();
	snake = new Snake();
	fruit = new Fruit();
	interval = 300;
	setInterval(updateSnake, interval);
}

function draw() {
	background(0);
	if (snake.isEating(fruit)) {
		fruit.newLocation();
		game.score(1);
		snake.grow();
	}
	fruit.draw();
	snake.draw();
	game.draw();
}

function updateSnake() {
	if (!game.pause()) {
		snake.update();
	}
}

function keyPressed() {
	if (keyCode === 80) {
		game.pause(0);
	} else {
		if (!game.pause()) {
			snake.keyPressed(keyCode);
		}
	}
}
