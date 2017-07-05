// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import { Module, VRInstance } from 'react-vr-web';
// import { Module, Player } from 'ovrui';

class TeleportModule extends Module {
  constructor() {
    super('TeleportModule');
    this._camera = null;
  }

  setCamera(camera) {
    this._camera = camera;
  }

}

function init(bundle, parent, options) {
  const teleportModule = new TeleportModule();
  const vr = new VRInstance(bundle, 'reactVR', parent, {
    // Add custom options here
    enableHotReload: true,
    nativeModules: [ teleportModule ],
    ...options,
  });
  
  teleportModule.setCamera(vr.player.camera);

  vr.render = function() {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  window.playerCamera = vr.player._camera;
  return vr;
}

window.ReactVR = {
  init
};