/**
 * Health.js
 * @author Christopher D. Canfield
 */

function Health(maxHealth) {
	this.MAX_HEALTH = maxHealth;
	this.health = this.MAX_HEALTH;
};

Health.CLASS = "Health";

Health.prototype.getClass = function() {
	return Health.CLASS;
};