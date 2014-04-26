/**
 * TestEnemy.js
 * @author Christopher D. Canfield
 */

function TestEnemy() {
	this.entity = null;
};

TestEnemy.prototype.setEntity = function(entity) {
	this.entity = entity;
};

TestEnemy.prototype.update = function() {
	this.entity.move(0.1, 0, 0);
};
