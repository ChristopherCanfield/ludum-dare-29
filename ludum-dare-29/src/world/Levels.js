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
	scene.add(light2);
	
	var light = new THREE.AmbientLight(0x606060);
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
	
	// Add multiple boxes.
	var i = 0;
	for (i = 0; i < 5; ++i)
	{
		var box = new Physijs.BoxMesh(
			new THREE.BoxGeometry(10, 10, 10),
			Physijs.createMaterial(
				new THREE.MeshPhongMaterial({ 
					color: 0x0026C2 }),
				0.4, // friction
				0.5	// restitution
			),
			2 // weight
		);
		
		box.position.set(i * 20, 5, 0);
		box.__dirtyPosition = true;
		scene.add(box);
	}
	
	// Add multiple spheres.
	var i = 0;
	for (i = 0; i < 4; ++i)
	{
		var box = new Physijs.SphereMesh(
			new THREE.SphereGeometry(2.5, 16, 16),
			Physijs.createMaterial(
				new THREE.MeshPhongMaterial({ 
					color: 0x7F0000 }),
				0.4, // friction
				0.5	// restitution
			),
			5 // weight
		);
		
		box.position.set(i * 40, 13, 0);
		box.__dirtyPosition = true;
		scene.add(box);
	}
	
	var geometry = new THREE.SphereGeometry(75, 32, 32);
	var material = new THREE.MeshPhongMaterial({color: 0xffffff}); 
	var sphere = new THREE.Mesh(geometry, material);
	sphere.position.set(0, -10, -120);
	scene.add(sphere);
	
	var geometry = new THREE.SphereGeometry(50, 32, 32);
	var material = new THREE.MeshPhongMaterial({color: 0xffffff}); 
	var sphere = new THREE.Mesh(geometry, material);
	sphere.position.set(100, -10, -65);
	scene.add(sphere);
	
	var geometry = new THREE.SphereGeometry(65, 32, 32);
	var material = new THREE.MeshPhongMaterial({color: 0xffffff}); 
	var sphere = new THREE.Mesh(geometry, material);
	sphere.position.set(-75, -20, -75);
	scene.add(sphere);
	
	var geometry = new THREE.BoxGeometry(10, 200, 5);
	var material = new THREE.MeshPhongMaterial({color: 0x705D00}); 
	var pillar = new THREE.Mesh(geometry, material);
	pillar.position.set(50, -20, 20);
	scene.add(pillar);
	
	// Add entities.
	Entities.createTestEnemy(world, new THREE.Vector3(0, 20, 0));
    Entities.createControllableTestEntity(world, new THREE.Vector3(-20, 5, 0), camera);
};
