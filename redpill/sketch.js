// pill 1 setup
let p1X = 200;
let p1Y = -50;
let p1Speed = 4;

// pill 2 setup
let p2X = 500;
let p2Y = -150;
let p2Speed = 7;

// pill 3 setup
let p3X = 700;
let p3Y = -100;
let p3Speed = 5;

function setup() {
  createCanvas(1920, 1080); 
  noStroke();
  rectMode(CENTER);        
}

function draw() {
  background(0); 
  fill(163, 0, 0); 

  // PILL 1 
  p1Y = p1Y + p1Speed; 
  if (p1Y > height + 40) {
    p1Y = -40;          
    p1X = random(width); 
  }
  rect(p1X, p1Y, 30, 80, 30); 

  // PILL 2 
  p2Y = p2Y + p2Speed; 
  if (p2Y > height + 40) {
    p2Y = -40;          
    p2X = random(width); 
  }
  rect(p2X, p2Y, 30, 80, 30); 

  // PILL 3 
  p3Y = p3Y + p3Speed; 
  if (p3Y > height + 40) {
    p3Y = -40;         
    p3X = random(width); 
  }
  rect(p3X, p3Y, 30, 80, 30); 
}