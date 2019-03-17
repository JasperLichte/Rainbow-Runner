<?php

namespace base\config;


use levels\Levels;

require_once __DIR__ . './../../levels/Levels.php';

class Config
{
    private static $absRootDir = '';

    const APP_NAME = 'Rainbow-Runner';

    const PRODUCTION = false;

    const VERSION = '0.1.3';

    const DEFAULT_LANGUAGE = 'en';

    const SUPPORTED_LANGUAGES = ['en', 'de', 'es', 'fr'];

    const REPO_URL = 'https://github.com/JasperLichte/Rainbow-Runner';

    const CONTRIBUTORS = [
        'JasperLichte' => [
            'name'      => 'Jasper Lichte',
            'githubUrl' => 'https://github.com/JasperLichte',
        ],
        'TaZn' => [
            'name'      => 'Harun Can',
            'githubUrl' => 'https://github.com/TaZn',
        ]
    ];

    /**
     * @return string
     */
    public static function ABS_ROOT_DIR() {
        if (empty(self::$absRootDir)) {
            self::$absRootDir = getRootUrl();
        }
        return self::$absRootDir;
    }

    /**
     * @return string
     */
    public static function STYLES_ROOT_DIR() {
        return self::ABS_ROOT_DIR() . 'assets/styles/';
    }

    /**
     * @return string
     */
    public static function SCRIPTS_ROOT_DIR() {
        return self::ABS_ROOT_DIR() . 'assets/scripts/';
    }

    /**
     * @return array
     */
    public static function getConfArray()
    {
        return [
            'APP_NAME'       => [
                'type' => 'string',
                'value' => self::APP_NAME
            ],
            'PRODUCTION'     => [
                'type' => 'bool',
                'value' => (int)self::PRODUCTION
            ],
            'REPO_URL'       => [
                'type' => 'string',
                'value' => self::REPO_URL
            ],
            'VERSION'        => [
                'type' => 'string',
                'value' => self::VERSION
            ],
            'CONTRIBUTORS'   => [
                'type' => 'any',
                'value' => self::CONTRIBUTORS
            ],
            'ABS_ROOT_DIR'   => [
                'type' => 'string',
                'value' => self::ABS_ROOT_DIR()
            ],
            'RENDER_SYMBOLS' => [
                'type' => 'any',
                'value' => Levels::OBJECTS
            ],
        ];
    }

    /**
     * @return string
     */
    public static function MAIN_JS_FILE() {
        return (self::PRODUCTION
            ? self::SCRIPTS_ROOT_DIR() . 'bundle.js'
            : self::ABS_ROOT_DIR() . 'build/app.js');
    }

    public static function MAIN_JS_FILE_TYPE() {
        return (self::PRODUCTION
            ? 'text/javascript'
            : 'module');
    }

    public static function MAIN_JS_FILE_IMPORT() {
        return '<script type="' . self::MAIN_JS_FILE_TYPE() . '" src="' . self::MAIN_JS_FILE() . '"></script>';
    }
}
