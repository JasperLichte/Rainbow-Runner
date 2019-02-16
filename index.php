<?php

use templates\HtmlHelper;
use templates\TemplatesHelper;

require_once "server/templates/TemplatesHelper.php";
require_once "server/templates/HtmlHelper.php";

echo
TemplatesHelper::getHtml(
    HtmlHelper::element(
        'main',
        ['id' => 'main']
    ),
    TemplatesHelper::getTitleByPageName('Start'),
    [
        'doc.css',
        'defaults.css',
        'ui/menu.css',
        'ui/currentLevelPanel.css',
        'level.css',
    ],
    [
        'three.min.js',
    ]
);
