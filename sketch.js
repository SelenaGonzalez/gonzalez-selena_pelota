function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(mouseX);
  strokeWeight(mouseY);
  circle(windowWidth / 2, windowHeight / 2, 100);
  textSize(20);
  text(mouseX, 50, 50);
  text(int(mouseY), 50, 100)

}