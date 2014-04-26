/**
 * CharacterKeyboardController.js
 * @author Christopher D. Canfield
 */

function CharacterKeyboardController() {
	this.entity = null;
	this.debug = false;
	
	window.addEventListener("keydown", this.keyDown.bind(this), false);
};

CharacterKeyboardController.prototype.setEntity = function(entity) {
	this.entity = entity;
};

CharacterKeyboardController.prototype.update = function() {
	this.entity.move(0.1, 0, 0);
};

CharacterKeyboardController.prototype.keyDown = function(e) {
    if (typeof KeyEvent == "undefined") {
        var KeyEvent = {
            DOM_VK_LEFT: 37,
            DOM_VK_RIGHT: 39,
            DOM_VK_UP: 38,
            DOM_VK_DOWN: 40,
            DOM_VK_W: 87,
            DOM_VK_A: 65,
            DOM_VK_S: 83,
            DOM_VK_D: 68,
            DOM_VK_Q: 81,
            DOM_VK_E: 69
        };
    }
        
    var keyCode = e.keyCode || e.which;
    
    if (keyCode === KeyEvent.DOM_VK_LEFT ||
            keyCode === KeyEvent.DOM_VK_A)
    {
        if (this.debug) console.log("Key: Left");
        entity.applyCentralForce(new THREE.Vector3(-.1, 0, 0));
    }
    else if (keyCode === KeyEvent.DOM_VK_RIGHT ||
            keyCode === KeyEvent.DOM_VK_D)
    {
        if (this.debug) console.log("Key: Right");
        entity.applyCentralForce(new THREE.Vector3(.1, 0, 0));
    }
    else if (keyCode === KeyEvent.DOM_VK_UP ||
            keyCode === KeyEvent.DOM_VK_W)
    {
        if (this.debug) console.log("Key: Up");
        return this.camera.moveForward();
 
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