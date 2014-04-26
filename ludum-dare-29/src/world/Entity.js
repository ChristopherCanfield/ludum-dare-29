/**
 * Entity.js
 * @author Christopher D. Canfield
 */

function Entity(mesh) {
	this.mesh = mesh;
	this.disposed = false;
	this.controllers = [];
};

Entity.prototype.update = function() {
	var length = this.controllers.length;
	for (var i = 0; i < length; ++i)
	{
		this.controllers[i].update();
	}
};

Entity.prototype.dispose = function() {
	this.dispose = true;
};

Entity.prototype.isDisposed = function() {
	return this.disposed;
};

Entity.prototype.move = function(x, y, z) {
	this.mesh.translate.x += x;
	this.mesh.translate.y += y;
	this.mesh.translate.z += z;

	this.mesh.__dirtyPosition = true;
};

Entity.prototype.rotate = function(x, y, z) {
	this.mesh.rotation.x += x;
	this.mesh.rotation.y += y;
	this.mesh.rotation.z += z;

	this.mesh.__dirtyRotation = true;
};

Entity.prototype.addController = function(controller) {
	controller.setEntity(this);
	this.controllers.push(controller);
};
