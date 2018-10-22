class Fruit {
	constructor() {
		this.r = 5;
		this.x = floor(random(this.r, width - this.r) / 10) * 10 + 5;
		this.y = floor(random(this.r, height - this.r) / 10) * 10 + 5;
	}

	draw() {
		noStroke();
		fill(20, 150, 30);
		ellipse(this.x, this.y, 2 * this.r);
	}

	newLocation() {
    this.x = floor(random(this.r, width - this.r) / 10) * 10 + 5;
		this.y = floor(random(this.r, height - this.r) / 10) * 10 + 5;
	}

}
