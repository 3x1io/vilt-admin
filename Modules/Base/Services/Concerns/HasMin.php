<?php

namespace Modules\Base\Services\Concerns;

trait HasMin
{
    /**
     * @var ?int
     * @example 12
     */
    public ?int $min = null;

    public function min(int $min): static
    {
        $this->min = $min;
        return $this;
    }
}
