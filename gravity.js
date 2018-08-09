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
    this.pos = createVector();
  }

  /*
   * update the location of the attractor
   */
  update(){
    this.pos.x = mouseX;
    this.pos.y = mouseY;
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
    if(dis.mag() <= ORBIT){
      var tmpAcc = dot.acc;
      dot.vel = dot.acc.rotate(HALF_PI);
      dot.vel.setMag(ORBIT_SPEED);
      dot.acc = tmpAcc;
      //dot.vel.rotate(HALF_PI);
      //dot.vel.mult(ORBIT_SPEED);
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
  }

  /*
   * update the location of particles
   */
  update(){
    stroke(255,80);
    strokeWeight(3);
    var prePos = this.pos;
    this.pos = p5.Vector.add(this.pos, this.vel);
    this.vel = p5.Vector.add(this.vel, this.acc);
    // limit the speed of particles
    this.vel.limit(MAXSP);
    point(this.pos.x,this.pos.y);
    //line(prePos.x,prePos.y,this.pos.x,this.pos.y);
  }



}
