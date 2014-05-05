/**
 * TestEnemyController.js
 * @author Christopher D. Canfield
 */

/**
 * A simple controller that moves an entity. It is used for testing. 
 */
function TestEnemyController() {
	this.entity = null;
};

/**
 * Sets the Controller's entity. This is automatically called when the controller
 * is added to an entity. 
 */
TestEnemyController.prototype.setEntity = function(entity) {
	this.entity = entity;
};

TestEnemyController.CLASS = "TestEnemyController";

TestEnemyController.prototype.getClass = function() {
	return TestEnemyController.CLASS;
};

TestEnemyController.prototype.update = function() {
	this.entity.move(0.1, 0, 0);
};
