<?php

namespace Modules\Base\Services\Concerns;

trait IsPreview
{
    /**
     * @var ?bool
     */
    public ?bool $preview = false;

    /**
     * @return $this
     */
    public function preview(): static
    {
        $this->preview = true;
        return $this;
    }
}
