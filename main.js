var cen;
var par;
const MAG_RAD = 10;

function setup(){
  createCanvas(500,500);
  par = new particle();
  cen = new center();

}

function draw(){
  background(70);
  cen.update();
  par.create();
  cen.attract(par);
}
