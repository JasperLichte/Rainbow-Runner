import DomHelper from "../helpers/DomHelper.js";

export function setCSSColorVars(colors = {}) {
  for (const key in colors) {
    if (typeof colors[key] !== 'string') {
      continue;
    }
    const cssVarName = `--${key}-color`;
    DomHelper.setCSSVar(cssVarName)(colors[key])
  }
}
