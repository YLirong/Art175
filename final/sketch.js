//http://www.generative-gestaltung.de/2/sketches/?01_P/P_1_2_2_01
// https://www.youtube.com/watch?v=NCCHQwNAN6Y
// lesson from Kadenze

var img;
var img1;
var img2;
var colors = [];
var sortColors;
var x=0;
var y=0;
var targetX=0;
var targetY=0;
var isBg = false;
var sound;
var amp;

function preload() {
  sound=loadSound("m1.mp3"); //load audio
  img1=loadImage('img/da.png'); //load 1st img
  img2=loadImage('img/a.png'); //load 1st img

// console.log(loadImage);
img=loadImage('img/bw.png', setImage); //load 2nd img


}

function setup() {
  var canvas = createCanvas(730, 600);
 // Move the canvas so it’s inside <div id="sketch">.
 canvas.parent('sketch');

  // createCanvas(730, 600);
  noCursor();
  noStroke();
    amp=new p5.Amplitude();
    // sound.loop();
    // image(img2,0,0);
}

function mousePressed(){

  if (sound.isPlaying()) {
      // .isPlaying() returns a boolean
    sound.pause();
       // .play() will resumefrom .pause() position
    } else {
      sound.play();

   }

}

function draw(){
  // if (isBg ==true){
  //       //
  //       // fill(0);
  //       // rect(200,200,400,400);
  //       background(0);
  //       var level=amp.getLevel(); //read the mp3 soundtrack
  //
  //       let size=map(level,0,1,0,500);
  //       var easing=level; //set the easing speed
  //       var diffX = targetX-x; //where the mouse&line is
  //       x += diffX*easing; //using easing to controls the figures distance, size controls
  //       targetX =mouseX; //control the easing direction, figure move
  //       targetY=mouseY;
  //
  //       var diffY = targetY-y; //where the mouse&line is
  //       y += diffY*easing;
  //       // image(img2,(width/4),(height/4),size+x,size+y);
  //       image(img1,(width/2),(height/2),size+x,size+y);
  //     // }
  //
  // }else
  // return figure();
figure();

}

function figure(){
  // pixels size
var tileCount = floor(img.width / max(5, mouseY));

  var rectSize =width/ tileCount;//create grid with width, set the size

   // Lvar tileCount = floor(width / max(mouseX, 5));


  img.loadPixels(); //use the img pixels
  colors = []; //color array
// imageMode(CORNER);
//create the pixels grid
for (var gridX = 0; gridX < tileCount; gridX++) {
  for (var gridY = 0; gridY < tileCount; gridY++) {

      var px = int(gridX * rectSize);
      var py = int(gridY * rectSize);
      var i = (py * img.width + px) * 4;
      //set hsb for grid
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      colors.push(c);
    }

  }
//grid color
  sortColors(colors);

  var i = 0;
  for (var gridX = 0; gridX < tileCount; gridX++) {
  for (var gridY = 0; gridY < tileCount; gridY++) {
      fill(colors[i]);
          i++;
          rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);


  }
  }


}
function mouseClicked() {

   isBg=!isBg;


  }

function setImage(loadedImageFile) {
  img = loadedImageFile;
}

function sortColors(){

}
