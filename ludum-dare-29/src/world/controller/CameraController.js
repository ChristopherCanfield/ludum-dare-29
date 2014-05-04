/**
 * CameraController.js
 * @author Christopher D. Canfield
 */


function CameraController(camera) {
	this.camera = camera;
	this.entity = null;
};

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