const PAR_NUM = 100;
const SPEED = 3;
const AMMO = 10;

var cen;
var par;
var parArr = [];
var turn = 0;


function setup(){
  createCanvas(1000,500);
  cen = new center();
}

function draw(){
  background(70);
  cen.update();
  create(parArr,cen);
  keyPressed();
}

/*
 * randomly create incoming particles
 */
 function create(arr,z){
   turn++;
   // create the new coming particles
   if(turn % 50 == 0) arr.push(new particle());

   // update the position of every particles in the game
   for( var i = 0; i < arr.length; i++){
     arr[i].update();

     // only attract new particles when ammo is not full
     if(checkAmmo(arr) < AMMO && arr[i].captured == 0)
      z.attract(arr[i]);
      //console.log(z.ammo);
     if(arr[i].captured == 1)
      z.attract(arr[i]);
   }
 }

 /*
  * check the amount of ammo the center has
  */
 function checkAmmo(arr){
   var aNum = 0;

   for(var i = 0; i < arr.length; i++){
     if(arr[i].captured == 1) aNum++;
   }

   return aNum;
 }

 function keyPressed(){
   if(keyIsDown(RIGHT_ARROW)){
     cen.pos.x += SPEED;
   }
   if(keyIsDown(LEFT_ARROW)){
     cen.pos.x -= SPEED;
   }
   if(keyIsDown(DOWN_ARROW)){
     cen.pos.y += SPEED;
   }
   if(keyIsDown(UP_ARROW)){
     cen.pos.y -= SPEED;
   }
}
