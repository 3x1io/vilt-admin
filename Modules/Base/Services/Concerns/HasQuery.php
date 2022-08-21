<?php

namespace Modules\Base\Services\Concerns;

trait HasQuery
{
    /**
     * @var ?array
     * @example []
     */
    public ?array $query = [];

    public function query(string $col, string $where, $value): static
    {
        $this->query = [
            "col" => $col,
            "where" => $where,
            "value" => $value,
        ];
        return $this;
    }
}
