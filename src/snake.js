const INITIAL_SIZE = 2;

class Snake {
	constructor() {
		this.body = [];
		this.newBody = null;
		this.speedX = 1;
		this.speedY = 0;
		this.keyCode = null;

		// init function (better to not have logic on the)
		this.init(INITIAL_SIZE);
	}

	/*
	 * getter function.
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
	 */
	get nextSquare() {
		let prev = this.body[this.body.length - 1];
		return {
			x: prev.x - prev.l,
			y: prev.y
		};
	}

	init(size = INITIAL_SIZE) {
		this.body.push(new Square());

		for(let i = 1; i < size; i++) {
			let square = new Square(this.nextSquare.x, this.nextSquare.y)
			this.body.push(square);
		}
	}

	grow() {
		var lastBody = this.body[this.body.length - 1];
		this.newBody = new Square(lastBody.x, lastBody.y);
	}

	draw() {
		for (let square of this.body) {
			square.draw();
		}
	}

	update() {
		this.updateBody();
		this.updateMovement();
	}

	updateBody(){
		//set the position of the last member of the body to the position of the one
		//in front of it
		for (var i = this.body.length - 1; i > 0; i--) {
			this.body[i].x = this.body[i - 1].x;
			this.body[i].y = this.body[i - 1].y;
		}

		//move the head towards the direction the user want to move to
		this.body[0].x += this.body[0].l * this.speedX;
		this.body[0].y += this.body[0].l * this.speedY;

		//wrap around if out of the canvas
		if(this.body[0].x >= width){
			this.body[0].x = 0;
		} else if (this.body[0].x < 0){
			this.body[0].x = width - this.body[0].l;
		}

		if(this.body[0].y >= height){
			this.body[0].y = 0;
		} else if (this.body[0].y < 0){
			this.body[0].y = height - this.body[0].l;
		}

		//enlarge the body in case a new piece needs to be added
		if (this.newBody !== null) {
			this.body.push(this.newBody);
			this.newBody = null;
		}
	}

	updateMovement(){
		if (this.keyCode === LEFT_ARROW) {
			if (this.speedX === 0) {
				this.speedX = -1;
				this.speedY = 0;
			}
		} else if (this.keyCode === RIGHT_ARROW) {
			if (this.speedX === 0) {
				this.speedX = 1;
				this.speedY = 0;
			}
		} else if (this.keyCode === UP_ARROW) {
			if (this.speedY === 0) {
				this.speedX = 0;
				this.speedY = -1;
			}
		} else if (this.keyCode === DOWN_ARROW) {
			if (this.speedY === 0) {
				this.speedX = 0;
				this.speedY = 1;
			}
		}
		this.keyCode = null;
	}

	keyPressed(keyCode) {
		this.keyCode = keyCode;
	}

	isEating(fruit) {
		var head = this.body[0];
		var center = {
			x: head.x + head.l/2,
			y: head.y + head.l/2
		}
		if (dist(center.x, center.y, fruit.x, fruit.y) < fruit.r + head.l / 2) {
			return true;
		}
		return false;
	}
}
