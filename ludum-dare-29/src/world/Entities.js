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
 */
Entities.createControllableTestEntity = function(world, position) {
	var entity = new Entity(new Physijs.CapsuleMesh(
        new THREE.BoxGeometry(5, 5, 5),
        Physijs.createMaterial(
	        new THREE.MeshPhongMaterial({ color: 0x888888 }),
    	    0.1, // friction
    	    0.05 // restitution
    	),
    	10	// weight
    ));
    entity.addController(new PlayerCharacterController());
    entity.setPosition(position.x, position.y, position.z);
    
    world.add(entity);
    
    return entity;
};