<?php

use levels\LevelHelper;

require_once __DIR__ . './LevelHelper.php';

$reqFunc = (isset($_GET['f']) & !empty($_GET['f']) ? $_GET['f'] : '');

const FUNCTIONS = [
    'getNextLevel',
    'getTotalLevels',
];

if (!$reqFunc || !in_array($reqFunc, FUNCTIONS)) {
    echo json_encode(['error' => 'No function provided']);
    exit();
}
$funcParams = [];
if (isset($_GET['params']) && !empty($_GET['params'])) {
    $decoded = json_decode($_GET['params']);
    if (is_array($decoded) && count($decoded)) {
        $funcParams = $decoded;
    }
}

try {
    $reqFunc($funcParams);
} catch(Exception $exception) {
    exit();
}

/**
 * @param array $params
 * [currentLevelIndex]
 *
 * prints encoded array
 */
function getNextLevel($params) {
    if (!isset($params[0])) {
        exit();
    }
    try {
        $level = LevelHelper::getNextLevel($params[0]);
        echo json_encode($level);
    } catch(Exception $e) {
        exit();
    }
}

/**
 * prints encoded int
 */
function getTotalLevels() {
    echo json_encode(count(LevelHelper::getAvailableLevels()));
}
