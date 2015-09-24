/**
 * @author Sean
 */

var Player = function(x, y, level){
	GameObject.call(this, x, y, 2, 4, "Player");
	
	this.color = PS.COLOR_BLACK;
	this.level = level;
	
	/*
	 * Load the player sprite
	 */
	this.sprite = PS.spriteSolid(this.w, this.h);
	PS.spriteSolidColor ( this.sprite, this.color );
	PS.spriteMove(this.sprite, this.x, this.y);
	
	PS.spriteCollide(this.sprite, this.Collision.bind(this));
};

GameObject.prototype.impart(Player);

Player.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.sprite = PS.spriteSolid(this.w, this.h);
		PS.spriteSolidColor ( this.sprite, this.color );
		PS.spriteMove(this.sprite, this.x, this.y);
	}
	
};

Player.prototype.Update = function(){
	this.remove = true;
	PS.debug("Do I exist?\n");
};

Player.prototype.setLevel = function(level)
{
	this.level = level;
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	
	var CollidingObject = this.level.getObjectBySprite(s2);
	
};