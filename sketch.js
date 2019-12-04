
var bubbles = [];

function setup() {
	createCanvas(1200, 800);
    
    for (let i = 0; i < 10000; i++) {
        bubbles.push(new Bubble(random(width), random(height), random(10, 40)));
    }
}

function draw() {
    //frameRate(10);
	background(0);
    
    for(let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {
    constructor (x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.v = 5;
    }
    
    move() {
        this.x += random(-this.v, this.v);
        this.y += random(-this.v, this.v);
    }
    
    show() {
        //stroke(255);
        //strokeWeight(4);
        noStroke();
        fill(255, 10);
        ellipse(this.x, this.y, this.r * 2);
    }
}