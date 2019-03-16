import Config from '../globals/Config.js';

// @ts-ignore
const conf = window.__CONF;

let serverConfig = {};
try {
  serverConfig = JSON.parse(conf);
} catch(e) {}

const int = (inp: any) => parseInt(inp);
const float = (inp: any) => parseFloat(inp);
const string = (inp: any) => '' + inp;
const bool = (inp: any) => !!inp;

Config.set('APP_NAME', string(serverConfig['APP_NAME']));
Config.set('PRODUCTION', bool(serverConfig['PRODUCTION']));
Config.set('ABS_ROOT_DIR', string(serverConfig['ABS_ROOT_DIR']));
Config.set('REPO_URL', string(serverConfig['REPO_URL']));
Config.set('CONTRIBUTORS', serverConfig['CONTRIBUTORS']);
Config.set('VERSION', string(serverConfig['VERSION']));
