function setup() {
	createCanvas(800,600);
}

function draw() {
	background(240, 180, 208);
  
  //hour circle
	stroke(240, 86, 140);
  strokeWeight(5);
  fill(240, 86, 140, 40);
  let h = map(hour(), 0, 23, 0, 400);
  ellipseMode(CENTER);
  ellipse(width/2, height/2, h, h);
  
  //minute circle
	stroke(203, 227, 228);
  strokeWeight(3);
	fill(203, 227, 228, 70);  
  let m = map(minute(), 0, 59, 0, 200);
  ellipseMode(CENTER);
  ellipse(width/2 - 150, height/2 - 140, m, m);
  
  //second circle
	stroke(203, 227, 228);
  strokeWeight(2);
  fill(203, 227, 228, 70);
  let s = map(second(), 0, 59, 0, 200);
  ellipseMode(CENTER);
  ellipse(width/2 + 150, height/2 + 140, s, s);
 
  //awake: 7 am - 9 pm
  if (h > 7 && h < 21) {
    textSize(30);
    textFont('Calibri');
    fill(203, 227, 228);
    text('hello', width/2 - 30, height/2 + 10);
  }
  //asleep: otherwise
  else {
    textSize(30);
    textFont('Calibri');
    fill(203, 227, 228);
    text('zzz...', width/2 - 30, height/2 + 10);
  }
}
