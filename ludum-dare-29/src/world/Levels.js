/**
 * Levels.js
 * @author Christopher D. Canfield
 */


function Levels() {}


Levels.createLevelOne = function(scene, world, camera) {
	Levels.one.addLights(scene);
	
	Levels.one.addGround(scene);
	Levels.one.addCeiling(scene);
	Levels.one.addWestWall(scene);
	
	Levels.one.addPhysicsObjects(scene);
	
	Levels.one.addBackground(scene);
	
	// Pillar.
	var geometry = new THREE.BoxGeometry(10, 200, 5);
	var material = new THREE.MeshPhongMaterial({color: 0x705D00}); 
	var pillar = new THREE.Mesh(geometry, material);
	pillar.position.set(50, -20, 20);
	scene.add(pillar);
	
	// Add entities.
	Levels.one.addEnemies(scene, world);
    PlayerCharacter.create(world, new THREE.Vector3(-20, 5, 0), camera);
};

Levels.one = {};

Levels.one.addLights = function(scene) {
	var light = new THREE.PointLight(0xffffff, 0.75, 125);
	light.position.set(20, 40, -10);
	// light.rotation.set(0, 30, 0);
	scene.add(light);
	var pointLightHelper = new THREE.PointLightHelper(light, 1); 
	scene.add(pointLightHelper);
	
	var light2 = new THREE.PointLight(0xffffff, 0.75, 125);
	light2.position.set(-30, 40, 20);
	scene.add(light2);
	var pointLightHelper = new THREE.PointLightHelper(light2, 1); 
	scene.add(pointLightHelper);
	
	var light3 = new THREE.PointLight(0xFFF67F, 1, 125);
	light3.position.set(200, 40, 20);
	scene.add(light3);
	var pointLightHelper = new THREE.PointLightHelper(light3, 1); 
	scene.add(pointLightHelper);
	
	var light4 = new THREE.PointLight(0xFFF67F, 1, 125);
	light4.position.set(325, 40, 20);
	scene.add(light4);
	var pointLightHelper = new THREE.PointLightHelper(light4, 1); 
	scene.add(pointLightHelper);
	
	//75
	// var light5 = new THREE.SpotLight(0xffffff, 1, 100);
	// light5.position.set(70, 40, 30);
	// light5.castShadow = true;
	// light5.rotation.x += 1;
	// light5.shadowMapWidth = 1024; 
	// light5.shadowMapHeight = 1024; 
	// light5.shadowCameraNear = 500; 
	// light5.shadowCameraFar = 4000; 
	// light5.shadowCameraFov = 30;
	// scene.add(light5);
	
	var light5 = new THREE.PointLight(0xffffff, 1, 50);
	light5.position.set(75, 15, 0);
	scene.add(light5);
	var pointLightHelper = new THREE.PointLightHelper(light5, 1);
	scene.add(pointLightHelper);
	
	// var color = new THREE.Color(0xffffff).multiplyScalar(0.1);
	// scene.add(new THREE.AmbientLight(color.getHex()));
};

Levels.one.addGround = function(scene) {
	// Add the ground.
	var rockTexture = TextureManager.getTexture(TexturePath.Rock).clone();
	rockTexture.repeat.set(10, 2);
	rockTexture.needsUpdate = true;
	var ground = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1420, 100, 50),
		Physijs.createMaterial(
			new THREE.MeshPhongMaterial({ 
				color: 0xD67FFF}),
			0.4, // friction
			0.2	// restitution
		),
		0 // weight
	);
	
	// ground.material.wrapS = THREE.RepeatWrapping;
	// ground.material.wrapT = THREE.RepeatWrapping;
	
	ground.position.set(500, -50, 0);
	ground.__dirtyPosition = true;
	scene.add(ground);
};

