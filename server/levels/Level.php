<?php

namespace levels;

require_once __DIR__ . './LevelHelper.php';

class Level
{
    private $template = [];

    /**
     * Level constructor.
     * @param array $template
     * @throws \Exception
     */
    public function __construct($template)
    {
        $this->template = self::validate($template);
    }

    /**
     * @param array $template
     * @return array
     * @throws \Exception
     */
    public static function validate($template)
    {
        if (!is_array($template)) {
            throw new \Exception('Expected level template, found ' . gettype($template));
        }
        $new = [];
        foreach ($template as $row) {
            $newRow = [];
            foreach ($row as $cell) {
                if (!in_array($cell, LevelHelper::OBJECTS)) {
                    $newRow[] = LevelHelper::OBJECTS['void'];
                } else {
                    $newRow[] = $cell;
                }
            }
            $new[] = $newRow;
        }
        return $new;
    }

    /**
     * @return array
     */
    public function getTemplate() {
        return $this->template;
    }

}