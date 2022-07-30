<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;

class Form
{
    use Configure;

    private ?string $type = "modal";
    private ?array $actions = [];
    private ?array $tabs = [];
    private ?string $title = null;

    public function __construct($type)
    {
        $this->type = $type;
    }

    public static function make(string $type)
    {
        $static = app(static::class, ['type' => $type]);
        $static->setUp();

        return $static;
    }

    public function actions($actions): ?static
    {
        $this->actions = $actions;
        return $this;
    }

    public function tabs($tabs): ?static
    {
        $this->tabs = $tabs;
        return $this;
    }

    public function title($title): ?static
    {
        $this->title = $title;
        return $this;
    }

    public function get(){
        return [
            "type" => $this->type,
            "actions" => $this->actions,
            "tabs" => $this->tabs,
            "title" => $this->title,
        ];
    }
}
