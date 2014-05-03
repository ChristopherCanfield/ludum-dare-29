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

    scene = new Physijs.Scene();
    scene.simulate(undefined, 1);
    scene.setGravity(new THREE.Vector3(0, -9.8, 0));
    
    TextureManager.gl = graphics.context;

    camera = new THREE.PerspectiveCamera(
        25,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );

    camera.position.set(10, 70, 250);
    camera.lookAt({x: 10, y: 30, z: 0});
    scene.add(camera);

	world = new World(scene);
	Levels.createLevelOne(scene, world);

	scene.addEventListener('update', update);

    requestAnimationFrame(render);
};

update = function() {
	// update the controllers.
	world.update();
	
	// simulate physics.
	scene.simulate();
};

render = function() {
    // render the scene.
    graphics.render(scene, camera);
     
    requestAnimationFrame(render);
};