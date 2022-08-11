<?php

namespace Modules\Base\Services\Concerns;

trait HasTab
{
    /**
     * @var ?string
     * @example 'basic'
     */
    public ?string $tab = null;

    /**
     * @param string $tab
     * @return $this
     */
    public function tab(string $tab): static
    {
        $this->tab = $tab;
        return $this;
    }
}
