<?php

namespace App\Models;

use Eloquent as Model;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * Class Loader
 * @package App\Models
 * @version May 18, 2022, 11:13 am UTC
 *
 * @property string|\Carbon\Carbon $start_date
 * @property string|\Carbon\Carbon $end_date
 * @property time $time
 */
class Loader extends Model
{

    use HasFactory;

    public $table = 'loaders';
    
    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';




    public $fillable = [
        'start_date',
        'end_date',
        'time'
    ];

    /**
     * Validation rules
     *
     * @var array
     */
    public static $rules = [
        'start_date' => 'required',
        'end_date' => 'required',
        'time' => 'required',
        'created_at' => 'nullable',
        'updated_at' => 'nullable'
    ];

    
}
