<?php


namespace Modules\Payment\Providers;


use Illuminate\Support\ServiceProvider;
use Modules\Payment\Events\CallBackEvent;
use Modules\Payment\Listeners\FawryCallBackListener;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        CallBackEvent::class => [
            FawryCallBackListener::class,
        ],
    ];
}
