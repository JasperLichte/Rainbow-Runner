import Config from './Config.js';
import { parseVar } from '../func/funcs.js';

try {
  // @ts-ignore
  const conf = window.__CONF;
  const serverConfig = JSON.parse(conf);

  for (const key in serverConfig) {
    Config.set(
      key,
      parseVar(
        serverConfig[key]['value'],
        serverConfig[key]['type']
      )
    );
  }
} catch(e) {}
