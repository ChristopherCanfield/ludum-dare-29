/**
 * MoveCommand.js
 * @author Christopher D. Canfield
 */


function MoveCommand(linearVelocity, force) {
	this.linearVelocity = linearVelocity;
	this.force = force;
	this.ticksUntilExecution = MoveCommand.TICKS_UNTIL_EXECUTION;
};

MoveCommand.TICKS_UNTIL_EXECUTION;

MoveCommand.prototype.execute = function(entity) {
	entity.mesh.setLinearVelocity({x: this.linearVelocity.x,
			y: this.linearVelocity.y,
			z: this.linearVelocity.z});
	entity.mesh.applyCentralForce(this.force);
	entity.mesh.setAngularFactor({x: 0, y: 0, z: 0});
	this.entity.rotation = new THREE.Vector3(0, 0, 0);
};