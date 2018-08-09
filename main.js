var cen;
var par;


function setup(){
  createCanvas(500,500);
  par = new particle();
  par1 = new particle();
  cen = new center();

}

function draw(){
  background(70);
  cen.update();
  par.update();
  par1.update();
  cen.attract(par1);
  cen.attract(par);


  console.log(par.vel.mag());
}
