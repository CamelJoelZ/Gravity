
const G = 300;
const MAG_RAD = 5;
const MAXSP = 2;
const ORBIT = 25;
const ORBIT_SPEED = 1;
/*
 * center class used for build the attractor
 */
class center{
  constructor(){
    this.pos = createVector(20,200);
    this.ammo = 0;
  }

  /*
   * update the location of the attractor
   */
  update(){
    fill(50);
    stroke(50);
    ellipse(this.pos.x,this.pos.y,MAG_RAD,MAG_RAD);
  }
  /*
   * method to attract particles
   */
  attract(dot){
    var dir = p5.Vector.sub(this.pos,dot.pos);
    var dis = dir.mag();
    dot.acc = dir.normalize();
    dot.acc.setMag(G/(dis * dis));
    this.capture(dot);
  }
  /*
   * to capture the particle that is within a certain distance
   */
  capture(dot){
    var dis = p5.Vector.sub(this.pos,dot.pos);
    if(dis.mag() <= ORBIT ){
      var tmpAcc = dot.acc;
      dot.vel = dot.acc.rotate(HALF_PI);
      dot.vel.setMag(ORBIT_SPEED);
      dot.acc = tmpAcc;
      //dot.vel.rotate(HALF_PI);
      //dot.vel.mult(ORBIT_SPEED);
      //this.ammo++;
      dot.captured = 1;
    }
  }
}

/*
 * particle class for attracted particles
 */
class particle{
  constructor(){
    this.pos = createVector(1000,random(100,300));
    this.vel = createVector(-1,0);
    this.acc = createVector();
    this.captured = 0;
  }

  /*
   * update the location of particles
   */
  update(){
    push();
    stroke(255);
    strokeWeight(3);
    //var prePos = this.pos;
    this.pos = p5.Vector.add(this.pos, this.vel);
    this.vel = p5.Vector.add(this.vel, this.acc);
    // limit the speed of particles
    this.vel.limit(MAXSP);
    point(this.pos.x,this.pos.y);
    pop();
    //line(prePos.x,prePos.y,this.pos.x,this.pos.y);
  }
}
/*
 * cloud class for flying cloud in the background
 */
 class cloud{
   constructor(){
     this.pos = createVector(1000,random(100,400));
     this.vel = createVector(-100,0);
   }
   update(){
     push();
     this.pos = p5.Vector.add(this.pos, this.vel);
     stroke(70,5);
     rect(this.pos.x,this.pos.y,70,1);
     stroke(0);
     strokeWeight(3);
     line(0,100,1000,100);
     line(0,400,1000,400);
     pop();
   }
 }
