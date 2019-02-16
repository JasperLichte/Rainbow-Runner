<?php

namespace templates;


class HtmlHelper
{
    /**
     * @param string $tagName
     * @param array $attribs
     * @param string $content
     * @param bool $escapeContent
     * @return string
     */
    public static function element(
        $tagName = 'div',
        $attribs = [],
        $content = '',
        $escapeContent = false
    ) {
        $attribsHtml = '';
        foreach ($attribs as $key => $val) {
            if (!is_string($key) || !is_string($val)) {
                continue;
            }
            $attribsHtml .= " {$key}=\"{$val}\"";
        }

        if ($escapeContent) {
            $content = self::escape($content);
        }

        return
            "<{$tagName}{$attribsHtml}>"
            . $content .
            "</{$tagName}>";
    }

    /**
     * @param string $url
     * @param array $attribs
     * @param string $content
     * @param bool $escapeContent
     * @return string
     */
    public static function textLink($url = '', $attribs = [], $content = '', $escapeContent = false) {
        return self::element(
            'a',
            array_merge($attribs, ['href' => $url]),
            $content,
            $escapeContent
        );
    }

    /**
     * @param string $content
     * @return string
     */
    public static function container($content = '') {
        return self::element('div', [], $content);
    }

    /**
     * @param string $str
     * @return string
     */
    public static function escape($str = '') {
        return htmlspecialchars($str);
    }

}