export function setCSSVar(name, value) {
    var html = document.getElementsByTagName('html')[0];
    html.style.setProperty(name, value);
}
export function setCSSColorVars(colors) {
    if (colors === void 0) { colors = {}; }
    for (var key in colors) {
        if (typeof colors[key] !== 'string') {
            continue;
        }
        var cssVarName = '--' + key + '-color';
        setCSSVar(cssVarName, colors[key]);
    }
}
