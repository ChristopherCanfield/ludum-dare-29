/**
 * Follower.js
 * @author Christopher D. Canfield
 */

function Follower() {}

Follower.create = function(world, position, followedEntity) {
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
	var geometry = new THREE.BoxGeometry(4, 5.71, 0.001);
	
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
	
	entity.addComponent(new Health(30));
	entity.addController(new FollowerController(followedEntity));
	
	entity.mesh.position.set(position.x, position.y, position.z);
	entity.__dirtyPosition = true;
	
	world.add(entity);
	var tween = new createjs.Tween(entity.mesh.material);
    tween.to({opacity: 1}, 2500);
	
	return entity;
};
