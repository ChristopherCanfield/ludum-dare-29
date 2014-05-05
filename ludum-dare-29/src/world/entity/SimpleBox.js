/**
 * SimpleBox.js
 * @author Christopher D. Canfield
 */

/**
 * A simple physics box.
 */
function SimpleBox() {}

/**
 * Creates a simple physics box.
 * @param {World} world
 * @param {THREE.Vector3} position
 * @param {float} weight
 */
SimpleBox.create = function(world, position, weight) {
	var box = new Physijs.BoxMesh(
			new THREE.BoxGeometry(5, 5, 5),
			Physijs.createMaterial(
				new THREE.MeshPhongMaterial({ 
					color: 0x0026C2,
					specular: 0x0026C2,
					metal: 0.75 }),
				0.8, // friction
				0.1	// restitution
			),
			weight // weight
		);	
	var entity = new Entity(box);
	
	entity.setPosition(position.x, position.y, position.z);
    world.add(entity);
    
    return entity;
};
