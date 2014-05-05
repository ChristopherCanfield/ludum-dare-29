/**
 * ProjectileController.js
 * @author Christopher D. Canfield
 */

function ProjectileController(world, velocityX, velocityY, velocityZ) {
	this.world = world;
	this.entity = null;
	this.velocity = new THREE.Vector3(velocityX, velocityY, velocityZ);
	this.distance = 0;
	this.MAX_DISTANCE = 100;
};

/**
 * Sets the Controller's entity. This is automatically called when the controller
 * is added to an entity. 
 */
ProjectileController.prototype.setEntity = function(entity) {
	this.entity = entity;
};

ProjectileController.CLASS = "ProjectileController";

ProjectileController.prototype.getClass = function() {
	return ProjectileController.CLASS;
};

ProjectileController.prototype.update = function() {
	if (!this.entity.isDisposed())
	{
		this.entity.move(this.velocity.x, this.velocity.y, this.velocity.z);
		
		this.distance += (Math.abs(this.velocity.x) +
				Math.abs(this.velocity.y) +
				Math.abs(this.velocity.z));
				
		if (this.distance > this.MAX_DISTANCE)
		{
			world.remove(this.entity);
		}
	}
};
