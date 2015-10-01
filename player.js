/**
 * @author Sean
 */

var Player = function(x, y, level, playerNum){
	GameObject.call(this, x, y, 2, 4, "Player");
	
	this.color = PS.COLOR_BLACK;
	this.level = level;
	
	this.active = true;
	this.collidable = true;
	
	this.punchFlagUpUp = false;
	this.punchFlagUpRight = false;
	this.punchFlagUpDown = false;
	this.punchFlagLeftUp = false;
	this.punchFlagLeftRight = false;
	this.punchFlagLeftDown = false;
	this.punchFlagDownUp = false;
	this.punchFlagDownRight = false;
	this.punchFlagDownDown = false;
	
	this.punchCooldown = 0;
	
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
	
	// switch(this.playerNum){
		// case 1:
			// break;
		// case 2:
			// break;
		// default:
			// break;
	// }
	
	PS.debug("punchCooldown: " + this.punchCooldown + "\n");
	
	if(this.punchCooldown > 0){
		this.punchCooldown--;
	}
	else{
		this.punchFlagUpUp = false;
		this.punchFlagUpRight = false;
		this.punchFlagUpDown = false;
		this.punchFlagLeftUp = false;
		this.punchFlagLeftRight = false;
		this.punchFlagLeftDown = false;
		this.punchFlagDownUp = false;
		this.punchFlagDownRight = false;
		this.punchFlagDownDown = false;
	}
	
	if(Game.getKey(119) === 1 && Game.getKey(PS.KEY_ARROW_UP) === 1){
		if(this.punchCooldown == 0){
			//punch: needs animation
			this.punchFlagUpUp = true;
			var rando = Math.floor((Math.random() * 4) + 1);
			switch(rando){
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
			this.punchCooldown = 30;
		}
	}
	else if(Game.getKey(119) === 1 && Game.getKey(PS.KEY_ARROW_RIGHT) === 1){
		if(this.punchCooldown == 0){
			//punch: needs animation
			this.punchFlagUpRight = true;
			var rando = Math.floor((Math.random() * 4) + 1);
			switch(rando){
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
			this.punchCooldown = 30;
		}
	}
	else if(Game.getKey(119) === 1 && Game.getKey(PS.KEY_ARROW_DOWN) === 1){
		if(this.punchCooldown == 0){
			//punch: needs animation
			this.punchFlagUpDown = true;
			var rando = Math.floor((Math.random() * 4) + 1);
			switch(rando){
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
			this.punchCooldown = 30;
		}
	}
	else if(Game.getKey(97) === 1 && Game.getKey(PS.KEY_ARROW_UP) === 1){
		if(this.punchCooldown == 0){
			//punch: needs animation
			this.punchFlagLeftUp = true;
			var rando = Math.floor((Math.random() * 4) + 1);
			switch(rando){
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
			this.punchCooldown = 30;
		}
	}
	else if(Game.getKey(97) === 1 && Game.getKey(PS.KEY_ARROW_RIGHT) === 1){
		if(this.punchCooldown == 0){
			//punch: needs animation
			this.punchFlagLeftRight = true;
			var rando = Math.floor((Math.random() * 4) + 1);
			switch(rando){
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
			this.punchCooldown = 30;
		}
	}
	else if(Game.getKey(97) === 1 && Game.getKey(PS.KEY_ARROW_DOWN) === 1){
		if(this.punchCooldown == 0){
			//punch: needs animation
			this.punchFlagLeftDown = true;
			var rando = Math.floor((Math.random() * 4) + 1);
			switch(rando){
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
			this.punchCooldown = 30;
		}
	}
	else if(Game.getKey(115) === 1 && Game.getKey(PS.KEY_ARROW_UP) === 1){
		if(this.punchCooldown == 0){
			//punch: needs animation
			this.punchFlagDownUp = true;
			var rando = Math.floor((Math.random() * 4) + 1);
			switch(rando){
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
			this.punchCooldown = 30;
		}
	}
	else if(Game.getKey(115) === 1 && Game.getKey(PS.KEY_ARROW_RIGHT) === 1){
		if(this.punchCooldown == 0){
			//punch: needs animation
			this.punchFlagDownRight = true;
			var rando = Math.floor((Math.random() * 4) + 1);
			switch(rando){
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
			this.punchCooldown = 30;
		}
	}
	else if(Game.getKey(115) === 1 && Game.getKey(PS.KEY_ARROW_DOWN) === 1){
		if(this.punchCooldown == 0){
			//punch: needs animation
			this.punchFlagDownDown = true;
			var rando = Math.floor((Math.random() * 4) + 1);
			switch(rando){
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
			this.punchCooldown = 30;
		}
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