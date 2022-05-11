<?php
namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Customer extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    public $table = 'customers';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public $fillable = [
            'id',
            'name',
            'email',
            'phone',
            'address',
            'created_at',
            'updated_at',
        ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var  array
     */
    protected $casts = [
                    'id' => 'integer',
                            'name' => 'string',
                            'email' => 'string',
                            'phone' => 'string',
                            'address' => 'string',
                            'created_at' => 'datetime',
                            'updated_at' => 'datetime',
                ];
}
