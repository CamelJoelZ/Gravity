const PAR_NUM = 100;

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
  //console.log(turn);
}

/*
 * randomly create incoming particles
 */
 function create(arr,z){
   turn++
   if(turn % 50 == 0) arr.push(new particle());
   for( var i = 0; i < arr.length; i++){
     arr[i].update();
     z.attract(arr[i]);
   }
 }
