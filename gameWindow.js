/**
 * @author Sean
 */

/**
 * Controls the viewable region of the game. Also refreshes the Draw function and 
 * begins the update timer upon initialization.
 * @param {Object} width
 * @param {Object} height
 * @param {Object} color
 */
var Window = function(width, height, color)
{
	GameObject.call(this, 0, 0, width, height, "Window");
	this.objects = [];
	this.color = color;
	
	/*
	 * Color grid
	 */
	PS.gridSize(this.w, this.h);
	PS.gridColor(this.color);
	
	PS.color( PS.ALL, PS.ALL, this.color);
	
	this.UpdateLoop = null;
};

GameObject.prototype.impart(Window);

Window.prototype.run = function(){
	if(this.UpdateLoop == null){
		this.UpdateLoop = PS.timerStart(1, GameObject.prototype._tick.bind(this));
	}
};

Window.prototype.stop = function() {
	if (this.UpdateLoop !== null) {
		PS.timerStop(this.UpdateLoop);
		this.UpdateLoop = null;
	}
};

Window.prototype.addObject = function(object) {
	this.objects.push(object);
};

Window.prototype.removeObject = function(object) {
	var tmp = object;
	delete(this.objects.filter(function(obj){
		tmp == obj;
	}));
};

Window.prototype.Erase = function(object){
	if(object.sprite != null && object.remove)
		{
			object.active = false;
			PS.spriteDelete(object.sprite);
		}
		else{
			PS.debug(object.sprite + " " + object.removes + "\n");
		}
};

Window.prototype.Update = function(){
	for (var i = 0; i < this.objects.length; ++i) {
		if(this.objects[i].active);
			this.objects[i]._update();
	}
	// Remove inactive children
	for (var i = 0; i < this.objects.length; ++i) {
		if(this.objects[i].remove)
			PS.debug("Remove\n");
			
			this.Erase(this.objects[i]);
			this.objects.splice(i--, 1);
	}	
};

Window.prototype.Draw = function(offsetX, offsetY) {
	PS.color( PS.ALL, PS.ALL, this.color);
	PS.border(PS.ALL, PS.ALL, 0);
	
	for (var i = 0; i < this.objects.length; ++i) {
		if(this.objects[i].active)
		{
			this.objects[i]._draw(offsetX, offsetY);
		}
			
	}
};

Window.prototype.GetObjectBySprite = function(sprite) {
	//PS.debug("Function call\n");
	if(this.objects.length == 0)
	{
		return false;
	}
	
	for(i = 0; i < this.objects.length; i++){
		
		if(sprite == this.objects[i].sprite){
			
			return this.objects[i];
		}
	}
};
