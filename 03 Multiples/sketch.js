 let row = 19;     // Number of shapes in a row
let col = 25;     // Number of shapes in a col
let pad = 25;      // Padding between shapes 
let sWidth, sHeight;  
let rgb = [27, 91, 108]; // RGB color values for the shapes

function setup() {
    createCanvas(windowWidth, windowHeight); // canvas width/height
    sWidth = (width/col)-(pad+(pad/col));
    sHeight = (height/row)-(pad+(pad/row));
    rectMode(CENTER); // Rectangle coords from the center
    noStroke();
}

function draw(){
  background(200); 
  
  for(let i=0; i<row; i++){
  for(let ii=0; ii<col; ii++){

    let x = pad+(ii*sWidth)+(pad*ii)+(sWidth/2);
    let y = pad+(i*sHeight)+(pad*i)+(sHeight/2);

    let fall = (frameCount * 2 + i * 20 + ii * 10) % height;

    fill(rgb);

    push();
      angleMode(DEGREES);
      translate(x, y + fall);
      rotate(frameCount + i * 5);
      rectMode(CENTER);
      rect(0, 0, sWidth, sHeight);
    pop();
  }
}
}