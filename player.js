/**
 * @author Sean
 */

var Player = function(x, y, level, playerNum){
	GameObject.call(this, x, y, 2, 4, "Player");
	
	this.color = PS.COLOR_BLACK;
	this.level = level;
	
	this.active = true;
	this.collidable = true;
	
	this.punchFlag = false;
	
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
	// if(this.punchFlag){
		// this.punchFlag = false;
	// }
	
	switch(this.playerNum){
		case 1:
			break;
		case 2:
			break;
		default:
			break;
	}
	
	if(Game.getKey(PS.KEY_ARROW_UP) === 1 && Game.getKey(119) === 1){
		this.punchFlag = true;
		//PS.color(1,1, PS.COLOR_RED);
	} else {
		//PS.color(1,1, PS.COLOR_ORANGE);
		this.punchFlag = false;
	}
	
};

Player.prototype.setLevel = function(level)
{
	this.level = level;
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	
	var CollidedObject = Game.GetObjectBySprite(s2);
	if(this.punchFlag && CollidedObject.name == "Ghost"){
		CollidedObject.dead = true;
		this.punchFlag = false;
		
	}else if(this.punchFlag == false){
		this.level.EndGame();	
	}
	
};