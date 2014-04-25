/**
 * @author Christopher D. Canfield
 * TextureManager.js
 * October 2013; Updated November 2013
 */

function Textures() {
}

/**
 * Initializes the texture manager with the gl context. 
 * @param {Object} glContext
 */
function TextureManager(glContext) {
	this.textures =	{};
	this.gl = glContext;
}

/**
 * Loads the specified texture, or passes a reference to it if the texture has already been loaded.   
 * @param {String} texturePath
 */
TextureManager.prototype.getTexture = function(texturePath) {
	if ( texturePath in this.textures)
	{
		return this.textures[texturePath];
	}
	else
	{
		var t = THREE.ImageUtils.loadTexture(texturePath);
		t.wrapS = THREE.RepeatWrapping;
		t.wrapT = THREE.RepeatWrapping;
		t.anisotropy = this.gl.getMaxAnisotropy();
		this.textures[texturePath] = t;
		return t;
	}
};
