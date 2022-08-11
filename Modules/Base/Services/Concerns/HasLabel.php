<?php

namespace Modules\Base\Services\Concerns;

trait HasLabel {
    /**
     * @var ?string
     * @example __('Name')
     */
    public ?string $label = null;


    /**
     * @param string $label
     * @return $this
     */
    public function label(string $label): static
    {
        $this->label = $label;
        return $this;
    }
}
