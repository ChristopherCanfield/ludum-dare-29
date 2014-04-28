/**
 * main.js
 * @author Christopher D. Canfield
 * 2014-04-25
 */

Physijs.scripts.worker = "libs/physijs/physijs_worker.js";
Physijs.scripts.ammo = "ammo.js";

 var initialize, 
 	render, 
 	graphics, 
 	scene, 
 	camera, 
 	box,
 	world;

initialize = function() {
    graphics = new THREE.WebGLRenderer({ antialias: true });
    graphics.setSize( window.innerWidth, window.innerHeight );
    document.getElementById("viewport").appendChild(graphics.domElement);

    scene = new Physijs.Scene({ fixedTimeStep: 1/120 });
    scene.setGravity(new THREE.Vector3(0, -9.8, 0));
    
    TextureManager.gl = graphics.context;

    camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.set(10, 30, 250);
    // camera.lookAt(scene.position);
    scene.add(camera);

	world = new World(scene);
    
    box = Entities.createTestEnemy(world, new THREE.Vector3(0, 20, 0));
    
    Entities.createControllableTestEntity(world, new THREE.Vector3(-20, 5, 0), camera);
    
	var light = new THREE.PointLight(0xffffff, 1, 100);
	light.position.set(60, 30, 10);
	light.rotation.set(0, 30, 0);
	scene.add(light);
	
	var light2 = new THREE.PointLight(0xffffff, 1, 100);
	light2.position.set(-30, 30, 10);
	light2.rotation.set(0, 30, 0);
	scene.add(light2);
	
	var rockTexture = TextureManager.getTexture(TexturePath.Rock).clone();
	rockTexture.repeat.set(10, 1);
	rockTexture.needsUpdate = true;
	var ground = new Physijs.BoxMesh(
		new THREE.BoxGeometry(100, 1, 50),
		Physijs.createMaterial(
			new THREE.MeshLambertMaterial({ map: rockTexture }),
			0.2, // friction
			0.2	// restitution
		),
		0 // weight
	);
	
	ground.material.wrapS = THREE.RepeatWrapping;
	ground.material.wrapT = THREE.RepeatWrapping;
	
	ground.position.set(0, 0, 0);
	ground.__dirtyPosition = true;
	scene.add(ground);

    requestAnimationFrame( render );
};

render = function() {
	// update the controllers.
    world.update();
	
	// simulate physics.
    scene.simulate();
    
    // render the scene.
    graphics.render(scene, camera);
     
    requestAnimationFrame(render);
};