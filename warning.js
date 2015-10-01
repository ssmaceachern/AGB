
/**
 * @author Sean
 */

var Warning = function(x, y, level){
	GameObject.call(this, x, y, 8, 8, "Warning");
	
	this.level = level;
	
	this.active = true;
	this.collidable = false;
	
	/*
	 * Load the Warning sprite
	 */
	this.imageID = PS.imageLoad("warning.png", this.spriteLoader.bind(this), 4);
	
	//PS.spriteShow(this.sprite, false);
};

GameObject.prototype.impart(Warning);

Warning.prototype.Draw = function(offsetX, offsetY){
	this.x = this.x + offsetX;
	this.y = this.y + offsetY;
	
	if(this.sprite != null){
		var loc = PS.spriteMove(this.sprite, this.x, this.y);	
	}else{
		this.imageID = PS.imageLoad("warning.png", this.spriteLoader.bind(this), 4);
	}
	
	if(this.player1.distanceFromGhost < 8 || this.player2.distanceFromGhost < 8){
		PS.spriteShow(this.sprite, true);
		
	}
	else if(this.sprite != null)
	{
		PS.spriteShow(this.sprite, false);
	}
	
};

Warning.prototype.Update = function(){
	
	this.player1 	= Game.GetObjectByName("Player1");
	this.player2	= Game.GetObjectByName("Player2");
	
	this.ghost1		= Game.GetObjectByName("Ghost1");
	this.ghost2 	= Game.GetObjectByName("Ghost2");
	
	
	
	//PS.debug(this.sprite + ": " + this.x + " " + this.y + "\n");
};