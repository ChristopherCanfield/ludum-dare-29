/**
 * ProjectileController.js
 * @author Christopher D. Canfield
 */

function ProjectileController(velocityX, velocityY, velocityZ) {
	this.entity = null;
	this.velocity = new THREE.Vector3(velocityX, velocityY, velocityZ);
};

ProjectileController.prototype.setEntity = function(entity) {
	this.entity = entity;
};

ProjectileController.prototype.update = function() {
	this.entity.move(velocity.x, velocity.y, velocity.z);
};
