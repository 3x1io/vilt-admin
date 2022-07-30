<?php

namespace Modules\Locations\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property integer $city_id
 * @property string $lat
 * @property string $lang
 * @property string $created_at
 * @property string $updated_at
 * @property Project[] $projects
 */
class Area extends Model
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
    protected $fillable = ['name', 'city_id', 'lat', 'lang', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function projects()
    {
        return $this->hasMany('Modules\Locations\Entities\Project');
    }

    public  function city(){
        return $this->belongsTo(City::class, 'city_id', 'id');
    }
}
