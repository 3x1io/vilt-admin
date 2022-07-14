<?php

namespace Modules\Notifications\Entities;

use Eloquent as Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\Permission\Models\Role;
use Spatie\Translatable\HasTranslations;
use Spatie\MediaLibrary\InteractsWithMedia;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class NotifiactionsTemplates extends Model implements HasMedia
{
    use HasFactory;
    use HasTranslations;
    use InteractsWithMedia;

    public $table = 'notifiactions_templates';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public $translatable = ['title', 'body'];

    public $fillable = [
        'id',
        'name',
        'key',
        'body',
        'title',
        'url',
        'icon',
        'type',
    ];


    public function roles()
    {
        return $this->belongsToMany(Role::class, 'template_has_roles', 'template_id', 'role_id');
    }
}
