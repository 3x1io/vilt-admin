<?php

namespace Modules\Base\Services\Concerns;

use Illuminate\Database\Eloquent\Model;

trait HasModel
{
    /**
     * @var ?Model
     * @example User::class
     */
    public ?Model $model = null;

    public function model(Model $model): static
    {
        $this->model = $model;
        return $this;
    }
}
