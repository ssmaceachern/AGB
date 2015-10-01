/**
 * @author Sean
 */

/**
 * @author Sean
 */

var Ghost = function(x, y, level, directionIndex){
	GameObject.call(this, x, y, 5, 5, "Ghost");
	
	this.color = PS.COLOR_BLACK;
	this.level = level;
	
	this.active = true;
	this.dead = false;
	
	this.collidable = true;
	this.moveSpeed = 1/30;
	
	this.directions = {
		NORTH 	: this.moveSpeed,		//0
		SOUTH 	: this.moveSpeed,		//1
		EAST 	: this.moveSpeed,		//2
		WEST 	: this.moveSpeed		//3
	};
	
	//this.direction = this.directions[directionIndex];
	this.directionIndex = directionIndex;
	/*
	 * Load the Ghost sprite
	 */
	this.imageID = PS.imageLoad("ghost.png", this.spriteLoader.bind(this), 4);
	
};

GameObject.prototype.impart(Ghost);

Ghost.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.imageID = PS.imageLoad("ghost.png", this.spriteLoader.bind(this), 4);
	}
	
};

Ghost.prototype.Update = function(){
	PS.debug(this.directionIndex + "\n");
	switch(this.directionIndex){
		
		case(0):
		this.y -= this.moveSpeed;
		break;
		case(1):
		this.y += this.moveSpeed;
		break;
		case(2):
		this.x += this.moveSpeed;
		break;
		case(3):
		this.x -= this.moveSpeed;
		break;
	}
	
	//this.y += this.moveSpeed;
	//PS.debug(this.sprite + ": " + this.x + " " + this.y + "\n");
};

Ghost.prototype.setLevel = function(level)
{
	this.level = level;
};

Ghost.prototype.Collision = function(s1, p1, s2, p2, type){
	
};