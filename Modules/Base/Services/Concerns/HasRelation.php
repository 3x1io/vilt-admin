<?php

namespace Modules\Base\Services\Concerns;

trait HasRelation
{
    /**
     * @var ?string
     * @example 'groupId'
     */
    public ?string $relation = null;

    /**
     * @param string $relation
     * @return $this
     */
    public function relation(string $relation): static
    {
        $this->relation = $relation;
        return $this;
    }
}
