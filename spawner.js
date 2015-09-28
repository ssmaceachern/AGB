/**
 * @author Sean
 */

var SpawnPoint = function(x, y)
{
	this.x = x;
	this.y = y;
};

var GhostPair = function(ghost1, ghost2)
{
	this.ghost1 = ghost1;
	this.ghost2 = ghost2;
};

var Spawner = function(level){
	GameObject.call(this, 0, 0, 0, 0, "Spawner");
	
	this.level = level;
	
	this.active = true;
	this.collidable = false;
	
	this.ghosts = [];
	this.spawnPoints = [SpawnPoint(11, 0),
						SpawnPoint(17, 0),
						SpawnPoint(11, 32),
						SpawnPoint(17, 32),
						SpawnPoint(0, 14),
						SpawnPoint(32, 14)];
	
	
};

GameObject.prototype.impart(Spawner);

Spawner.prototype.Spawn = function(){
	PS.debug(this.spawnPoints + "\n");
	
	// var Ghost1Spawn = this.spawnPoints[(Math.random() * 5)];
	// var Ghost1 = new Ghost(Ghost1Spawn.x, Ghost1Spawn.y, this.level);
// 	
	// var Ghost2Spawn = this.spawnPoints[(Math.random() * 5)];
	// var Ghost2 = new Ghost(Ghost2Spawn.x, Ghost2Spawn.y, this.level);
	
	//this.ghosts.push(new GhostPair(Ghost1, Ghost2));
};

Spawner.prototype.Draw = function(offsetX, offsetY){};

Spawner.prototype.Update = function(){
	
};
