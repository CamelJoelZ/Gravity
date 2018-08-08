const G = 0.000000000001;
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
    var dir = p5.Vector.sub(dot.pos,this.pos);
    var dis = dir.mag();
    dot.acc = dir.normalize();
    dot.acc.setMag(G/(dis * dis));

    console.log(G/(dis * dis));
    //var unitDir = dir.div(dis);
    //dot.acc.mult(forceMag);
    dot.pos.add(dot.vel);
    dot.vel.add(dot.acc);
  }
}

/*
 * particle class for attracted particles
 */
class particle{
  constructor(){
    this.pos = createVector(random(500),random(500));
    this.vel = createVector();
    this.acc = createVector();
  }

  /*
   * update the location of particles
   */
  create(){
    stroke(255);
    strokeWeight(5);
    point(this.pos.x,this.pos.y);
  }
}
