/**
 * @author Sean
 */

var Level = function(width, height, color)
{
	GameObject.call(this, 0, 0, width, height, "Level");
	this.objects = [];
	this.color = color;
	this.name = "Level";
	
	this.spawnTimer = null;
	this.enemyCount = 0;	
};

GameObject.prototype.impart(Level);

Level.prototype.setPlayer = function(object){
	this.player = object;
};

Level.prototype.Update = function(){
	
	
};

Level.prototype.Draw = function(offsetX, offsetY) {
	
	
};