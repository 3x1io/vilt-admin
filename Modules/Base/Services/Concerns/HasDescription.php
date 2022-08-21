<?php

namespace Modules\Base\Services\Concerns;

trait HasDescription
{
    /**
     * @var ?string
     * @example 12
     */
    public ?string $description = null;

    public function description($description): static
    {
        $this->description = $description;
        return $this;
    }
}
