export default class Player {

  constructor(renderObject) {
    if (!renderObject) {
      throw new Error('Render object not provided');
    }

    this._position = renderObject.getPosition();

    console.log(this);
    
  }
  
}
