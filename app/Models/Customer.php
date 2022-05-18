<?php

namespace App\Models;

use Eloquent as Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Customer
 * @package App\Models
 * @version May 18, 2022, 11:11 am UTC
 *
 * @property \App\Models\Group $group
 * @property \Illuminate\Database\Eloquent\Collection $customerTeams
 * @property \Illuminate\Database\Eloquent\Collection $customersLocations
 * @property integer $group_id
 * @property string $name
 * @property string $phone
 * @property string $email
 * @property boolean $login
 * @property string $password
 * @property string $address
 */
class Customer extends Model
{

    use HasFactory;

    public $table = 'customers';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';




    public $fillable = [
        'group_id',
        'name',
        'phone',
        'email',
        'login',
        'password',
        'address'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'group_id' => 'nullable',
        'name' => 'required|string|max:255',
        'phone' => 'required|string|max:255',
        'email' => 'required|string|max:255',
        'login' => 'required|boolean',
        'password' => 'required|string|max:255',
        'address' => 'nullable|string',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     **/
    public function group()
    {
        return $this->belongsTo(\App\Models\Group::class, 'group_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     **/
    public function customerTeams()
    {
        return $this->belongsToMany(\App\Models\CustomerTeam::class, 'customer_has_teams');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function customersLocations()
    {
        return $this->hasMany(\App\Models\CustomersLocation::class, 'customer_id');
    }
}
