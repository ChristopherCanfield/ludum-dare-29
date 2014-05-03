/**
 * Entity.js
 * @author Christopher D. Canfield
 */

function Entity(mesh) {
	this.mesh = mesh;
	this.disposed = false;
	this.controllers = [];
	this.components = {};
};

Entity.prototype.update = function() {
	var length = this.controllers.length;
	for (var i = 0; i < length; ++i)
	{
		this.controllers[i].update();
	}
};

Entity.prototype.addController = function(controller) {
	controller.setEntity(this);
	this.controllers.push(controller);
};

Entity.prototype.getController = function(controllerClass) {
	for (var i = 0; i < this.controllers.length; ++i)
	{
		if (this.controllers[i].getClass() === controllerClass)
		{
			return this.controllers[i];
		}
	}
};

Entity.prototype.addComponent = function(component) {
	this.components[component.getClass()] = component;
};

Entity.prototype.getComponent = function(componentClass) {
	return this.components[componentClass];
};

Entity.prototype.dispose = function() {
	this.disposed = true;
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
	this.mesh.applyCentralImpulse(force);
};

Entity.prototype.applyForce = function(force, offset) {
	this.mesh.applyForce(force, offset);
};

Entity.prototype.applyCentralForce = function(force) {
	this.mesh.applyCentralForce(force);
};

Entity.prototype.accelerate = function(force) {
	var velocity = mesh.getLinearVelocity();
	mesh.setLinearVelocity(new THREE.Vector3(velocity.x + force.x, 
		velocity.y + force.y,
		velocity.z + force.z));
};
