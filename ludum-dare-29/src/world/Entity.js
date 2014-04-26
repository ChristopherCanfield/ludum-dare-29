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
	this.mesh.position.x += x;
	this.mesh.position.y += y;
	this.mesh.position.z += z;

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

Entity.prototype.setPosition = function(x, y, z) {
	this.mesh.position.x = x;
	this.mesh.position.y = y;
	this.mesh.position.z = z;
	
	this.mesh.__dirtyPosition = true;
};

Entity.prototype.setRotation = function(x, y, z) {
	this.mesh.rotation.x = x;
	this.mesh.rotation.y = y;
	this.mesh.rotation.z = z;
};

Entity.prototype.applyImpulse = function(force, offset) {
	this.mesh.applyImpulse(force, offset);
};

Entity.prototype.applyCentralImpulse = function(force) {
	this.mesh.applyCentralImpulse;
};

Entity.prototype.applyForce = function(force, offset) {
	this.mesh.applyForce(force, offset);
};

Entity.prototype.applyCentralForce = function(force) {
	this.mesh.applyCentralForce(force);
};
