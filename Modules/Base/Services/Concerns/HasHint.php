<?php

namespace Modules\Base\Services\Concerns;

trait HasHint
{
    /**
     * @var ?string
     * @example 'This is a hint'
     */
    public ?string $hint = null;

    public function hint(string $hint): static
    {
        $this->hint = $hint;
        return $this;
    }
}
