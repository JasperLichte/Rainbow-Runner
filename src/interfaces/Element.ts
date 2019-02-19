import RenderObject from "../render/renderEngines/RenderObject.js";
import LogicObject from "../logic/objects/LogicObject.js";

export default interface Element {
  object: RenderObject,
  logic: LogicObject,
};
