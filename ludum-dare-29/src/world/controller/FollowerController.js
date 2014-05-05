/**
 * FollowerController.js
 * @author Christopher D. Canfield
 */

function FollowerController(followedEntity) {
	this.entity = null;
	this.followedEntity = followedEntity;
};

FollowerController.prototype.setEntity = function(entity) {
	this.entity = entity;
};

FollowerController.CLASS = "FollowerController";

FollowerController.prototype.getClass = function() {
	return FollowerController.CLASS;
};

FollowerController.prototype.update = function() {
	var followedEntSpeed = this.followedEntity.mesh.getLinearVelocity();
	
	this.entity.setLinearVelocity = followedEntSpeed;
	// this.entity.position.set(this.entity.mesh.position.x, cameraPosition.y, cameraPosition.z);
};