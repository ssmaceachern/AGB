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
		
		this.ghostSpawner = new Spawner(this);
		this.name = "Level";
		
		this.active = true;
		
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
	this.CurrentMode = this.MODES.Start;
	PS.imageLoad("title.png", this.spriteLoader.bind(this), 4);
	
	PS.statusText("Press Enter to Start");
	
	this.Game.addObject(this);
	
	Game.run();
};

Level.prototype.PlayGame = function(){
	this.CurrentMode = this.MODES.Play;
	
	PS.spriteShow(this.sprite, false);
	PS.statusText("Defeat the Ghosts!");
	
	this.Game.addObject(new Player(11, 14, this, 1));
	this.Game.addObject(new Player(17, 14, this, 2));
	this.Game.addObject(this.ghostSpawner);
	
	this.ghostSpawner.Spawn();
};

Level.prototype.PauseGame = function(){
	this.CurrentMode = this.MODES.Pause;
};

Level.prototype.EndGame = function(){
	this.CurrentMode = this.MODES.End;
	PS.imageLoad("lose.png", this.spriteLoader.bind(this), 4);
	PS.statusText("Damn! Nuclear Death is upon us!");
	
	this.Game.removeAllObjectsFromLevel();
};

Level.prototype.GetCurrentMode = function(){
	return this.CurrentMode;
};

Level.prototype.Update = function(){
	
	switch(this.CurrentMode){
		case this.MODES.Start:
			if(Game.getKey(PS.KEY_ENTER) === 1){
				//PS.debug("Player Enter\n");
				this.CurrentMode = this.MODES.Play;
				this.CurrentMode();
			}
			break;
		case this.MODES.Play:
			break;
		case this.MODES.Pause:
			break;
		case this.MODES.End:
			if(Game.getKey(PS.KEY_ENTER) === 1){
				//PS.debug("Player Enter\n");
				this.CurrentMode = this.MODES.Play;
				this.CurrentMode();
			}
			break;
		default:
			break;
	}
	
	//PS.debug(this.CurrentMode + "\n");
};

Level.prototype.Draw = function(offsetX, offsetY) {
	if(this.sprite == null)
	{
		switch(this.CurrentMode){
			case this.MODES.Start:
			PS.imageLoad("title.png", this.spriteLoader.bind(this), 4);
			break;
			case this.MODES.End:
			PS.imageLoad("lose.png", this.spriteLoader.bind(this), 4);
			break;
		}
	
	}
	else{
		PS.spriteMove(this.sprite, this.x, this.y);	
	}
	
};