/**
 * OutOfBoundsController.js
 * @author Christopher D. Canfield
 */

function OutOfBoundsController(world, minX, maxX, minY, maxY, minZ, maxZ) {
	this.world = world;
	this.entity = null;
	
	this.minX = minX;
	this.maxX = maxX;
	this.minY = minY;
	this.maxY = maxY;
	this.minZ = minZ;
	this.maxZ = maxZ;
};

OutOfBoundsController.prototype.setEntity = function(entity) {
	this.entity = entity;
};

OutOfBoundsController.prototype.update = function() {
	if (!this.entity.isDisposed() && 
			this.isOutOfBounds(this.entity, 
					this.minX, this.maxX, 
					this.minY, this.maxY, 
					this.minZ, this.maxZ))
	{
		world.remove(this.entity);
	}
};

OutOfBoundsController.prototype.isOutOfBounds = function(entity, minX, maxX, minY, maxY, minZ, maxZ) {
	return (this.entity.mesh.position.x < this.minX ||
			this.entity.mesh.position.x > this.maxX ||
			this.entity.mesh.position.y < this.minY ||
			this.entity.mesh.position.y > this.maxY ||
			this.entity.mesh.position.z < this.minZ ||
			this.entity.mesh.position.z > this.maxZ);
};
