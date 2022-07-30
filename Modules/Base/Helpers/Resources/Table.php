<?php

namespace Modules\Base\Helpers\Resources;

use Modules\Base\Helpers\Traits\Configure;

class Table
{
    use Configure;

    private ?string $type = "table";
    private ?array $filters = [];
    private ?array $actions = [];
    private ?array $bulks = [];
    private ?bool $bulk = true;
    private ?bool $search = true;

    public function __construct($type)
    {
        $this->type = $type;
    }

    public static function make(string $type)
    {
        $static = app(static::class, ['type' => $type]);
        $static->setUp();

        return $static;
    }

    public function filters($filters): ?static
    {
        $this->filters = $filters;
        return $this;
    }

    public function actions($actions): ?static
    {
        $this->actions = $actions;
        return $this;
    }

    public function search($search): ?static
    {
        $this->search = $search;
        return $this;
    }

    public function bulk($bulk): ?static
    {
        $this->bulk = $bulk;
        return $this;
    }

    public function bulks($bulks): ?static
    {
        $this->bulks = $bulks;
        return $this;
    }

    public function render(): ?array
    {
        return [
            "type" => $this->type,
            "filters" => $this->filters,
            "actions" => $this->actions,
            "bulks" => $this->bulks,
            "search" => $this->search,
            "bulk" => $this->bulk,
        ];
    }
}
