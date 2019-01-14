const colors = Object.freeze({
  background: '#992244',
  objects: {
    cube: '#00ffed',
    coin: '#cccc00',
    wall: {
      body: '#222222',
      border: '#eeeeee',
    },
  }
});

loopThroughObj(colors)
function loopThroughObj(object) {
  for (const key in object) {
    const val = object[key];
    if (typeof val === 'object') {
      loopThroughObj(val);
      continue;
    } else if (typeof val === 'string') {
      const cssVarName = '--' + getPathInObj(colors, val, key).replace(key + '-', '') + '-color';
      setCSSVar(cssVarName, val)
    }
  }
}

function setCSSVar(name, value) {
  const html = document.getElementsByTagName('html')[0];
  html.style.setProperty(name, value);
}

function getPathInObj(obj, value, path) {
  if(typeof obj !== 'object') {
      return;
  }
  for(var key in obj) {
      if(obj.hasOwnProperty(key)) {
          var t = path;
          var v = obj[key];
          if(!path) {
              path = key;
          }
          else {
              path = path + '-' + key;
          }
          if(v === value) {
              return path;
          }
          else if(typeof v !== 'object'){
              path = t;
          }
          var res = getPathInObj(v, value, path);
          if(res) {
              return res;
          } 
      }
  }
}

export default colors;
