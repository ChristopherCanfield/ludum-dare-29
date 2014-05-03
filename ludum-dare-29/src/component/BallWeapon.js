/**
 * BallWeapon.js
 * @author Christopher D. Canfield
 */

function BallWeapon() {
	this.timer = new THREE.Clock(true);
	this.COOLDOWN_TIME = 1000;
};

BallWeapon.CLASS = "BallWeapon";

BallWeapon.prototype.getClass = function() {
	return BallWeapon.CLASS;
};

BallWeapon.prototype.shoot = function(world, xDir, yDir, zDir) {
	if (this.timer.getElapsedTime() > this.COOLDOWN_TIME)
	{
		world.add(new AttackBall());
	}
};
