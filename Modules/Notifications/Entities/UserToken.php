<?php

namespace Modules\Notifications\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserToken extends Model
{
    use HasFactory;

    protected $table = 'user_has_notifications';

    protected $fillable = [
        "model_type",
        "model_id",
        "provider",
        "provider_token",
    ];
}
