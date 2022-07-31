<?php

namespace Modules\Customers\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $customer_group_id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string $phone
 * @property string $company
 * @property string $address
 * @property string $city
 * @property string $state
 * @property string $zip
 * @property string $country
 * @property string $website
 * @property string $created_at
 * @property string $updated_at
 * @property CustomersGroup $customersGroup
 */
class Customer extends Model
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
    protected $fillable = ['customer_group_id', 'name', 'email', 'password', 'phone', 'company', 'address', 'city', 'state', 'zip', 'country', 'website', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function customersGroup()
    {
        return $this->belongsTo('Modules\Customers\Entities\CustomersGroup', 'customer_group_id');
    }
}
