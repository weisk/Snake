/*
TODO:
	-Fix collisions of the snake: it should not be allowed to touch your body or
	to collide with the boundaries of the canvas.
*/

const DEFAULT_INTERVAL_MS = 300;

var canvas, snake, fruit, interval, intervalMs, game;

function setup() {
	canvas = createCanvas(600, 600);
	canvas.position(50, 50);

	game = new Game();
	snake = new Snake();
	fruit = new Fruit();

	interval = setInterval(updateSnake, DEFAULT_INTERVAL_MS);

	selectLabel = createDiv('Select game speed:');
  selectLabel.position(50, 20);

	var dropdown = createSelect();
	dropdown.position(180, 15);
  dropdown.size(150, 30)
	dropdown.option('50', 50);
	dropdown.option('100', 100);
	dropdown.option('200', 200);
	dropdown.option('300', 300);
	dropdown.option('500', 500);
	dropdown.selected('300');
	dropdown.changed(updateInterval);
}

function updateInterval(evt) {
	const value = parseInt(evt.target.value);
	clearInterval(interval);
	interval = setInterval(updateSnake, value);
	evt.target.blur();
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
