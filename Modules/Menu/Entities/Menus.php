<?php

namespace Modules\Menu\Entities;

use Eloquent as Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\Translatable\HasTranslations;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Menus extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;
    use HasTranslations;

    public $translatable = ['title', 'description', 'badge'];

    public $table = 'menus';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public $fillable = [
        'id',
        'group_id',
        'title',
        'description',
        'icon',
        'lang',
        'route',
        'url',
        'type',
        'sort',
        'target',
        'can',
        'badge',
        'counter',
    ];

    public function group()
    {
        return $this->belongsTo(MenusGroups::class, 'group_id', 'id');
    }
}
