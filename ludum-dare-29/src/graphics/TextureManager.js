/**
 * TextureManager.js
 * @author Christopher D. Canfield
 */


function Textures() {}

Textures.TempGuy = "../res/textures/temp.png";



/**
 * Stores loaded textures.
 */
function TextureManager() {}

/**
 * Reference to the gl context.
 */
TextureManager.gl = null;

TextureManager.textures = {};

/**
 * Returns a reference to the specified texture. Loads the texture if necessary.
 * @param {String} texturePath
 * THREE.ClampToEdgeWrapping: the edge is clamped to the outer edge texels. 
 * The other two choices are THREE.RepeatWrapping and THREE.MirroredRepeatWrapping.
 */
TextureManager.getTexture = function(texturePath) {    
    if (texturePath in TextureManager.textures)
    {
        return TextureManager.textures[texturePath];
    }
    else
    {
        var t = THREE.ImageUtils.loadTexture(texturePath);
        // t.anisotropy = TextureManager.gl.getMaxAnisotropy();
        TextureManager.textures[texturePath] = t;
        return t;        
    }
};