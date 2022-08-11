<?php

namespace Modules\Base\Services\Concerns;

trait HasTrack
{
    /**
     * @var ?string
     * @example 'name'
     */
    public ?string $trackByName = null;

    /**
     * @var ?string
     * @example '1'
     */
    public ?string $trackById = null;

    /**
     * @param string $trackByName
     * @return $this
     */
    public function trackByName(string $trackByName): static
    {
        $this->trackByName = $trackByName;
        return $this;
    }

    /**
     * @param string $trackById
     * @return $this
     */
    public function trackById(string $trackById): static
    {
        $this->trackById = $trackById;
        return $this;
    }
}
