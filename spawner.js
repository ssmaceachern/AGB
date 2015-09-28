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
	
};

GameObject.prototype.impart(Spawner);

Spawner.prototype.LoadSpawnPoints = function(){
	this.spawnPoints.push(new SpawnPoint(17, -5, 	1));
	this.spawnPoints.push(new SpawnPoint(17, 37, 	0));
	this.spawnPoints.push(new SpawnPoint(-5, 14, 	2));
	
	this.spawnPoints.push(new SpawnPoint(11, -5, 	1));
	this.spawnPoints.push(new SpawnPoint(11, 37, 	0));
	this.spawnPoints.push(new SpawnPoint(37, 14, 	3));
};

Spawner.prototype.Spawn = function(){
	if(this.spawnPoints.length == 0){
		this.LoadSpawnPoints();
	}
	
	var random = Math.round(Math.random() * 3);
	
	var Ghost1Spawn = this.spawnPoints[random];
	//PS.debug(Ghost1Spawn.x + " " + Ghost1Spawn.y + " " + random + "\n");
	var Ghost1 = new Ghost(Ghost1Spawn.x, Ghost1Spawn.y, this.level, Ghost1Spawn.direction);
	this.level.Game.addObject(Ghost1);
	
	random = Math.round(Math.random() * 3) + 2;
	
	var Ghost2Spawn = this.spawnPoints[random];
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
