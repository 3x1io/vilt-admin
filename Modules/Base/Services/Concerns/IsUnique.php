<?php

namespace Modules\Base\Services\Concerns;

trait IsUnique
{
    /**
     * @var ?bool
     */
    public ?bool $unique = false;

    /**
     * @return $this
     */
    public function unique(): static
    {
        $this->unique = true;
        return $this;
    }
}
