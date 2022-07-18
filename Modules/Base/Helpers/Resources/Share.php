<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;

class Share
{
    use Configure;

    private ?array $data = [];

    public function __construct($data)
    {
        $this->data = $data;
    }

    public static function make(string $data)
    {
        $static = app(static::class, ['data' => $data]);
        $static->setUp();

        return $static;
    }

    public function share()
    {
        session([
            "data" => $this->data
        ]);
        return back();
    }
}
