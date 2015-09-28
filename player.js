/**
 * @author Sean
 */

var Player = function(x, y, level, playerNum){
	GameObject.call(this, x, y, 2, 4, "Player");
	
	this.color = PS.COLOR_BLACK;
	this.level = level;
	
	this.active = true;
	this.collidable = true;
	
	this.playerNum = playerNum;
	
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
	switch(this.playerNum){
		case 1:
			break;
		case 2:
			break;
		default:
			break;
	}
	
	if(Game.getKey(PS.KEY_ARROW_RIGHT) === 1 && Game.getKey(PS.KEY_ARROW_LEFT) === 1){
		PS.debug("Right Key and Left Key\n");
	}
	
	if(Game.getKey(PS.KEY_ARROW_LEFT) === 1){
		PS.debug("Left Key\n");
	}
};

Player.prototype.setLevel = function(level)
{
	this.level = level;
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	//PS.debug(this.name + ": Collision\n");
	this.level.EndGame();
};