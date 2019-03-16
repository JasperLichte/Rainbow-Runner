<?php

namespace levels;

require_once __DIR__ . './Level.php';
require_once __DIR__ . './Levels.php';

class LevelHelper
{
    const OBJECTS = [
        'WALL' => '|',
        'PLAYER' => '@',
        'LAVA' => '=',
        'COIN' => 'o',
        'VOID' => ' ',
        'SPIKES' => '^',
        'DIAMOND' => '&',
    ];

    private static $availableLevels = [
        Levels::LEVEL_1,
        Levels::LEVEL_2,
        Levels::LEVEL_3,
        Levels::LEVEL_4,
    ];

    /**
     * @param int $currentLevelIndex
     * @return array
     * @throws \Exception
     */
    public static function getNextLevel($currentLevelIndex = 0) {
        $currentLevelIndex = (int)$currentLevelIndex;
        $availableLevels = array_map(function($template) {
            return new Level($template);
        }, self::getAvailableLevels());

        $nextLevelIndex = ($currentLevelIndex % count($availableLevels));
        if (isset($availableLevels[$nextLevelIndex]) && ($availableLevels[$nextLevelIndex] instanceof Level)) {
            return $availableLevels[$nextLevelIndex]->getTemplate();
        }
        return [];
    }

    public static function getAvailableLevels() {
        return self::$availableLevels;
    }

}
