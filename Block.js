class Block {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;

    this.r = color.r;
    this.g = color.g;
    this.b = color.b;

    this.endY = y;
  }

  draw() {
    if (this.y < this.endY) {
      this.y += 2;
    }

    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 20, 20);
  }

  moveDown() {
    if (this.y == this.endY) {
      this.endY += 20;
    }
  }

  setRgb(rgb) {
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
  }
}