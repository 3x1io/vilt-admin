<?php

namespace Modules\Base\Services\Concerns;

trait HasPlaceholder
{
    /**
     * @var ?string
     * @example __('Place Your Name')
     */
    public ?string $placeholder = null;

    /**
     * @param string $placeholder
     * @return $this
     */
    public function placeholder(string $placeholder): static
    {
        $this->placeholder = $placeholder;
        return $this;
    }
}
