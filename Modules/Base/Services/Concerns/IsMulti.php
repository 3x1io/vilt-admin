<?php

namespace Modules\Base\Services\Concerns;

trait IsMulti
{
    /**
     * @var ?bool
     */
    public ?bool $multi = false;

    /**
     * @return $this
     */
    public function multi(): static
    {
        $this->multi = true;
        return $this;
    }
}
