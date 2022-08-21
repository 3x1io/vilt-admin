<?php

namespace Modules\Base\Services\Concerns;

trait HasStep
{
    /**
     * @var ?int
     * @example 12
     */
    public ?int $step = null;

    public function step(int $step): static
    {
        $this->step = $step;
        return $this;
    }
}
