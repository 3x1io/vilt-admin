<?php

namespace Modules\Base\Services\Concerns;

trait IsRequired
{
    /**
     * @var ?bool
     */
    public ?bool $required = false;

    public function required(): static
    {
        $this->required = true;
        return $this;
    }
}
