/**
 * AttackValue.js
 * @author Christopher D. Canfield
 */

function AttackValue() {
	this.damage = 10;
};

AttackValue.CLASS = "AttackValue";

AttackValue.prototype.getClass = function() {
	return AttackValue.CLASS;
};