<?php

namespace Modules\Notifications\Entities;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class NotificationsLogs extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    public $table = 'notifications_logs';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public $fillable = [
        'id',
        'model_type',
        'model_id',
        'title',
        'description',
        'type',
        'provider'
    ];
}
