<?php

namespace Modules\Base\Services\Concerns;

trait HasId
{
    /**
     * @var static
     * @example 12
     */
    public $id = null;

    public function id($id): static
    {
        $this->id = $id;
        return $this;
    }
}
