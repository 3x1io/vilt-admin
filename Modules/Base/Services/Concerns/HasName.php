<?php

namespace Modules\Base\Services\Concerns;

use Modules\Base\Services\Component;

trait HasName
{
    /**
     * @var ?string
     * @example "name"
     */
    public ?string $name = null;

    /**
     * @param string $name
     * @return $this
     */
    public function name(string $name): static
    {
        $this->name = $name;
        return $this;
    }
}
