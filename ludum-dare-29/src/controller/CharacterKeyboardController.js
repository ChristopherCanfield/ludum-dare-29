/**
 * CharacterKeyboardController.js
 * @author Christopher D. Canfield
 */

function CharacterKeyboardController() {
	this.entity = null;
	this.debug = false;
	
	this.moveRight = false;
	this.moveLeft = false;
	this.jump = false;
	
	$(window).keydown(this.keyDown.bind(this));
	$(window).keyup(this.keyUp.bind(this));
};

CharacterKeyboardController.prototype.setEntity = function(entity) {
	this.entity = entity;
};

CharacterKeyboardController.prototype.update = function() {
	if (this.moveRight)
	{
		this.entity.applyCentralForce(new THREE.Vector3(5, 0, 0));
	}
	else if (this.moveLeft)
	{
		this.entity.applyCentralForce(new THREE.Vector3(-5, 0, 0));
	}
	
	if (this.jump)
	{
		// TODO: jump.
		this.jump = false;
	}
};

CharacterKeyboardController.prototype.keyDown = function(e) {
    var keyCode = e.which;
    
    if (keyCode === KeyEvent.DOM_VK_LEFT ||
            keyCode === KeyEvent.DOM_VK_A)
    {
        if (this.debug) console.log("Key: Left");
        this.moveLeft = true;
    }
    else if (keyCode === KeyEvent.DOM_VK_RIGHT ||
            keyCode === KeyEvent.DOM_VK_D)
    {
        if (this.debug) console.log("Key: Right");
        this.moveRight = true;
    }
    else if (keyCode === KeyEvent.DOM_VK_UP ||
            keyCode === KeyEvent.DOM_VK_W)
    {
        if (this.debug) console.log("Key: Up");
        //this.entity.applyCentralForce(new THREE.Vector3(0, 100, 0));
 		this.entity.move(0, .3, 0);
    }
    else if (keyCode === KeyEvent.DOM_VK_DOWN ||
            keyCode === KeyEvent.DOM_VK_S)
    {
        if (this.debug) console.log("Key: Down");
        return this.camera.moveBackward();
    }
    else if (keyCode === KeyEvent.DOM_VK_Q)
    {
        this.camera.rotate180();
        return true;
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

CharacterKeyboardController.prototype.keyUp = function(e) {
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
