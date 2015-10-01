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

var GhostsKilled = 0;

var Spawner = function(level){
	GameObject.call(this, 0, 0, 0, 0, "Spawner");
	
	this.level = level;
	
	this.active = true;
	this.collidable = false;
	
	this.ghosts = [];
	this.p1spawnPoints = [];
	this.p2spawnPoints = [];
};

GameObject.prototype.impart(Spawner);

Spawner.prototype.LoadP1SpawnPoints = function(){
	var player1 = Game.GetObjectByName("Player1");
	
	this.p1spawnPoints.push(new SpawnPoint(player1.x, player1.y - 15, 	1));
	this.p1spawnPoints.push(new SpawnPoint(player1.x, player1.y + 15, 	0));
	this.p1spawnPoints.push(new SpawnPoint(player1.x - 15, 14, 	2));
};

Spawner.prototype.LoadP2SpawnPoints = function(){
	var player2 = Game.GetObjectByName("Player2");
	
	this.p2spawnPoints.push(new SpawnPoint(player2.x, player2.y - 15, 	1));
	this.p2spawnPoints.push(new SpawnPoint(player2.x, player2.y + 15, 	0));
	this.p2spawnPoints.push(new SpawnPoint(player2.x + 15, 14, 	3));
};

Spawner.prototype.Spawn = function(){
	if(this.p1spawnPoints.length == 0 && this.p2spawnPoints.length == 0){
		this.LoadP1SpawnPoints();
		this.LoadP2SpawnPoints();
	}
	
	var random = Math.round(Math.random() * 2);
	//PS.debug(random + "\n");
	
	var Ghost1Spawn = this.p1spawnPoints[random];
	var Ghost1 = new Ghost(Ghost1Spawn.x, Ghost1Spawn.y, this.level, Ghost1Spawn.direction, "Ghost1");
	this.level.Game.addObject(Ghost1);
	
	random = Math.round(Math.random() * 2);
	//PS.debug(random + "\n");
	
	var Ghost2Spawn = this.p2spawnPoints[random];
	var Ghost2 = new Ghost(Ghost2Spawn.x, Ghost2Spawn.y, this.level, Ghost2Spawn.direction, "Ghost2");
	this.level.Game.addObject(Ghost2);
	
	this.ghosts.push(new GhostPair(Ghost1, Ghost2));
};

Spawner.prototype.Draw = function(offsetX, offsetY){};

Spawner.prototype.Update = function(){
	for(i = 0; this.ghosts.length > 0 && i < this.ghosts.length; i++){
		if(this.ghosts[i].ghost1.dead && this.ghosts[i].ghost2.dead){
			//PS.debug("Ghosts Killed! \n");
			this.ghosts[i].ghost1.remove = true;
			this.ghosts[i].ghost2.remove = true;
			this.ghosts.splice(i, 1);
			
			GhostsKilled += 2;
			
			PS.audioLoad("excellent", {autoplay : true, loop : false, path : "audio/", fileTypes : ["mp3"]});
			this.Spawn();
		}
	}
};
