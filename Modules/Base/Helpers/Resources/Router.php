<?php

namespace Modules\Base\Helpers\Resources;

use Illuminate\Support\Facades\Route;
use Modules\Base\Helpers\Traits\Configure;

class Router
{
    use Configure;

    private ?string $table = null;
    private ?string $controller = null;
    private ?array $middleware = ["web"];
    private ?array $custom = null;
    private ?bool $api = false;

    public function __construct($table)
    {
        $this->table = $table;
        return $this->get();
    }

    public static function make(string $table)
    {
        $static = app(static::class, ['table' => $table]);
        $static->setUp();

        return $static;
    }

    public function get()
    {
        return [
            "table" => $this->table,
            "controller" => $this->controller,
            "middleware" => $this->middleware,
            "custom" => $this->custom,
            "api" => $this->api
        ];
    }


    public function controller($controller): ?static
    {
        $this->controller = $controller;
        return $this;
    }

    public function api($api): ?static
    {
        $this->api = $api;
        return $this;
    }

    public function middleware($middleware): ?static
    {
        $this->middleware = $middleware;
        return $this;
    }

    public function custom($custom): ?static
    {
        $this->custom = $custom;
        return $this;
    }
}
