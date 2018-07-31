var font;
var vehicles = [];


function preload(){
  font = loadFont('AvenirNextLTPro-Demi.otf');
}




function setup(){
  var canvas = createCanvas(300,300);
  // background(100);
  canvas.parent('sketch-holder');
  var points = font.textToPoints('LOVE', 0, 190, 100);
  for(var i = 0; i < points.length;i++){
  var pnt = points[i];
  var vehicle = new Vehicle(pnt.x, pnt.y);
  vehicles.push(vehicle);
}
}

function draw(){
  background(255);
  for(var i = 0; i < vehicles.length; i++){
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
    // v.arrive();
  }
}
