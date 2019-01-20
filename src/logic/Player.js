import exceptions from './../errorhandling/exceptions.js';

export default class Player {

  constructor(renderObject) {
    if (!renderObject) {
      throw new Error(exceptions['INVALID_RENDER_OBJECT']);
    }

    this._position = renderObject.getPosition();

    console.log(this);    
  }
  
}
