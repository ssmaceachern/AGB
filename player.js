/**
 * @author Sean
 */

var CalculateDistance = function(object1, object2){
	return Math.sqrt( Math.pow((object1.x-object2.x), 2) + Math.pow((object1.y-object2.y), 2) );
};

var LoseFlag = false;

var Player = function(x, y, level, playerNum){
	GameObject.call(this, x, y, 4, 5, "Player" + playerNum);
	
	this.color = PS.COLOR_BLACK;
	this.level = level;
	
	this.active = true;
	this.collidable = true;
	
	this.ghost = null;
	this.punchFlag = false;
	this.punchCooldown = 0;
	
	this.distanceFromGhost = 0;
	
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
		//PS.spriteShow(this.sprite, true);
		var loc = PS.spriteMove(this.sprite, this.x, this.y);
		this.imageID = PS.imageLoad("player.png", this.spriteLoader.bind(this), 4);	
	}else{
		
		this.imageID = PS.imageLoad("player.png", this.spriteLoader.bind(this), 4);
	}
	
};

Player.prototype.Update = function(){
	
	switch(this.playerNum){
		case 1:
			this.ghost = Game.GetObjectByName("Ghost1");
			break;
			
		case 2:
			this.ghost = Game.GetObjectByName("Ghost2");
			break;
		default:
			break;
	}
	
	//PS.debug(this.name + ": " + CalculateDistance(this, this.ghost) + "\n");
	this.distanceFromGhost = CalculateDistance(this, this.ghost);
	
	if(this.distanceFromGhost < 8){
		//PS.debug("Target is within range!\n");
		
		if(this.playerNum == 1){
			//WSA Keys respectively
			if(	(Game.getKey(119) 	=== 1 && this.ghost.direction == "SOUTH") || 
				(Game.getKey(115) 	=== 1 && this.ghost.direction == "NORTH") || 
				(Game.getKey(97) 	=== 1 && this.ghost.direction == "EAST") && this.punchCooldown == 0){
				
				this.Punch();
			}
		}else{
			if(	(Game.getKey(PS.KEY_ARROW_UP) 		=== 1 && this.ghost.direction == "SOUTH") || 
				(Game.getKey(PS.KEY_ARROW_DOWN) 	=== 1 && this.ghost.direction == "NORTH") || 
				(Game.getKey(PS.KEY_ARROW_RIGHT) 	=== 1 && this.ghost.direction == "WEST") && this.punchCooldown == 0){
					
				this.Punch();
			}
		}
		
		if(this.punchFlag){
			this.ghost.dead = true;
		}
	}
	
	if(this.punchCooldown > 0){
		this.punchCooldown--;
	}
	
	if(this.punchCooldown <= 0){
		this.punchFlag = false;
	}
	
	if(LoseFlag)
	{
		this.level.EndGame();
	}
};

Player.prototype.Punch = function()
{
	this.punchFlag = true;
	
	var random = Math.floor((Math.random() * 4) + 1);
	switch(random){
		case 1:
			PS.audioLoad("punch1", {autoplay : true, loop : false, path : "audio/", fileTypes : ["mp3"]});
			break;
		case 2:
			PS.audioLoad("punch2", {autoplay : true, loop : false, path : "audio/", fileTypes : ["mp3"]});
			break;
		case 3:
			PS.audioLoad("punch3", {autoplay : true, loop : false, path : "audio/", fileTypes : ["mp3"]});
			break;
		case 4:
			PS.audioLoad("punch4", {autoplay : true, loop : false, path : "audio/", fileTypes : ["mp3"]});
			break;
	}
	
	this.punchCooldown = 20;
};

Player.prototype.setLevel = function(level)
{
	this.level = level;
};

Player.prototype.Collision = function(s1, p1, s2, p2, type){
	
	var CollidedObject = Game.GetObjectBySprite(s2);
	if((CollidedObject.name == "Ghost1" || CollidedObject.name == "Ghost2")){
		if(this.punchFlag == true){
			//CollidedObject.dead = true;
		}
		else{
			LoseFlag = true;	
		}
		
	}
	
};