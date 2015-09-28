/**
 * @author Sean
 */

var SpawnPoint = function(x, y, direction)
{
	this.x = x;
	this.y = y;
	this.direction = direction;
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
	this.spawnPoints = [];
						
	this.spawnPoints.push(new SpawnPoint(11, 0), 	1);
	this.spawnPoints.push(new SpawnPoint(17, 0), 	1);
	this.spawnPoints.push(new SpawnPoint(11, 32), 	0);
	this.spawnPoints.push(new SpawnPoint(17, 32), 	0);
	this.spawnPoints.push(new SpawnPoint(0, 14), 	2);
	this.spawnPoints.push(new SpawnPoint(32, 14), 	3);
	
};

GameObject.prototype.impart(Spawner);

Spawner.prototype.Spawn = function(){
	var random = Math.round(Math.random() * 5);
	
	var Ghost1Spawn = this.spawnPoints[0];
	//PS.debug(Ghost1Spawn.x + " " + Ghost1Spawn.y + " " + random + "\n");
	var Ghost1 = new Ghost(Ghost1Spawn.x, Ghost1Spawn.y, this.level, Ghost1Spawn.direction);
	this.level.Game.addObject(Ghost1);
	
	random = Math.round(Math.random() * 5);
	var Ghost2Spawn = this.spawnPoints[2];
	//PS.debug(Ghost2Spawn.x + " " + Ghost2Spawn.y + " " + random + "\n");
	var Ghost2 = new Ghost(Ghost2Spawn.x, Ghost2Spawn.y, this.level, Ghost2Spawn.direction);
	this.level.Game.addObject(Ghost2);
	
	this.ghosts.push(new GhostPair(Ghost1, Ghost2));
};

Spawner.prototype.Draw = function(offsetX, offsetY){};

Spawner.prototype.Update = function(){
	for(i = 0; this.ghosts.length > 0 && i < this.ghosts.length; i++){
		if(this.ghosts[i].ghost1.dead && this.ghosts[i].ghost2.dead){
			PS.debug("Ghosts Killed! \n");
			this.ghosts[i].ghost1.remove = true;
			this.ghosts[i].ghost2.remove = true;
			this.ghosts = [];
			this.Spawn();
		}
	}
};
