const KEY_ESCAPE = 27;
const KEY_Q = 81;

let testChunk;
let testChunk2;

let mainCamera;
let currentKeyCode;
let mouseCaptured = true;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  mainCamera = new Camera(createVector(0, 0, 0));
  testChunk = new Chunk(createVector(0, 0, 0));
  testChunk2 = new Chunk(createVector(1, 0, 0));
}

function keyPressed() {
  currentKeyCode = keyCode;
}

function update() {
  (mouseCaptured ? requestPointerLock() : exitPointerLock());
  if(keyIsDown(KEY_Q)) mouseCaptured = !mouseCaptured;

  cursor(CROSS);
  mainCamera.update();
  //console.log(frameRate());
}

function draw() {
  update();
  background(100);

  testChunk.show();
  testChunk2.show();
}
