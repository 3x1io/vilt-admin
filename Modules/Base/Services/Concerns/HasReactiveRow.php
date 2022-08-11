<?php

namespace Modules\Base\Services\Concerns;

trait HasReactiveRow
{
    /**
     * @var ?string
     * @example 'name'
     */
    public ?string $reactiveRow = null;

    /**
     * @param string $reactiveRow
     * @return $this
     */
    public function reactiveRow(string $reactiveRow): static
    {
        $this->reactiveRow = $reactiveRow;
        return $this;
    }
}
