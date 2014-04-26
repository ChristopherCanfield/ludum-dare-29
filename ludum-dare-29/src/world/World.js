/**
 * World.js
 * @author Christopher D. Canfield
 */

function World(scene) {
	this.scene = scene;
	this.entities = [];
};

World.prototype.update = function() {
	for (var i = 0; i < length; ++i)
	{
		if (this.entities[i].isDisposed())
		{
			this.entities.splice(i, 1);
		}
		else
		{
			this.entities[i].update();
		}
	}
};

World.prototype.add = function(entity) {
	if (!(entity instanceof Entity))
	{
		throw "Invalid object added to entity.";
	}
	
	this.entities.push(entity);
	this.scene.add(entity.mesh);
};