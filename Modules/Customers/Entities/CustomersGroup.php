<?php

namespace Modules\Customers\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property string $color
 * @property string $icon
 * @property boolean $activated
 * @property string $created_at
 * @property string $updated_at
 * @property Customer[] $customers
 */
class CustomersGroup extends Model
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
    protected $fillable = ['name', 'description', 'color', 'icon', 'activated', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function customers()
    {
        return $this->hasMany('Modules\Customers\Entities\Customer', 'customer_group_id');
    }
}
