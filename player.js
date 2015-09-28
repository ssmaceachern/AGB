/**
 * @author Sean
 */

var Player = function(x, y, level){
	GameObject.call(this, x, y, 2, 4, "Player");
	
	this.color = PS.COLOR_BLACK;
	this.level = level;
	
	this.active = true;
	this.collidable = true;
	
	/*
	 * Load the Player sprite
	 */
	
	this.imageID = PS.imageLoad("player.png", this.spriteLoader.bind(this), 4);
	
};

GameObject.prototype.impart(Player);

Player.prototype.Draw = function(offsetX, offsetY){
	
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		
		this.imageID = PS.imageLoad("player.png", this.spriteLoader.bind(this), 4);
	}
	
};

Player.prototype.Update = function(){
	
};

Player.prototype.setLevel = function(level)
{
	this.level = level;
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	PS.debug(this.name + ": Collision\n");
	this.level.EndGame();
};