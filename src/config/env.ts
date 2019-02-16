// @ts-ignore
const conf = window.CONFIG;

export const APP_NAME = conf['APP_NAME'];
export const PRODUCTION = !!conf['PRODUCTION'];
export const REPO_URL = conf['REPO_URL'];
export const CONTRIBUTORS = JSON.parse(conf['CONTRIBUTORS']);
