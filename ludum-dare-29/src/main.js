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
 	world;

initialize = function() {
    graphics = new THREE.WebGLRenderer({ antialias: true });
    graphics.setSize( window.innerWidth, window.innerHeight );
    graphics.setClearColor(0x544747, 0.25);
    document.getElementById("viewport").appendChild(graphics.domElement);

    scene = new Physijs.Scene({ fixedTimeStep: 1/120 });
    scene.setGravity(new THREE.Vector3(0, -9.8, 0));
    
    TextureManager.gl = graphics.context;

    camera = new THREE.PerspectiveCamera(
        25,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    // camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, 
    		// window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
    camera.position.set(10, 70, 250);
    camera.lookAt({x: 10, y: 30, z: 0});
    scene.add(camera);

	world = new World(scene);
	
	Levels.createLevelOne(scene, world);

    requestAnimationFrame(render);
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