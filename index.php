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
    ['bundle.css'],
    ['three.min.js']
);
