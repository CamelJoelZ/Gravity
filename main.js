var cen;
var par;


function setup(){
  createCanvas(500,500);
  par = new particle();
  cen = new center();

}

function draw(){
  background(70);
  cen.update();
  par.update();
  cen.attract(par);
  console.log(par.vel.mag());
}
