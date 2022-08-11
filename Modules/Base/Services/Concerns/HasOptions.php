<?php

namespace Modules\Base\Services\Concerns;

use Illuminate\Database\Eloquent\Model;

trait HasOptions
{
    /**
     * @var ?array
     * @example ["name"=> "value", "id"=> 1]
     **/
    public ?array $options = [];

    public function options(array $options): static
    {
        $this->options = $options;
        return $this;
    }
}
