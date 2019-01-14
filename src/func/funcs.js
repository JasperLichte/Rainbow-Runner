export function getPathInObj(obj, value, path) {
  if (typeof obj !== 'object') {return;}
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var t = path;
      var v = obj[key];
      if (!path) {
        path = key;
      } else {
        path = path + '-' + key;
      }
      if (v === value) {
        return path;
      } else if (typeof v !== 'object') {
        path = t;
      }
      var res = getPathInObj(v, value, path);
      if (res) {
        return res;
      }
    }
  }
}
