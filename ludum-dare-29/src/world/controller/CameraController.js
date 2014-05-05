/**
 * CameraController.js
 * @author Christopher D. Canfield
 */

/**
 * Moves the camera according to the location of an entity. 
 * @param {THREE.Camera} camera the camera to move.
 */
function CameraController(camera) {
	this.camera = camera;
	this.entity = null;
};

/**
 * Sets the Controller's entity. This is automatically called when the controller
 * is added to an entity. 
 */
CameraController.prototype.setEntity = function(entity) {
	this.entity = entity;
	var cameraPosition = this.camera.position;
	this.camera.position.set(entity.mesh.position.x, cameraPosition.y, cameraPosition.z);
};

CameraController.CLASS = "CameraController";

CameraController.prototype.getClass = function() {
	return CameraController.CLASS;
};

CameraController.prototype.update = function() {
	var cameraPosition = this.camera.position;
	this.camera.position.set(this.entity.mesh.position.x, cameraPosition.y, cameraPosition.z);
};