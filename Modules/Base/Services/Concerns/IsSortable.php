<?php

namespace Modules\Base\Services\Concerns;

trait IsSortable
{
    /**
     * @var ?bool
     */
    public ?bool $sortable = false;

    /**
     * @return $this
     */
    public function sortable(): static
    {
        $this->sortable = true;
        return $this;
    }
}
