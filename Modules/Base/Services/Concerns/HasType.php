<?php

namespace Modules\Base\Services\Concerns;

trait HasType
{
    /**
     * @var ?string
     * @example 'text'
     */
    public ?string $type = null;

    /**
     * @param string $type
     * @return $this
     */
    public function type(string $type): static
    {
        $this->type = $type;
        return $this;
    }
}
