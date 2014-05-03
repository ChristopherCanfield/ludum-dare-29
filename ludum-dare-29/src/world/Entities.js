/**
 * Entities.js
 * @author Christopher D. Canfield
 */

/**
 * Contains static methods for creating entities.
 */
function Entities() {}

/**
 * Simple test entity that is controlled by a movement controller.
 * @param {World} world
 * @param {THREE.Vector3} position the starting position.
 */
Entities.createTestEnemy = function(world, position) {
	var entity = new Entity(new Physijs.BoxMesh(
        new THREE.BoxGeometry(5, 5, 5),
        Physijs.createMaterial(
	        new THREE.MeshPhongMaterial({ color: 0x888888 }),
    	    0.8, // friction
    	    0.4 // restitution
    	),
    	10	// weight
    ));
    entity.addController(new TestEnemyController());
    entity.setPosition(position.x, position.y, position.z);
    
    world.add(entity);
    
    return entity;
};

/**
 * Simple controllable test entity.
 * @param {Object} world
 * @param {THREE.Vector3} position the starting position.
 * @param {Camera} camera
 */
Entities.createControllableTestEntity = function(world, position, camera) {
	var texture = TextureManager.getTexture(TexturePath.Exoskeleton);
	
	var textureAtlas = [
			// Lower left corner
			new THREE.Vector2(0, 0.207), 
			// Lower right corner
			new THREE.Vector2(0, 0.207),
			// Upper right corner 
			new THREE.Vector2(0, 1),
			// Upper left corner 
			new THREE.Vector2(0, 1)];
	
	var geometry = new THREE.BoxGeometry(7, 10, 0.001);
    // geometry.faceVertexUvs[0] = [];
    
    // geometry.faceVertexUvs[0][0] = [textureAtlas[0], textureAtlas[1], textureAtlas[3]];
	// geometry.faceVertexUvs[0][1] = [textureAtlas[1], textureAtlas[2], textureAtlas[3]];
	
    // geometry.faceVertexUvs[0][2] = [textureAtlas[0], textureAtlas[1], textureAtlas[3]];
	// geometry.faceVertexUvs[0][3] = [textureAtlas[1], textureAtlas[2], textureAtlas[3]];
// 	
	// geometry.faceVertexUvs[0][4] = [textureAtlas[0], textureAtlas[1], textureAtlas[3]];
	// geometry.faceVertexUvs[0][5] = [textureAtlas[1], textureAtlas[2], textureAtlas[3]];
// 	
	// geometry.faceVertexUvs[0][6] = [textureAtlas[0], textureAtlas[1], textureAtlas[3]];
	// geometry.faceVertexUvs[0][7] = [textureAtlas[1], textureAtlas[2], textureAtlas[3]];
// 	
	// geometry.faceVertexUvs[0][8] = [textureAtlas[0], textureAtlas[1], textureAtlas[3]];
	// geometry.faceVertexUvs[0][9] = [textureAtlas[1], textureAtlas[2], textureAtlas[3]];
// 	
	// geometry.faceVertexUvs[0][10] = [textureAtlas[0], textureAtlas[1], textureAtlas[3]];
	// geometry.faceVertexUvs[0][11] = [textureAtlas[1], textureAtlas[2], textureAtlas[3]];
	
	geometry.uvsNeedUpdate = true;
	
	var entity = new Entity(new Physijs.CapsuleMesh(
        geometry,
        Physijs.createMaterial(
	        new THREE.MeshBasicMaterial({ 
	        	color: 0x888888,
	        	opacity: 0.1,
	        	map: texture,
	        	transparent: true }),
    	    0.1, // friction
    	    0.05 // restitution
    	),
    	5	// weight
    ));
    
    // mesh = new THREE.Mesh(geometry,  material);
	
    entity.setPosition(position.x, position.y, position.z);
    
    entity.addController(new PlayerCharacterController());
    entity.addController(new CameraController(camera));
    
    world.add(entity);
    var tween = new createjs.Tween(entity.mesh.material);
    tween.to({opacity: 1}, 3000);
    
    return entity;
};

Entities.createAttackBall = function(world, position) {
	var geometry = new THREE.SphereGeometry(50, 32, 32);
	var material = new THREE.MeshPhongMaterial({color: 0xffffff});
	var entity = new Physijs.SphereMesh(geometry, 
		Physijs.createMaterial(material, 0.4, 0.6), 0);
	entity.position.set(position.x, position.y, position.z);
	entity.__dirtyPosition = true;
	scene.add(entity);
	
	entity.addComponent(new Health(100));
	
	return entity;
};
