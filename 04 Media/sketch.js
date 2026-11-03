let hum; 
let work; 
let capture;
let scroll; 

function preload(){
  hum = loadSound("humm.wav");
  work = loadImage('Workspace.jpg');
  scroll = createVideo('Scrolling.mp4');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
  
  scroll.hide(); 
  scroll.play();
}

function draw() {
  image(work, 0, 0, windowWidth, windowHeight);
  image(capture, 0, 0, 320, 240);
  filter(BLUR, 2); 
    
  image(scroll, 497, 410, 485, 320);
}

function mouseClicked(){
  hum.loop();
  hum.amp(0.4); 
  scroll.loop(0.2); 
}