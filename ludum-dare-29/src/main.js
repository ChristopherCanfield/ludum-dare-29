/**
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

    scene = new Physijs.Scene({ fixedTimeStep: 1/60});
    scene.setGravity(new THREE.Vector3(0, -9.8, 0));

    camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.set( 60, 50, 60 );
    camera.lookAt( scene.position );
    scene.add( camera );

    // Box
    box = new Physijs.BoxMesh(
        new THREE.BoxGeometry( 5, 5, 5 ),
        Physijs.createMaterial(
	        new THREE.MeshPhongMaterial({ color: 0x888888 }),
    	    0.8, // friction
    	    0.4 // restitution
    	),
    	10	// weight
    );
    box.position.set(0, 20, 0);
    box.__dirtyPosition = true;
    box.rotation.x += 0.5;
    box.__dirtyRotation = true;
    scene.add(box);
    
	var light = new THREE.PointLight(0xffffff, 1, 100);
	light.position.set(30, 30, 50);
	scene.add(light);
	
	var ground = new Physijs.BoxMesh(
		new THREE.BoxGeometry(50, 1, 50),
		Physijs.createMaterial(
			new THREE.MeshPhongMaterial({ color: 0x0094ff}),
			0.9, // friction
			0.3	// restitution
		),
		0 // weight
	);
	ground.position.set(0, 0, 0);
	ground.__dirtyPosition = true;
	scene.add(ground);

	world = new World(scene);

    requestAnimationFrame( render );
};

render = function() {
	// simulate physics.
    scene.simulate();
    
    // render the scene.
    graphics.render(scene, camera);
     
     // box.rotation.x += .05;
     // box.__dirtyRotation = true;
     
    requestAnimationFrame(render);
};