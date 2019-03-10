import Dom_Wall from './dom/objects/Wall.js';
import Dom_Player from './dom/objects/Player.js';
import Dom_Coin from './dom/objects/Coin.js';
import Dom_Spikes from './dom/objects/Spikes.js';
import Dom_Diamond from './dom/objects/Diamond.js';
import Webgl_Wall from './webgl/objects/Wall.js';
import Webgl_Player from './webgl/objects/Player.js';
import Webgl_Coin from './webgl/objects/Coin.js';
import Webgl_Spikes from './webgl/objects/Spikes.js';
import Webgl_Diamond from './webgl/objects/Diamond.js';
import RenderObject from './RenderObject.js';

export default class RenderObjectFactory {

  public static getObject(renderMode: string, blockType: string): RenderObject {
    if (renderMode === '2d') {
      switch(blockType) {
        case 'wall':
          return new Dom_Wall();
        case 'player':
          return new Dom_Player();
        case 'coin':
          return new Dom_Coin();
        case 'spikes':
          return new Dom_Spikes();
        case 'diamond':
          return new Dom_Diamond();
      }
    } else if (renderMode === '3d') {
      switch(blockType) {
        case 'wall':
          return new Webgl_Wall();
        case 'player':
          return new Webgl_Player();
        case 'coin':
          return new Webgl_Coin();
        case 'spikes':
          return new Webgl_Spikes();
        case 'diamond':
          return new Webgl_Diamond();
      }
    }
    return null;
  }

}
