var xize=50;
var img1;
var img;
var colors = [];
var sortMode = null;
var sound;
var amp;
function preload() {
  sound=loadSound("m1.mp3");
  // img=loadImage('img/da.png');

// console.log(loadImage);
img=loadImage('img/ada.png', setImage);
 // img1=loadImage('img/panda.jpg');

}

function setup() {
  createCanvas(730, 600); //add something ++bigger canvas
  noCursor();
  noStroke();
  // amp=new p5.Amplitude();
// sound.loop();
// image(img1,0,0);
 // background(0);
   // img.loadPixels();
  // colors = [];

}

function draw() {
  sound.play();
background(0);
var tileCount = floor(width / max(5, mouseY));

   // var tileCount = floor(width / max(mouseX, 5));
  // var rectSize = img.width / tileCount*2;
  var rectSize =width/ tileCount;

  img.loadPixels();
  colors = [];
imageMode(CORNER);
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }

  }

  gd.sortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}
// function mousePressed(){
//
//   // if (sound.isPlaying()){
// sound.pause();
// // imageMode(CENTER);
// image(img1,0,0,width/2, height/2);
// }
//
// }
  // var vol=amp.getLevel();
  // if (vol )

   // writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
 //   sortMode = null;
 //   sortMode = gd.HUE;
 // sortMode = gd.SATURATION;
 // sortMode = gd.BRIGHTNESS;
 // sortMode = gd.GRAYSCALE;

// }
// function keyReleased() {
//   if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
//   if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
//
//   if (key == '1') loadImage('data/pic1.jpg', setImage);
//   if (key == '2') loadImage('data/pic2.jpg', setImage);
//   if (key == '3') loadImage('data/pic3.jpg', setImage);
//   if (key == '4') loadImage('data/pic4.jpg', setImage);
//
//   if (key == '5') sortMode = null;
//   if (key == '6') sortMode = gd.HUE;
//   if (key == '7') sortMode = gd.SATURATION;
//   if (key == '8') sortMode = gd.BRIGHTNESS;
//   if (key == '9') sortMode = gd.GRAYSCALE;
// }

function setImage(loadedImageFile) {
  img = loadedImageFile;
}
