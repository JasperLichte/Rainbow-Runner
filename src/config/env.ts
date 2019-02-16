import exceptions from './../errorhandling/exceptions.js';

// @ts-ignore
const conf = window.CONFIG;

if (!conf) {
  throw new Error(exceptions['UNEXPECTED_SERVER_BEHAVIOR']);
}

export const APP_NAME = conf['APP_NAME'];
export const PRODUCTION = !!conf['PRODUCTION'];
export const REPO_URL = conf['REPO_URL'];
export const CONTRIBUTORS = JSON.parse(conf['CONTRIBUTORS']);
export const VERSION = conf['VERSION'];
