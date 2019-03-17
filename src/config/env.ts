import Config from './Config.js';

try {
  // @ts-ignore
  const conf = window.__CONF;
  const serverConfig = JSON.parse(conf);

  for (const key in serverConfig) {
    Config.set(key, parseConfData(serverConfig[key]['value'], serverConfig[key]['type']));
  }
} catch(e) {}

function parseConfData(value: any, type: string) {
  switch (type) {
    case 'string':
      return '' + value;
    case 'int':
      return parseInt(value);
    case 'float':
      return parseFloat(value);
    case 'bool':
      return !!value;
    default:
      return value;
  }
}
