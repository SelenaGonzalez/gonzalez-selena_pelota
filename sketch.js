let posX;
let posY;
let diametro = 200;
let radio = diametro / 2;
let colorDeFondo;
let vel = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  // frameRate(10);
  colorDeFondo = color(100, 255, 100);
}

function draw() {
  background(colorDeFondo);
  posX -= vel;

  if (posX < -radio) {
    diametro = random(10, 200);
    radio = diametro / 2;
    colorDeFondo = color(random(50, 255), 70, random(100, 255));
    // colorDeFondo.saturation(0.7);
    posX = windowWidth + radio;
    fill(random(100, 255), 230, random(50, 255));
    noStroke();
  }

  circle(posX, posY, diametro);
  print(posX);
}
