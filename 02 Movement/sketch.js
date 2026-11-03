
let i = 0;
let currentFrameRate = 1;


const housingText = "Semester Lessons Class Projects Learning Deadlines Programs Coding Engine Maya Seminar Lectures Assignments Portfolio Content Assessment Code Reading Writing Essays Punctuality";
const textArray = housingText.split(" "); // Convert the text into an an array (list) of words. 


function setup(){
	createCanvas(windowWidth, windowHeight); 
  frameRate(currentFrameRate); 
}
function draw(){
  let x = random(windowWidth)
  let y = random(windowHeight);
  background(0);

   currentFrameRate += 0.1;
  frameRate(currentFrameRate);
  if (i < textArray.length) { // is i less-than the number of words in the text
    fill(255,0,0);
    stroke(255,0,0);
    console.log(i);
    textSize(100);
    textAlign(CENTER, CENTER);
    text(textArray[i], x, y); 
    i++;
  }else{
    i=0; // reset the counter
  }

}