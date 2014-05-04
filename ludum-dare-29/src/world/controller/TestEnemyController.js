/**
 * TestEnemyController.js
 * @author Christopher D. Canfield
 */

function TestEnemyController() {
	this.entity = null;
};

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
