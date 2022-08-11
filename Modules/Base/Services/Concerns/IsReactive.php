<?php

namespace Modules\Base\Services\Concerns;

trait IsReactive
{
    /**
     * @var ?bool
     */
    public ?bool $reactive = null;

    /**
     * @var ?string
     * @example 'name'
     */
    public ?string $reactiveRow = null;

    /**
     * @var ?string
     * @example 'name'
     */
    public ?string $reactiveWhere = null;


    /**
     * @return $this
     */
    public function reactive(): static
    {
        $this->reactive = true;
        return $this;
    }

    /**
     * @param string $reactiveRow
     * @return $this
     */
    public function reactiveRow(string $reactiveRow): static
    {
        $this->reactiveRow = $reactiveRow;
        return $this;
    }

    /**
     * @param string $reactiveWhere
     * @return $this
     */
    public function reactiveWhere(string $reactiveWhere): static
    {
        $this->reactiveWhere = $reactiveWhere;
        return $this;
    }
}
