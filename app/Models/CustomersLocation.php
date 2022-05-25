<?php

namespace App\Models;

use Eloquent as Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class CustomersLocation
 * @package App\Models
 * @version May 20, 2022, 2:31 pm UTC
 *
 * @property \App\Models\Customer $customer
 * @property integer $customer_id
 * @property string $address
 * @property string $country
 * @property string $city
 * @property string $area
 * @property integer $home
 * @property integer $flat
 * @property integer $floor
 * @property boolean $active
 */
class CustomersLocation extends Model
{

    use HasFactory;

    public $table = 'customers_locations';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';




    public $fillable = [
        'customer_id',
        'address',
        'country',
        'city',
        'area',
        'home',
        'flat',
        'floor',
        'active'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'customer_id' => 'required',
        'address' => 'required|string',
        'country' => 'required|string|max:255',
        'city' => 'required|string|max:255',
        'area' => 'required|string|max:255',
        'home' => 'required|integer',
        'flat' => 'required|integer',
        'floor' => 'required|integer',
        'active' => 'required|boolean',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function customer()
    {
        return $this->belongsTo(\App\Models\Customer::class, 'customer_id');
    }
}
