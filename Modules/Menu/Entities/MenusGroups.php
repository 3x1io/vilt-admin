<?php

namespace Modules\Menu\Entities;

use Eloquent as Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\Translatable\HasTranslations;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MenusGroups extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasTranslations;

    public $translatable = ['name', 'badge'];

    public $table = 'menus_groups';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public $fillable = [
        'id',
        'name',
        'icon',
        'badge',
        'counter',
        'can',
        'type',
    ];

    protected $appends = ['title'];

    public function getTitleAttribute()
    {
        return $this->name;
    }

    public function menu()
    {
        return $this->hasMany(Menus::class, 'group_id', 'id');
    }
}
