<?php

namespace Modules\Locations\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $iso
 * @property string $name
 * @property string $arabic
 * @property string $created_at
 * @property string $updated_at
 */
class Language extends Model
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
    protected $fillable = ['iso', 'name', 'arabic', 'created_at', 'updated_at'];
}
