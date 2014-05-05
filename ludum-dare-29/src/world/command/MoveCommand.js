/**
 * MoveCommand.js
 * @author Christopher D. Canfield
 */


function MoveCommand(linearVelocity) {
	this.linearVelocity = linearVelocity;
	this.ticksUntilExecution = MoveCommand.TICKS_UNTIL_EXECUTION;
	
	this.ticksUntilExecution = 10;
};

MoveCommand.TICKS_UNTIL_EXECUTION = 10;

MoveCommand.TIME_BETWEEN_COMMANDS = 10;
MoveCommand.nextCommandTime = MoveCommand.TIME_BETWEEN_COMMANDS;

MoveCommand.prototype.execute = function(entity) {
	entity.mesh.setLinearVelocity({x: this.linearVelocity.x,
			y: this.linearVelocity.y,
			z: this.linearVelocity.z});
	entity.mesh.setAngularFactor({x: 0, y: 0, z: 0});
	entity.rotate(0, 0, 0);
};