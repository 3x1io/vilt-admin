<?php

namespace Modules\Base\Helpers\Resources;

use JetBrains\PhpStorm\ArrayShape;
use Modules\Base\Helpers\Traits\Configure;


class Action
{
    use Configure;

    private ?string $name = null;
    private ?string $label = null;
    private ?string $type = "success";
    private ?string $icon = "bx bx-circle";
    private ?string $action = null;
    private ?string $modal = null;
    private ?string $url = null;
    private ?bool $can = true;

    public function __construct($name)
    {
        $this->name = $name;
    }

    public static function make(string $name)
    {
        $static = app(static::class, ['name' => $name]);
        $static->setUp();

        return $static;
    }

    public function url($url): ?static
    {
        $this->url = $url;
        return $this;
    }

    public function label($label): ?static
    {
        $this->label = $label;
        return $this;
    }

    public function modal($modal): ?static
    {
        $this->modal = $modal;
        return $this;
    }

    public function action($action): ?static
    {
        $this->action = $action;
        return $this;
    }

    public function icon($icon): ?static
    {
        $this->icon = $icon;
        return $this;
    }

    public function type($type): ?static
    {
        $this->type = $type;
        return $this;
    }

    public function can($can): ?static
    {
        $this->can = $can;
        return $this;
    }

    public function render(): array
    {
        return [
            "name" => $this->name,
            "label" => $this->label,
            "type" => $this->type,
            "icon" => $this->icon,
            "action" => $this->action,
            "modal" => $this->modal,
            "url" => $this->url,
            "can" => $this->can,
        ];
    }
}
