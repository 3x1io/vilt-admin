<?php

namespace Modules\Base\Services\Concerns;

trait HasMax
{
    /**
     * @var ?int
     * @example 12
     */
    public ?int $max = null;

    public function max(int $max): static
    {
        $this->max = $max;
        return $this;
    }
}
