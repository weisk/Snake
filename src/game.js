class Game {
	constructor() {
		this.data = {
			score: 0,
			pause: false,
			gameOver: false
		}
	}

	score(points) {
		if (arguments.length === 0) {
			return this.data.score;
		} else {
			this.data.score += points;
		}
	}

	pause(pause) {
		if (arguments.length === 0) {
			return this.data.pause;
		} else {
			this.data.pause = !this.data.pause;
		}
	}

	draw() {
		push();
		noStroke();
		fill(180, 0, 50);
		textSize(32);
		text("Score: " + this.data.score, 10, height - 12);
		if (this.pause()) {
			fill(50, 100, 255);
			text("PAUSE", width / 2 - 50, height / 2);
		}
		pop();
	}
}
