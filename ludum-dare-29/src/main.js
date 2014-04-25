/**
 * @author Christopher D. Canfield
 * 2014-04-25
 */

 var initialize, render, renderer, scene, camera, box;

initialize = function() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById( 'viewport' ).appendChild( renderer.domElement );

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
    	1	// weight
    );
    box.position.set(0, 20, 0);
    box.__dirtyPosition = true;
    scene.add(box);

	var light = new THREE.PointLight(0xffffff, 1, 100);
	light.position.set(30, 30, 50);
	scene.add(light);
	
	var ground = new Physijs.BoxMesh(
		new THREE.BoxGeometry(50, 1, 50),
		new THREE.MeshPhongMaterial({ color: 0x0094ff})
	);
	ground.position.set(0, 0, 0);
	ground.__dirtyPosition = true;
	scene.add(ground);

    requestAnimationFrame( render );
};

render = function() {
	// simulate physics.
    scene.simulate();
    
    // render the scene.
    renderer.render( scene, camera);
     
     box.rotation.x += .05;
     box.__dirtyRotation = true;
     
    requestAnimationFrame( render );
};