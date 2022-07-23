<?php

namespace Modules\Locations\Entities;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $fillable = [
        'country_id',
        'lang',
        'lat',
        'name',
        'price',
        'shipping',
    ];


    protected $dates = [
        'created_at',
        'updated_at',

    ];

    protected $appends = ['resource_url'];

    /* ************************ ACCESSOR ************************* */

    public function getResourceUrlAttribute()
    {
        return url('/admin/cities/'.$this->getKey());
    }

    public function areas(){
        return $this->hasMany(Area::class, 'city_id', 'id');
    }
}
