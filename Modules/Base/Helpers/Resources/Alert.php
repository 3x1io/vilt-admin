<?php
namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;



class Alert
{
    use Configure;

    private ?string $message = null;
    private ?string $type = "success";

    public function __construct($message)
    {
        $this->message = $message;
    }

    public static function make(string $message)
    {
        $static = app(static::class, ['message' => $message]);
        $static->setUp();

        return $static;
    }

    public function type($type): ?static
    {
        $this->type = $type;
        return $this;
    }

    public function fire()
    {
        session([
            "message" => [
                "message" => $this->message,
                "type" => $this->type
            ]
        ]);
        return back();
    }
}
