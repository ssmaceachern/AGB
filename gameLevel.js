/**
 * @author Sean
 */

/**
 *	Class for handling game states 
 * @param {Object} game
 */
var Level = function(game)
{
	if(game != null){
		GameObject.call(this, 0, 0, game.w, game.h, "Level");
		this.Game = game;
		
		this.objects = game.objects;
		this.name = "Level";
		
		this.MODES = {
			Start 	: this.StartGame,
			Play 	: this.PlayGame,
			Pause 	: this.PauseGame,
			End 	: this.EndGame
		};
		
		this.CurrentMode = null;	
	}
};

GameObject.prototype.impart(Level);

Level.prototype.StartGame = function(){
	
};

Level.prototype.PlayGame = function(){
	this.Game.addObject(new Player(16, 12, this));
	this.Game.addObject(new Ghost(0, 0, this));
};

Level.prototype.PauseGame = function(){
	
};

Level.prototype.EndGame = function(){
	
	this.Game.removeAllObjects();
	
};

Level.prototype.GetCurrentMode = function(){
	return this.CurrentMode;
};

Level.prototype.Update = function(){
	
};

Level.prototype.Draw = function(offsetX, offsetY) {
	
};