//Kase Kolder
class Particle{
	constructor(_x, _y){
  	this.x = _x;
    this.y = _y;
    this.s = random(10,50);
    this.c = color(100,20,200);
    this.isClose = false;
  }
  
  update(){
    this.isClose = false;
  	this.x = this.x + random(-2,2);
    this.y = this.y + random(-2,2);
  }
  drawLine(_p){
  	let distance;
    distance = dist(this.x, this.y, _p.x, _p.y);
    if(distance < 15){
      stroke(100,20,100);
    	line(this.x, this.y, _p.x, _p.y);
      this.isClose = true;
    }
  }
  show(){
    noFill();
    if(this.isClose == true){
    	this.c = color(100,50,255);
    }else{
    	this.c = color(255);
    }
    stroke(this.c);
    ellipse(this.x,this.y,this.s); 
  }
  

}

let p = [];
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(100);
  
  for(let i = 0; i < p.length; i++){
  	p[i].update();
    
    for(let j=0; j<p.length; j++){
    	if(i != j){
      	p[i].drawLine(p[j]);
      }
    }
  	p[i].show();
  }
}

function mouseDragged(){
	p.push(new Particle(mouseX, mouseY));
}