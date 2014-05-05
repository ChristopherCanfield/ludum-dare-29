/**
 * Entity.js
 * @author Christopher D. Canfield
 */

/**
 * The base game simulation type. 
 * @param {Physijs.Mesh} mesh the physics mesh.
 */
function Entity(mesh) {
	this.mesh = mesh;
	this.disposed = false;
	
	// Type: Controller.
	this.controllers = [];
	
	// Key: Component class string; Value: Component.
	this.components = {};
};

/**
 * Called once per tick. 
 */
Entity.prototype.update = function() {
	var length = this.controllers.length;
	for (var i = 0; i < length; ++i)
	{
		this.controllers[i].update();
	}
};

/**
 * Adds a controller to this entity.
 * @param {Controller} controller the controller to add.
 */
Entity.prototype.addController = function(controller) {
	controller.setEntity(this);
	this.controllers.push(controller);
};

/**
 * Gets the specified controller type from the entity. 
 * @param {String} controllerClass the string value of the controller class type, 
 * or null if not found.
 */
Entity.prototype.getController = function(controllerClass) {
	for (var i = 0; i < this.controllers.length; ++i)
	{
		if (this.controllers[i].getClass() === controllerClass)
		{
			return this.controllers[i];
		}
	}
};

/**
 *  Adds a component to the entity.
 * @param {Component} component the component to add.
 */
Entity.prototype.addComponent = function(component) {
	this.components[component.getClass()] = component;
};

/**
 *  Gets the specified component type from the entity. 
 * @param {String} componentClass the string value of the controller class type,
 * or null if not found.
 */
Entity.prototype.getComponent = function(componentClass) {
	return this.components[componentClass];
};

/**
 * Moves the entity, and sets its __dirtyPosition flag to true.
 */
Entity.prototype.move = function(x, y, z) {
	this.mesh.position.x += x;
	this.mesh.position.y += y;
	this.mesh.position.z += z;

	this.mesh.__dirtyPosition = true;
};

/**
 * Rotates the entity, and sets its __dirtyRotation flag to true. 
 */
Entity.prototype.rotate = function(x, y, z) {
	this.mesh.rotation.x += x;
	this.mesh.rotation.y += y;
	this.mesh.rotation.z += z;

	this.mesh.__dirtyRotation = true;
};

/**
 * Sets the entity's position, and sets its __dirtyPosition flag to true. 
 */
Entity.prototype.setPosition = function(x, y, z) {
	this.mesh.position.x = x;
	this.mesh.position.y = y;
	this.mesh.position.z = z;
	
	this.mesh.__dirtyPosition = true;
};

/**
 * Sets the entity's rotation, and sets its __dirtyRotation flag to true. 
 */
Entity.prototype.setRotation = function(x, y, z) {
	this.mesh.rotation.x = x;
	this.mesh.rotation.y = y;
	this.mesh.rotation.z = z;
	
	this.mesh.__dirtyRotation = true;
};

/**
 * Applies an impulse to the entity. 
 */
Entity.prototype.applyImpulse = function(force, offset) {
	this.mesh.applyImpulse(force, offset);
};

/**
 * Applies a central impulse to the entity. 
 */
Entity.prototype.applyCentralImpulse = function(force) {
	this.mesh.applyCentralImpulse(force);
};

/**
 * Applies a force to the entity. 
 */
Entity.prototype.applyForce = function(force, offset) {
	this.mesh.applyForce(force, offset);
};

/**
 * Applies a central force to the entity. 
 */
Entity.prototype.applyCentralForce = function(force) {
	this.mesh.applyCentralForce(force);
};

Entity.prototype.accelerate = function(force) {
	var velocity = mesh.getLinearVelocity();
	mesh.setLinearVelocity(new THREE.Vector3(velocity.x + force.x, 
		velocity.y + force.y,
		velocity.z + force.z));
};

/**
 * Disposes the entity, which flags the entity for removal from the world. 
 */
Entity.prototype.dispose = function() {
	this.disposed = true;
};

/**
 * Returns true if the entity is disposed, or false otherwise. 
 */
Entity.prototype.isDisposed = function() {
	return this.disposed;
};