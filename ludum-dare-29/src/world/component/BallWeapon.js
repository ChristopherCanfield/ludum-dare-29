/**
 * BallWeapon.js
 * @author Christopher D. Canfield
 */

function BallWeapon() {
	this.timer = new THREE.Clock(true);
	this.COOLDOWN_TIME = 1;
	this.cooldown = this.COOLDOWN_TIME;
};

BallWeapon.CLASS = "BallWeapon";

BallWeapon.prototype.getClass = function() {
	return BallWeapon.CLASS;
};

BallWeapon.prototype.attack = function(world, position, xDir, yDir, zDir) {
	this.cooldown += this.timer.getDelta();
	if (this.cooldown > this.COOLDOWN_TIME)
	{
		world.add(AttackBall.create(world, 
			position,
			new THREE.Vector3(xDir, yDir, zDir),
			10));
		this.cooldown = 0;
	}
};
