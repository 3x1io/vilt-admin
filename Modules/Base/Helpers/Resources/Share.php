<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;

class Share
{
    use Configure;

    private  $data = [];
    private ?string $key =null;

    public function __construct($key)
    {
        $this->key = $key;
    }

    public static function make(string $key)
    {
        $static = app(static::class, ['key' => $key]);
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

    public function data($data): ?static
    {
        $this->data = $data;
        return $this;
    }

    public  function get(){
        return [
            "key" => $this->key,
            "data" => $this->data
        ];
    }
}
