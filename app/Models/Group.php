<?php

namespace App\Models;

use Eloquent as Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Group
 * @package App\Models
 * @version May 20, 2022, 2:31 pm UTC
 *
 * @property \Illuminate\Database\Eloquent\Collection $customers
 * @property string $name
 */
class Group extends Model
{

    use HasFactory;

    public $table = 'groups';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';




    public $fillable = [
        'name'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'name' => 'required|string|max:255',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     **/
    public function customers()
    {
        return $this->hasMany(\App\Models\Customer::class, 'group_id');
    }
}
