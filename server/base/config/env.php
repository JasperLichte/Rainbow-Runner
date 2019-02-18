<?php

define('APP_NAME', 'Rainbow-Runner');

define('PRODUCTION', false);
define('VERSION', '0.1.3');

define('REPO_URL', 'https://github.com/JasperLichte/Rainbow-Runner');
define('CONTRIBUTORS', [
  'JasperLichte' => [
    'name' => 'Jasper Lichte',
    'githubUrl' => 'https://github.com/JasperLichte',
  ],
  [
    'name' => 'Harun Can',
    'githubUrl' => 'https://github.com/TaZn',
  ]
]);

define('DEFAULT_LANGUAGE', 'en');
define('SUPPORTED_LANGUAGES', ['en', 'de', 'es', 'fr']);

define('ABS_ROOT_DIR', getRootUrl());
define('STYLES_ROOT_DIR', ABS_ROOT_DIR . 'assets/styles/');
define('SCRIPTS_ROOT_DIR', ABS_ROOT_DIR . 'assets/scripts/');
