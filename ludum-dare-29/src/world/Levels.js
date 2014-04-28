/**
 * Levels.js
 * @author Christopher D. Canfield
 */


function Levels() {}


Levels.createLevelOne = function(scene, world) {
	var light = new THREE.PointLight(0xffffff, 1, 100);
	light.position.set(60, 30, -10);
	// light.rotation.set(0, 30, 0);
	scene.add(light);
	
	var light2 = new THREE.PointLight(0xffffff, 1, 100);
	light2.position.set(-30, 30, 20);
	// light2.rotation.set(0, 0.5, 0);
	scene.add(light2);
	
	var light = new THREE.AmbientLight(0x404040); 
	scene.add(light);
	
	// Add the ground.
	var rockTexture = TextureManager.getTexture(TexturePath.Rock).clone();
	rockTexture.repeat.set(10, 2);
	rockTexture.needsUpdate = true;
	var ground = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1000, 100, 50),
		Physijs.createMaterial(
			new THREE.MeshPhongMaterial({ 
				color: 0x877A7A}),
			0.4, // friction
			0.2	// restitution
		),
		0 // weight
	);
	
	// ground.material.wrapS = THREE.RepeatWrapping;
	// ground.material.wrapT = THREE.RepeatWrapping;
	
	ground.position.set(0, -50, 0);
	ground.__dirtyPosition = true;
	scene.add(ground);
	
	// Add the ceiling.
	var ceiling = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1000, 100, 50),
		Physijs.createMaterial(
			new THREE.MeshPhongMaterial({ 
				color: 0x877A7A }),
			0.4, // friction
			0.5	// restitution
		),
		0 // weight
	);
	
	ceiling.position.set(0, 125, 0);
	ceiling.__dirtyPosition = true;
	scene.add(ceiling);
	
	// Add entities.
	Entities.createTestEnemy(world, new THREE.Vector3(0, 20, 0));
    Entities.createControllableTestEntity(world, new THREE.Vector3(-20, 5, 0), camera);
};
