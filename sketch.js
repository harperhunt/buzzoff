/*
 * @name Video
 * @frame 710,250
 * @description <p>Load a video with multiple formats and toggle between playing
 * and paused with a button press. 
 * <p><em><span class="small"> To run this example locally, you will need at least
 * one video file, and the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>.</span></em></p>
 */

var song;
var canvasWidth = 1440;
var videoWidth = canvasWidth/3; //480
var videoHeight = videoWidth/1.51; //334.076923; //width/1.51
function preload() {
  song = loadSound('assets/BeeSoundShort.m4a');
}

function setup() {
  createCanvas(canvasWidth,900);
  song.loop(); // song is ready to play during setup() because it was loaded during preload


  // specify multiple formats for different browsers
  Flower1 = createVideo(['assets/Flower1.mov']);
  Noma1 = createVideo(['assets/Noma1.mov']);
  Flower2 = createVideo(['assets/Flower2.mov']);
  Starbucks23 = createVideo(['assets/Starbucks2.mov']);
  Flower3 = createVideo(['assets/Flower3.mov']);
  Tinker3 = createVideo(['assets/Tinker3.mov']);

  Flower1.loop();
  Noma1.loop();
  Flower2.loop();
  Starbucks23.loop();
  Flower3.loop();
  Tinker3.loop();
  
    Flower1.hide();
  Noma1.hide();
  Flower2.hide();
  Starbucks23.hide();
  Flower3.hide();
  Tinker3.hide();
}

var firstRowY = videoHeight/3;
var secondRowY = videoHeight/3+videoHeight;
function draw(){
  
  //image(videoname, x,y,width,height);
// image(Flower1, 0,0,width/3,50);  
// 520x344
 image(Flower1,0,firstRowY,videoWidth,videoHeight);  
 image(Noma1,videoWidth,firstRowY,videoWidth,videoHeight);  
 image(Flower2,videoWidth*2,firstRowY,videoWidth,videoHeight);  
 image(Starbucks23,0, secondRowY, videoWidth, videoHeight)
 image(Flower3,videoWidth, secondRowY, videoWidth, videoHeight)
 image(Tinker3, videoWidth*2,secondRowY,videoWidth, videoHeight)


}

