<?php

namespace Modules\Base\Helpers\Resources;

use Inertia\Inertia;
use Modules\Base\Helpers\Traits\Configure;

class Render
{
    use Configure;

    private ?string $path = null;
    private ?string $module = null;
    private $data = [];

    public function __construct($path)
    {
        $this->path = $path;
    }

    public static function make(string $path)
    {
        $static = app(static::class, ['path' => $path]);
        $static->setUp();

        return $static;
    }

    public function data($data): ?static
    {
        $this->data = $data;
        return $this;
    }

    public function module($module): ?static
    {
        $this->module = $module;
        return $this;
    }

    public function render()
    {
        return Inertia::render('@' . $this->module . '::' . $this->path, $this->data);
    }
}
