/**
 * BallWeapon.js
 * @author Christopher D. Canfield
 */

function BallWeapon() {
	this.timer = new THREE.Clock(true);
	this.COOLDOWN_TIME = 1;
};

BallWeapon.CLASS = "BallWeapon";

BallWeapon.prototype.getClass = function() {
	return BallWeapon.CLASS;
};

BallWeapon.prototype.attack = function(world, position, xDir, yDir, zDir) {
	if (this.timer.getElapsedTime() > this.COOLDOWN_TIME)
	{
		world.add(Entities.createAttackBall(world, 
			position,
			new THREE.Vector3(xDir, yDir, zDir),
			10));
		this.timer.start();
	}
};
