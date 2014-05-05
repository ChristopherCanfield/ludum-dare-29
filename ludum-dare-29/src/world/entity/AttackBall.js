/**
 * AttackBall.js
 * @author Christopher D. Canfield
 */

/**
 * A projectile fired by the Attack Ball weapon. 
 */
function AttackBall() {};

/**
 * Creates an Attack Ball projectile. 
 * @param {World} world reference to the world.
 * @param {THREE.Vector3} position the attack ball's spawn position.
 * @param {THREE.Vector3} velocity the attack ball's initial velocity.
 * @param {float} damage the amount of damage the attack ball deals.
 */
AttackBall.create = function(world, position, velocity, damage) {
	var geometry = new THREE.SphereGeometry(2, 32, 32);
	var material = new THREE.MeshPhongMaterial({color: 0xFF6A00});
	var entity = new Entity(new Physijs.SphereMesh(geometry, 
			Physijs.createMaterial(material, 0.4, 0.6), 0));
	
	entity.addComponent(new AttackValue(damage));
	entity.addController(new ProjectileController(world, velocity.x, velocity.y, velocity.z));
	
	entity.mesh.position.set(position.x, position.y, position.z);
	entity.__dirtyPosition = true;
	
	world.add(entity);
	
	return entity;
};