Levels.one.addCeiling = function(scene) {
	var ceiling = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1800, 100, 50),
		Physijs.createMaterial(
			new THREE.MeshPhongMaterial({ 
				color: 0x877A7A }),
			0.4, // friction
			0.5	// restitution
		),
		0 // weight
	);
	
	ceiling.position.set(500, 125, 0);
	ceiling.__dirtyPosition = true;
	scene.add(ceiling);
};

Levels.one.addWestWall = function(scene) {
	var wall = new Physijs.BoxMesh(
		new THREE.BoxGeometry(20, 200, 50),
		Physijs.createMaterial(
			new THREE.MeshPhongMaterial({ 
				color: 0x877A7A }),
			0.4, // friction
			0.5	// restitution
		),
		0 // weight
	);
	
	wall.position.set(-200, 100, 0);
	wall.__dirtyPosition = true;
	scene.add(wall);
	
	var light = new THREE.PointLight(0xEF8C5D, 1, 200);
	light.position.set(-150, 50, 0);
	scene.add(light);
};

Levels.one.addPhysicsObjects = function(scene) {
	// Add multiple boxes.
	
	// Row 1
	SimpleBox.create(world, new THREE.Vector3(20 + 40, 2.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 46, 2.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 52, 2.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 58, 2.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 63, 2.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 70, 2.6, 0), 20);
	
	// Row 2
	SimpleBox.create(world, new THREE.Vector3(20 + 43, 7.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 49, 7.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 55, 7.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 61, 7.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 67, 7.6, 0), 20);
	
	// Row 3
	SimpleBox.create(world, new THREE.Vector3(20 + 46, 12.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 52, 12.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 58, 12.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 64, 12.6, 0), 20);
	
	// Row 4
	SimpleBox.create(world, new THREE.Vector3(20 + 49, 17.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 55, 17.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 61, 17.6, 0), 20);
	
	// Row 5
	SimpleBox.create(world, new THREE.Vector3(20 + 52, 22.6, 0), 20);
	SimpleBox.create(world, new THREE.Vector3(20 + 58, 22.6, 0), 20);
	
	// Row 6
	SimpleBox.create(world, new THREE.Vector3(20 + 55, 27.6, 0), 20);
	
	// Add multiple spheres.
	// var i = 0;
	// for (i = 0; i < 4; ++i)
	// {
		// var sphere = new Physijs.SphereMesh(
			// new THREE.SphereGeometry(2.5, 16, 16),
			// Physijs.createMaterial(
				// new THREE.MeshPhongMaterial({ 
					// color: 0x7F0000}),
				// 0.4, // friction
				// 0.5	// restitution
			// ),
			// 5 // weight
		// );
// 		
		// sphere.position.set(i * 40, 13, 0);
		// sphere.__dirtyPosition = true;
		// scene.add(sphere);
	// }
};
	
Levels.one.addEnemies = function(scene, world) {
	TestEnemy.create(world, new THREE.Vector3(0, 20, 0));
};

Levels.one.addBackground = function(scene) {
	var geometry = new THREE.SphereGeometry(75, 32, 32);
	var material = new THREE.MeshPhongMaterial({color: 0xFFE97F}); 
	var sphere = new Physijs.SphereMesh(geometry, 
		Physijs.createMaterial(material, 0.4, 0.6), 0);
	sphere.position.set(0, -10, -120);
	sphere.__dirtyPosition = true;
	scene.add(sphere);
	
	var geometry = new THREE.SphereGeometry(50, 32, 32);
	var material = new THREE.MeshPhongMaterial({color: 0xC40000});
	var sphere = new Physijs.SphereMesh(geometry, 
		Physijs.createMaterial(material, 0.4, 0.6), 0);
	sphere.position.set(100, -10, -65);
	sphere.__dirtyPosition = true;
	scene.add(sphere);
	
	var geometry = new THREE.SphereGeometry(65, 32, 32);
	var material = new THREE.MeshPhongMaterial({color: 0x7FFF8E}); 
	var sphere = new THREE.Mesh(geometry, material);
	sphere.position.set(-75, -20, -75);
	scene.add(sphere);
};
