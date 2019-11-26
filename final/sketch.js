
//http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_2_01
var img1;
var img;
// var xize=50;
var colors = [];
var sortMode = null;
var sound;
var amp;
function preload() {
  sound=loadSound("m1.mp3");
  img1=loadImage('img/da.png');

// console.log(loadImage);
img=loadImage('img/ada.png', setImage);
  // img1=loadImage('img/panda.jpg');

}

function setup() {
  createCanvas(730, 600); //add something ++bigger canvas
  noCursor();
  noStroke();
    amp=new p5.Amplitude();
 // sound.loop();
// image(img1,0,0);
 background(0);
   // img.loadPixels();
  // colors = [];

}

//mouse control play the music
function mousePressed(){
  if (sound.isPlaying()) {
      // .isPlaying() returns a boolean
// push();
var vol=amp.getLevel();
// tint(50,50);
      image(img1,450,450,vol,vol);
// pop();
      sound.pause(); // .play() will resumefrom .pause() position
    } else {
      sound.play();
      image(img1,450,450,vol,vol);

    }
}

function draw() {
background(0);
var tileCount = floor(width / max(5, mouseY));

   // var tileCount = floor(width / max(mouseX, 5));
  var rectSize =width/ tileCount;//create grid with width, set the size
  img.loadPixels(); //use the img pixels
  colors = []; //color array
// imageMode(CORNER);
//create the pixels grid
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      //set hsb for grid
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }

  }
//grid color
  gd.sortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);  //color grid pixels
      //set the shape of grid
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function setImage(loadedImageFile) {
  img = loadedImageFile;
}
