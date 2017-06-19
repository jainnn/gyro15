var forceX = 0;
var forceY = 0;
var bars = [];
var r, g, b;

function windowResized() { 
	resizeCanvas(windowWidth, windowHeight);
}

function setup(){
	createCanvas(windowWidth, windowHeight);
  r = random(50, 255);
  g = random(0, 200);
  b = random(50, 255);
  
  
	gyro.frequency = 10; 
	gyro.startTracking(function(o) {
        forceX = o.gamma/50;
        forceY = o.beta/50;
    });

    for (var i = 0; i < 4; i++) {
    	bars[i] = new Bar();
    }

  
}



function draw(){
 background(200);
   console.log('draw');
   noStroke();
   fill(random(255),random(255),random(255));
//  rotateX(accelerationX * 0.01);
//  rotateY(accelerationY * 0.01);
   for (var i = 0; i < bars.length; i++) {
		bars[i].update();
		
	}
}

//function deviceMoved() {   
  //  r = map(accelerationX, -90, 90, 100, 200);
  //  g = map(accelerationY, -90, 90, 100, 200);

//}


function Bar(){
	this.x = width/2; 
	this.y = height/2;
	this.vitx = random(2, 12);
	this.vity = random(2, 12);
	this.diam = random(20,40);
}


Bar.prototype = {
	update: function(){

		this.x += this.vitx * forceX;
		this.y += this.vity * forceY;

		if(this.x < this.diam/2){
			this.x = this.diam/2;
		} else if(this.x > width-this.diam/2){
			this.x = width-this.diam/2;
		}
		if(this.y < this.diam/2){
			this.y = this.diam/2;
		} else if(this.y > height-this.diam/2){
			this.y = height-this.diam/2;
		}

	rect(this.x, this.y, this.diam * forceX*25, this.diam * forceY*15);			
	rect(this.x+100, this.y+100, this.diam * forceX*10, this.diam * forceY*13);	
	rect(this.x-80, this.y-50, this.diam * forceX*5, this.diam * forceY*30);
	}
}
