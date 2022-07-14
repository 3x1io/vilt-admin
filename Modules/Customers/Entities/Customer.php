<?php

namespace Modules\Customers\Entities;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

/**
 * @property integer $id
 * @property string $name
 * @property string $phone
 * @property string $email
 * @property string $address
 * @property string $password
 * @property float $in
 * @property float $out
 * @property string $brithday
 * @property mixed $info
 * @property boolean $login
 * @property boolean $active
 * @property string $created_at
 * @property string $updated_at
 */
class Customer extends Model
{
    use HasTranslations;

    protected $translatable = "info";
    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    protected $casts = [
        "info" => "array"
    ];

    protected $hidden = ["password"];

    protected $dates = [
        "created_at",
        "updated_at",
        "brithday"
    ];

    /**
     * @var array
     */
    protected $fillable = ['name', 'phone', 'email', 'address', 'password', 'in', 'out', 'brithday', 'info', 'login', 'active', 'created_at', 'updated_at'];
}
