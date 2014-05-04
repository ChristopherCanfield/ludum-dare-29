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
	
	this.respawnPosition = null;
};

OutOfBoundsController.prototype.setEntity = function(entity) {
	this.entity = entity;
};

OutOfBoundsController.CLASS = "OutOfBoundsController";

OutOfBoundsController.prototype.getClass = function() {
	return OutOfBoundsController.CLASS;
};

/**
 * Sets the respawn position. If this is not specified, the entity will be disposed when it goes out
 * of bounds.
 * @param {THREE.Vector3} respawnPosition
 */
OutOfBoundsController.prototype.setRespawn = function(respawnPosition) {
	this.respawnPosition = respawnPosition;
};

OutOfBoundsController.prototype.update = function() {
	if (!this.entity.isDisposed() && 
			this.isOutOfBounds(this.entity, 
					this.minX, this.maxX, 
					this.minY, this.maxY, 
					this.minZ, this.maxZ))
	{
		if (this.respawnPosition != null)
		{
			var c = this.entity.getController(PlayerCharacterController.CLASS);
			if (c != null) 
			{
				c.moveTowardScreen = false;
			}
			this.entity.setPosition(this.respawnPosition.x, this.respawnPosition.y, this.respawnPosition.z);
		}
		else
		{
			world.remove(this.entity);
		}
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
