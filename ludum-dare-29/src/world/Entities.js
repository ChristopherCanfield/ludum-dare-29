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
 * @param {Object} world
 */
Entities.createTestEnemy = function(world) {
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
    
    world.add(entity);
    
    return entity;
};

/**
 * Simple controllable test entity.
 * @param {Object} world
 */
Entities.createControllableTestEntity = function(world) {
	var entity = new Entity(new Physijs.CapsuleMesh(
        new THREE.BoxGeometry(5, 5, 5),
        Physijs.createMaterial(
	        new THREE.MeshPhongMaterial({ color: 0x888888 }),
    	    0.8, // friction
    	    0.4 // restitution
    	),
    	10	// weight
    ));
    entity.addController(new CharacterKeyboardController());
    
    world.add(entity);
    
    return entity;
};