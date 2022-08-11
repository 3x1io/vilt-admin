<?php

namespace Modules\Base\Services\Concerns;

trait IsDisabled {
    /**
     * @var ?bool
     */
    public ?bool $disabled = false;

    /**
     * @return $this
     */
    public function disabled(): static
    {
        $this->disabled = true;
        return $this;
    }
}
