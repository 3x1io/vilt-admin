<?php

namespace Modules\Base\Services\Concerns;

trait IsSearchable
{
    /**
     * @var ?bool
     */
    public ?bool $searchable = false;

    /**
     * @return $this
     */
    public function searchable(): static
    {
        $this->searchable = true;
        return $this;
    }
}
