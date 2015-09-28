/**
 * @author Sean
 */

/**
 * @author Sean
 */

var Ghost = function(x, y, level){
	GameObject.call(this, x, y, 2, 4, "Ghost");
	
	this.color = PS.COLOR_BLACK;
	this.level = level;
	
	this.active = true;
	this.dead = false;
	
	this.collidable = true;
	
	this.moveSpeed = 1/30;
	
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
	//this.x = this.x + 1;
	this.y += this.moveSpeed;
};

Ghost.prototype.setLevel = function(level)
{
	this.level = level;
};

Ghost.prototype.Collision = function(s1, p1, s2, p2, type){
	
	
};