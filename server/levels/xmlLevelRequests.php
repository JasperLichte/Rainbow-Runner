<?php

use levels\LevelHelper;

require_once __DIR__ . './LevelHelper.php';

$reqFunc = (isset($_GET['f']) & !empty($_GET['f']) ? $_GET['f'] : '');

const FUNCTIONS = [
    'getLevel',
    'getTotalLevels',
];

if (!$reqFunc || !in_array($reqFunc, FUNCTIONS)) {
    echo json_encode(['error' => 'Invalid function provided']);
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
    echo json_encode($reqFunc($funcParams));
} catch(Exception $exception) {
    echo json_encode(['error' => 'Internal server error']);
}

/**
 * @param array $params
 * [currentLevelIndex]
 *
 * @return array
 */
function getLevel($params) {
    if (!isset($params[0])) {
        return [];
    }
    try {
        $level = LevelHelper::getLevel($params[0]);
        return $level;
    } catch(Exception $e) {
        return [];
    }
}

/**
 * @return int
 */
function getTotalLevels() {
    return count(LevelHelper::getAvailableLevels());
}
