/**
 * MoveCommand.js
 * @author Christopher D. Canfield
 */


function MoveCommand(movementFunction) {
	this.movementFunction = movementFunction;
	this.ticksUntilExecution = MoveCommand.TICKS_UNTIL_EXECUTION;
};

MoveCommand.TICKS_UNTIL_EXECUTION;

MoveCommand.prototype.execute = function(entity) {
	this.movementFunction(entity);
};