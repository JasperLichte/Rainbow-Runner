<?php

namespace templates;

require_once __DIR__ . './../base/base.php';

class TemplatesHelper {

    const DOCTYPE = "<!DOCTYPE html>\n";
    const CHARSET = "UTF-8";
    const HEAD_OPENING_TAG = "<head>\n";
    const HEAD_CLOSING_TAG = "</head>\n";
    const BODY_OPENING_TAG = "<body class=\"preload\">\n";
    const BODY_CLOSING_TAG = "</body>\n";
    const HTML_CLOSING_TAG = '</html>';

    /**
     * @param string $language
     * @return string
     */
    static function htmlOpeningTag($language = 'en') {
        return "<html lang=\"{$language}\">\n";
    }

    /**
     * @param string $title
     * @return string
     */
    static function title($title = '') {
        return "<title>{$title}</title>\n";
    }

    /**
     * @return string
     */
    static function metas() {
        return
            "<meta charset=\"" . self::CHARSET . "\">\n" .
            "<meta
                name=\"viewport\"
                content=\"
                    width=device-width,
                    initial-scale=1.0,
                    user-scalable=no\"
            >\n";
    }

    /**
     * @param string $url
     */
    static function favicon($url = 'https://www.media.lichte.info/assets/favicon.ico') {
        return '<link rel="icon" href="' . $url . '" type="image/x-icon" />';
    }

    /**
     * @param array $files
     * @return string
     */
    static function cssIncludes($files = []) {
        $html = '';
        foreach ($files as $file) {
            if (!is_string($file)) {
                continue;
            }
            $file = STYLES_ROOT_DIR . $file;
            $html .= "<link rel=\"stylesheet\" href=\"{$file}\">\n";
        }
        return $html;
    }

    /**
     * @param array $files
     * @return string
     */
    static function jsIncludes($files = []) {
        $html = '';
        foreach ($files as $file) {
            if (!is_string($file)) {
                continue;
            }
            $file = SCRIPTS_ROOT_DIR . $file;
            $html .= "<script type=\"text/javascript\" src=\"{$file}\"></script>\n";
        }

        $mainJs = (PRODUCTION ? SCRIPTS_ROOT_DIR . 'bundle.js' : ABS_ROOT_DIR . 'build/app.js');
        $mainJsType = (PRODUCTION ? 'text/javascript' : 'module');
        $html .= "<script type=\"{$mainJsType}\" src=\"{$mainJs}\"></script>\n";

        return $html;
    }

    /**
     * @return string
     */
    static function inlineJs() {
        return "" .
            "<script>" .
            "window.addEventListener('load', function() {
                document.body.classList.remove('preload')
            });" .
            self::copyRightConsoleLog() .
            "window.__CONF = '" . str_replace("'", '', \json_encode(self::getConf())) . "';" .
            "</script>";
    }

    /**
     * @return string
     */
    static function copyRightComment()
    {
        return
            "\n<!--\n\n" .
            self::copyRightContent() .
            "\n\n-->\n\n";
    }

    /**
     * @return string
     */
    static function copyRightConsoleLog()
    {
        return "console.info('" . self::copyRightContent() . "');";
    }

    /**
     * @return string
     */
    static function copyRightContent()
    {
        $contributors = [];
        foreach (CONTRIBUTORS as $contributor) {
            $contributors[] = $contributor['name'] . ' ('.$contributor['githubUrl'].')';
        }
        return 'This software belongs to: ' . implode(', ', $contributors);
    }

    /**
     * @param string $content
     * @param string $title
     * @param array $cssFiles
     * @param array $jsFiles
     * @return string
     */
    static function getHtml(
        $content = '',
        $title = '',
        $cssFiles = [],
        $jsFiles = []
    ) {
        return
            self::DOCTYPE .
            self::copyRightComment() .
            self::htmlOpeningTag(getUserLanguage()) .
            self::HEAD_OPENING_TAG .
            self::metas() .
            self::title($title) .
            self::cssIncludes($cssFiles) .
            self::favicon() .
            self::HEAD_CLOSING_TAG .
            self::BODY_OPENING_TAG .
            $content . "\n" .
            self::BODY_CLOSING_TAG .
            self::inlineJs() .
            self::jsIncludes($jsFiles) .
            self::HTML_CLOSING_TAG;
    }

    /**
     * @param string $page
     * @return string
     */
    static function getTitleByPageName($page = '') {
        if (!defined('APP_NAME')) {
            return $page;
        }
        if (!!strlen($page)) {
            return APP_NAME . ' | ' . $page;
        }
        return APP_NAME;
    }

    /**
     * @return array
     */
    private static function getConf()
    {
        return [
            'APP_NAME'        => APP_NAME,
            'PRODUCTION'      => (int)PRODUCTION,
            'REPO_URL'        => REPO_URL,
            'VERSION'         => VERSION,
            'CONTRIBUTORS'    => CONTRIBUTORS,
            'ABS_ROOT_DIR'    => ABS_ROOT_DIR,
        ];
    }

}
