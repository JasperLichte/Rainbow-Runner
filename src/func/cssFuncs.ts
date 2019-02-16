export function setCSSVar(name, value) {
  const html = document.getElementsByTagName('html')[0];
  html.style.setProperty(name, value);
}

export function setCSSColorVars(colors = {}) {
  for (const key in colors) {
    if (typeof colors[key] !== 'string') {
      continue;
    }
    const cssVarName = '--' + key + '-color';
    setCSSVar(cssVarName, colors[key])
  }
}
