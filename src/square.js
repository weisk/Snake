class Square {
	constructor(x = width / 2, y = height / 2) {
		this.x = x;
		this.y = y;
		this.l = 10;
	}

	draw() {
		noStroke();
		fill(255);
		rect(this.x, this.y, this.l, this.l);
		fill(150, 150, 150);
		rect(this.x + 1, this.y + 1, this.l - 2, this.l - 2);
	}
}
