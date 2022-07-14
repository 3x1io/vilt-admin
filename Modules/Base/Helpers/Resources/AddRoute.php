<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;


class AddRoute
{
    use Configure;

    private ?string $name = null;
    private ?string $type = "post";
    private ?string $method = null;
    private ?string $path = null;
    private ?string $controller = null;

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

    public function controller($controller): ?static
    {
        $this->controller = $controller;
        return $this;
    }

    public function path($path): ?static
    {
        $this->path = $path;
        return $this;
    }

    public function method($method): ?static
    {
        $this->method = $method;
        return $this;
    }

    public function type($type): ?static
    {
        $this->type = $type;
        return $this;
    }

    public function get()
    {
        return [
            "name" => $this->name,
            "type" => $this->type,
            "method" => $this->method,
            "path" => $this->path,
            "controller" => $this->controller
        ];
    }
}
