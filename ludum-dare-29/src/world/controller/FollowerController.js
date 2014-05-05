/**
 * FollowerController.js
 * @author Christopher D. Canfield
 */

function FollowerController(followedEntity) {
	this.entity = null;
	this.followedEntity = followedEntity;
	
	// Commands implement the following interface:
	// Command
	// + Command(followedEntity)
	// + execute(entity)
	// + ticksUntilExecution
	this.commands = [];
};

FollowerController.prototype.setEntity = function(entity) {
	this.entity = entity;
	this.followedEntity.observers.push(entity);
};

FollowerController.CLASS = "FollowerController";

FollowerController.prototype.getClass = function() {
	return FollowerController.CLASS;
};

FollowerController.prototype.update = function() {
	if (this.commands.length > 0)
	{
		for (var i = 0; i < this.commands.length; ++i)
		{
			if (this.commands[i].ticksUntilExecution === 0)
			{
				this.commands[i].execute(this.entity);
			}
			else
			{
				this.commands[i].ticksUntilExecution--;
			}
		}
		
		var commandCount = this.commands.length;
		for (i = commandCount - 1; i > 0; --i)
		{
			if (this.commands[i].ticksUntilExecution === 0)
			{
				this.commands.splice(i, 1);
			}
		}
	}
};