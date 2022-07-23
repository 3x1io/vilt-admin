<?php

namespace Modules\Payment\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property string $key
 * @property string $description
 * @property string $type
 * @property mixed $extra
 * @property string $created_at
 * @property string $updated_at
 * @property Plan[] $plans
 */
class Feature extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['name', 'key', 'description', 'type', 'extra', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function plans()
    {
        return $this->belongsToMany('Modules\Payment\Entities\Plan', 'plan_has_features');
    }
}
