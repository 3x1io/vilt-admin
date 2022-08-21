<?php

namespace Modules\Base\Services\Rows;

use Modules\Base\Services\Concerns\HasDescription;
use Modules\Base\Services\Concerns\HasId;
use Modules\Base\Services\Concerns\HasMedia;
use Modules\Base\Services\Concerns\HasName;

class Option
{

    use HasName;
    use HasId;
    use HasDescription;
    use HasMedia;

    /**
     * @param string $name
     * @return static
     */
    public static function make(string $name): self
    {
        return (new self)->name($name);
    }
}
