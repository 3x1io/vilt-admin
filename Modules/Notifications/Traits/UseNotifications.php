<?php

namespace Modules\Notifications\Traits;

use Modules\Notifications\Entities\UserNotification;
use Modules\Notifications\Entities\UserToken;

trait UseNotifications
{

    public function initializeUseNotifications()
    {
        $this->appends[] = 'fcm';
        $this->appends[] = 'fcmID';
    }

    public function setFcmAttribute($value)
    {
        $this->fcm = $value;
    }

    public function getFcmAttribute()
    {
        return 'fcm';
    }

    public function setFcmIdAttribute($value)
    {
        $this->fcmId = $value;
    }

    public function getFcmIdAttribute()
    {
        return $this->id;
    }

    public function getUserNotifications()
    {
        return $this->morphMany(UserNotification::class, 'model');
    }

    public function userTokensFcm()
    {
        return $this->morphOne(UserToken::class, 'model')->where('provider', $this->fcm);
    }

    public function userTokensPusher()
    {
        return $this->morphOne(UserToken::class, 'model')->where('provider', 'pusher');
    }

    public function routeNotificationForFcm()
    {
        return $this->userTokensFcm ? $this->userTokensFcm->provider_token : '';
    }
}
