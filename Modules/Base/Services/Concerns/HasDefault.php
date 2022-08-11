<?php

namespace Modules\Base\Services\Concerns;

trait HasDefault
{
    /**
     * @var string | array | bool | null
     */
    public string | array | bool | null  $default = null;

    public function default(string | array | bool | null $default): static
    {
        $this->default = $default;
        return $this;
    }
}
