<?php

namespace Modules\Notifications\Entities;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class UserNotification extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    public $table = 'user_notifications';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    protected $datas = [
        'created_at',
        'updated_at',
    ];

    public $fillable = [
        'id',
        'created_by',
        'model_type',
        'model_id',
        'title',
        'url',
        'icon',
        'description',
        'type',
        'privacy',
        'template_id',
    ];

    public function model()
    {
        return $this->morphTo();
    }

    public function template()
    {
        return $this->hasOne(NotifiactionsTemplates::class, 'id', 'id');
    }
}
