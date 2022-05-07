<?php

namespace App\Helpers\Traits;

trait Configure
{
    protected static array $configurations = [];

    public static function make(string $title)
    {
        $static = app(static::class, ['title' => $title]);
        $static->setUp();

        return $static;
    }

    protected function setUp(): void
    {
        $this->configure();
    }

    public static function configureUsing(callable $callback): void
    {
        static::$configurations[] = $callback;
    }

    public function configure(): static
    {
        foreach (static::$configurations as $callback) {
            $callback($this);
        }

        return $this;
    }
}
