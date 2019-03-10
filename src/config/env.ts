import exceptions from './../errorhandling/exceptions.js';
import Config from '../globals/Config.js';

// @ts-ignore
const conf = window.CONFIG;

if (!conf) {
  throw new Error(exceptions['UNEXPECTED_SERVER_BEHAVIOR']);
}

Config.set('APP_NAME', conf['APP_NAME']);
Config.set('PRODUCTION', !!conf['PRODUCTION']);
Config.set('REPO_URL', conf['REPO_URL']);
Config.set('CONTRIBUTORS', JSON.parse(conf['CONTRIBUTORS']));
Config.set('VERSION', conf['VERSION']);
