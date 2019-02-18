<?php

/**
 * @return string
 */
function getUserIP() {
    if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
        $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
        $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
    }
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if (filter_var($client, FILTER_VALIDATE_IP)) {
        return $client;
    }
    if (filter_var($forward, FILTER_VALIDATE_IP)) {
        return $forward;
    }
    return $remote;
}

/**
 * @return string
 */
function getUserLanguage() {
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    return in_array($lang, SUPPORTED_LANGUAGES)
        ? $lang
        : DEFAULT_LANGUAGE;
}

/**
 * @return string
 */
function getRootUrl() {
    if(isset($_SERVER['HTTPS'])){
        $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
    }
    else{
        $protocol = 'http';
    }
    return 
        $protocol . 
        '://' . 
        $_SERVER['SERVER_NAME'] . 
        (isset($_SERVER['SERVER_PORT']) && !empty($_SERVER['SERVER_PORT'])
            ? ':' . $_SERVER['SERVER_PORT']
            : '') .
        dirname($_SERVER["REQUEST_URI"] . '?') 
        . '/';
}
