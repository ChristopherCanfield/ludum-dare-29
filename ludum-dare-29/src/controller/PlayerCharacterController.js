/**
 * PlayerCharacterController.js
 * @author Christopher D. Canfield
 */

function PlayerCharacterController() {
	this.entity = null;
	this.debug = false;
	
	this.moveRight = false;
	this.moveLeft = false;
	this.jump = false;
	
	$(window).keydown(this.keyDown.bind(this));
	$(window).keyup(this.keyUp.bind(this));
};

PlayerCharacterController.prototype.setEntity = function(entity) {
	this.entity = entity;
	this.entity.mesh.setAngularFactor({ x: 0, y: 0, z: 0 });
};

PlayerCharacterController.prototype.update = function() {
	var velocity = this.entity.mesh.getLinearVelocity();
	if (this.moveRight)
	{
		if (velocity.x < 5)
		{
			this.entity.mesh.setLinearVelocity({x: 5, y: velocity.y, z: 0});
		}
		this.entity.applyCentralForce(new THREE.Vector3(35, 0, 0));
	}
	else if (this.moveLeft)
	{
		if (velocity.x > -5)
		{
			this.entity.mesh.setLinearVelocity({x: -5, y: velocity.y, z: 0});
		}
		this.entity.applyCentralForce(new THREE.Vector3(-35, 0, 0));
	}
	else
	{
		this.entity.mesh.setLinearVelocity({ x: 0, y: velocity.y, z: 0});
	}
	
	if (this.jump)
	{
		this.entity.applyCentralForce(new THREE.Vector3(0, 100, 0));
		this.jump = false;
	}
	
	this.entity.mesh.setAngularFactor({ x: 0, y: 0, z: 0 });
	this.entity.rotation = new THREE.Vector3(0, 0, 0);
};

PlayerCharacterController.prototype.keyDown = function(e) {
    var keyCode = e.which;
    
    if (keyCode === KeyEvent.DOM_VK_LEFT ||
            keyCode === KeyEvent.DOM_VK_A)
    {
        if (this.debug) console.log("Key: Left");
        this.moveLeft = true;
        this.moveRight = false;
    }
    else if (keyCode === KeyEvent.DOM_VK_RIGHT ||
            keyCode === KeyEvent.DOM_VK_D)
    {
        if (this.debug) console.log("Key: Right");
        this.moveRight = true;
        this.moveLeft = false;
    }
    else if (keyCode === KeyEvent.DOM_VK_UP ||
            keyCode === KeyEvent.DOM_VK_W)
    {
        this.jump = true;
    }
    else if (keyCode === KeyEvent.DOM_VK_E)
    {
        var box = this.camera.getBoundingBox().clone();
        box.xLeft -= 55;
        box.width += 110;
        box.zBack -= 65;
        box.depth += 130;
        
        for (var i = 0; i < this.doors.length; ++i)
        {
            if (this.doors[i].intersects(box) && !this.doors[i].isOpen())
            {
                this.doors[i].open();
            }
        }
    }
};

PlayerCharacterController.prototype.keyUp = function(e) {
	var keyCode = e.which;
    
    if (keyCode === KeyEvent.DOM_VK_LEFT ||
            keyCode === KeyEvent.DOM_VK_A)
    {
        this.moveLeft = false;
    }
    else if (keyCode === KeyEvent.DOM_VK_RIGHT ||
            keyCode === KeyEvent.DOM_VK_D)
    {
        this.moveRight = false;
    }
};
