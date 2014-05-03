/**
 * ProjectileController.js
 * @author Christopher D. Canfield
 */

function ProjectileController() {
	this.entity = null;
};

ProjectileController.prototype.setEntity = function(entity) {
	this.entity = entity;
};

ProjectileController.prototype.update = function() {
	this.entity.move(0.5, 0, 0);
};
