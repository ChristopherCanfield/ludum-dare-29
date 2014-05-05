/**
 * PlayerCharacterController.js
 * @author Christopher D. Canfield
 */

function PlayerCharacterController(world) {
	this.entity = null;
	this.world = world;
	
	this.moveRight = false;
	this.moveLeft = false;
	
	this.moveUpZ = false;
	this.moveDownZ = false;
	
	this.moveTowardScreen = false;
	
	this.jump = false;
	
	this.ACCELERATION = 500;
	this.MAX_SPEED = 20;
	this.INITIAL_VELOCITY = 20;
	
	$(window).keydown(this.keyDown.bind(this));
	$(window).keyup(this.keyUp.bind(this));
};

PlayerCharacterController.prototype.setEntity = function(entity) {
	this.entity = entity;
	this.entity.mesh.setAngularFactor({x: 0, y: 0, z: 0});
};

PlayerCharacterController.CLASS = "PlayerCharacterController";

PlayerCharacterController.prototype.getClass = function() {
	return PlayerCharacterController.CLASS;
};

PlayerCharacterController.prototype.update = function() {
	if (this.moveTowardScreen)
	{
		this.entity.move(0, 0.85, 3);
		return;
	}
	
	var velocity = this.entity.mesh.getLinearVelocity();
	var xForce = this.processX(velocity);
	var zForce = this.processZ(velocity);
	
	if (this.jump)
	{
		this.entity.applyCentralForce(new THREE.Vector3(0, 100, 0));
		this.jump = false;
	}
	
	this.entity.mesh.setAngularFactor({x: 0, y: 0, z: 0 });
	this.entity.rotation = new THREE.Vector3(0, 0, 0);
	
	this.notifyObservers(xForce, zForce);
};

PlayerCharacterController.prototype.processX = function(velocity) {
	if (this.moveRight)
	{
		if (velocity.x >= this.MAX_SPEED)
		{
			this.entity.mesh.setLinearVelocity({x: this.MAX_SPEED, y: velocity.y, z: velocity.z});
		}
		else if (velocity.x <= 0)
		{
			this.entity.mesh.setLinearVelocity({x: this.INITIAL_VELOCITY, y: 0, z: 0});
		}
		var force = new THREE.Vector3(this.ACCELERATION, 0, 0);
		this.entity.applyCentralForce(force);
		return force;
	}
	else if (this.moveLeft)
	{
		if (velocity.x <= -this.MAX_SPEED)
		{
			this.entity.mesh.setLinearVelocity({x: -this.MAX_SPEED, y: velocity.y, z: velocity.z});
		}
		else if (velocity.x >= 0)
		{
			this.entity.mesh.setLinearVelocity({x: -this.INITIAL_VELOCITY, y: 0, z: 0});
		}
		var force = new THREE.Vector3(-this.ACCELERATION, 0, 0);
		this.entity.applyCentralForce(force);
		return force;
	}
	else
	{
		this.entity.mesh.setLinearVelocity({x: 0, y: velocity.y, z: velocity.z});
		velocity.x = 0;
		return this.entity.mesh.getLinearVelocity().clone();
	}
};

PlayerCharacterController.prototype.processZ = function(velocity) {
	if (this.moveUpZ)
	{
		if (velocity.z <= -this.MAX_SPEED)
		{
			this.entity.mesh.setLinearVelocity({x: velocity.x, y: velocity.y, z: -this.MAX_SPEED});
		}
		else if (velocity.z >= 0)
		{
			this.entity.mesh.setLinearVelocity({x: 0, y: 0, z: -this.INITIAL_VELOCITY});
		}
		var force = new THREE.Vector3(0, 0, -this.ACCELERATION);
		this.entity.applyCentralForce(force);
		return force;
	}
	else if (this.moveDownZ)
	{
		if (velocity.z >= this.MAX_SPEED)
		{
			this.entity.mesh.setLinearVelocity({x: velocity.x, y: velocity.y, z: this.MAX_SPEED});
		}
		else if (velocity.z <= 0)
		{
			this.entity.mesh.setLinearVelocity({x: 0, y: 0, z: this.INITIAL_VELOCITY});
		}
		var force = new THREE.Vector3(0, 0, this.ACCELERATION);
		this.entity.applyCentralForce(force);
		return force;
	}
	else
	{
		this.entity.mesh.setLinearVelocity({x: velocity.x, y: velocity.y, z: 0});
		velocity.z = 0;
		return this.entity.mesh.getLinearVelocity().clone();
	}
};

PlayerCharacterController.prototype.notifyObservers = function(xForce, zForce) {
	if (MoveCommand.nextCommandTime < 0)
	{
		for (var i = 0; i < this.entity.observers.length; ++i)
		{
			var follower = this.entity.observers[i].getController(FollowerController.CLASS);
			if (follower != null)
			{
				follower.commands.push(new MoveCommand(
					xForce.setZ(zForce.z)));
			}
		}
		MoveCommand.nextCommandTime = MoveCommand.TIME_BETWEEN_COMMANDS;
	}
	else
	{
		MoveCommand.nextCommandTime--;
	}
};


PlayerCharacterController.prototype.keyDown = function(e) {
    var keyCode = e.which;
    
    if (keyCode === KeyEvent.DOM_VK_LEFT ||
            keyCode === KeyEvent.DOM_VK_A)
    {
        this.moveLeft = true;
        this.moveRight = false;
    }
    else if (keyCode === KeyEvent.DOM_VK_RIGHT ||
            keyCode === KeyEvent.DOM_VK_D)
    {
        this.moveRight = true;
        this.moveLeft = false;
    }
    else if (keyCode === KeyEvent.DOM_VK_UP ||
            keyCode === KeyEvent.DOM_VK_W)
    {
    	this.moveUpZ = true;
        this.moveDownZ = false;
    }
    else if (keyCode === KeyEvent.DOM_VK_DOWN ||
    		keyCode === KeyEvent.DOM_VK_S)
    {
    	this.moveDownZ = true;
    	this.moveUpZ = false;		
    }
    // else if (keyCode === KeyEvent.DOM_VK_E)
    // {
        // var box = this.camera.getBoundingBox().clone();
        // box.xLeft -= 55;
        // box.width += 110;
        // box.zBack -= 65;
        // box.depth += 130;
//         
        // for (var i = 0; i < this.doors.length; ++i)
        // {
            // if (this.doors[i].intersects(box) && !this.doors[i].isOpen())
            // {
                // this.doors[i].open();
            // }
        // }
    // }
    if (keyCode === KeyEvent.DOM_VK_E)
    {
    	this.entity.getComponent(BallWeapon.CLASS)
    			.attack(this.world, 
    					this.entity.mesh.position,
    					1, 0, 0);
    }
    
    if (keyCode === KeyEvent.DOM_VK_R)
    {
    	this.moveTowardScreen = true;
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
    else if (keyCode === KeyEvent.DOM_VK_UP ||
    		keyCode === KeyEvent.DOM_VK_W)
    {
    	this.moveUpZ = false;
    }
    else if (keyCode === KeyEvent.DOM_VK_DOWN ||
    		keyCode === KeyEvent.DOM_VK_S)
    {
    	this.moveDownZ = false;
    }
};
