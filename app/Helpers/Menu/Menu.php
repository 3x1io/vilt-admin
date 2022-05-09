<?php

namespace App\Helpers\Menu;

use App\Helpers\Traits\Configure;

class Menu
{
    use Configure;

    private ?string $title;
    private ?string $icon;
    private ?string $route = null;
    private ?string $url = null;
    private ?string $group;
    private ?string $type = "route";
    private ?int $sort = 0;
    private $can = true;

    public function __construct($title)
    {
        $this->title = $title;
    }

    public function get(): array
    {
        return [
            "title" => $this->title,
            "icon" => $this->icon,
            "route" => $this->route,
            "sort" => $this->sort,
            "url" => $this->url,
            "type" => $this->type,
            "can" => $this->can,
        ];
    }

    public static function make(string $title)
    {
        $static = app(static::class, ['title' => $title]);
        $static->setUp();

        return $static;
    }

    public function can($can): ?static
    {
       
        $this->can = $can;
        return $this;
    }

    public function icon($icon): ?static
    {
        $this->icon = $icon;
        return $this;
    }

    public function sort($sort): ?static
    {
        $this->sort = $sort;
        return $this;
    }

    public function route($route): ?static
    {
        $this->route = $route;
        $this->type = 'route';
        return $this;
    }

    public function url($url): ?static
    {
        $this->url = $url;
        $this->type = 'url';
        return $this;
    }
}
