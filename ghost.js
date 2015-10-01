/**
 * @author Sean
 */

/**
 * @author Sean
 */

var Ghost = function(x, y, level, directionIndex, name){
	GameObject.call(this, x, y, 5, 5, name);
	
	this.color = PS.COLOR_BLACK;
	this.level = level;
	
	this.active = true;
	this.dead = false;
	
	this.collidable = true;
	this.moveSpeed = 1/30;
	
	this.direction = "";
	this.directionIndex = directionIndex;
	switch(this.directionIndex){
		case(0):
		this.direction = "NORTH";
		break;
		case(1):
		this.direction = "SOUTH";
		break;
		case(2):
		this.direction = "EAST";
		break;
		case(3):
		this.direction = "WEST";
		break;
	}
	
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
	
	//PS.debug(this.sprite + ": " + this.x + " " + this.y + "\n");
};

Ghost.prototype.setLevel = function(level)
{
	this.level = level;
};

Ghost.prototype.Collision = function(s1, p1, s2, p2, type){
	
};