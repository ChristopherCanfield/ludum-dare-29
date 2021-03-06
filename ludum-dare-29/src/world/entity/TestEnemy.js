/**
 * TestEnemy.js
 * @author Christopher D. Canfield
 */


/**
 * A simple test enemy, used for testing. 
 */
function TestEnemy() {}

/**
 * Simple test entity that is controlled by a movement controller.
 * @param {World} world reference to the game world.
 * @param {THREE.Vector3} position the starting position.
 */
TestEnemy.create = function(world, position) {
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