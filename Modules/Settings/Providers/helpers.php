<?php

use Spatie\LaravelSettings\Models\SettingsProperty;


if (!function_exists('setting')) {
    function setting($key)
    {
        $setting = SettingsProperty::where('name', $key)->first();
        if ($setting) {
            return json_decode($setting->payload);
        } else {
            return false;
        }
    }
}
if (!function_exists('dollar')) {
    function dollar($total)
    {
        $getDollar = setting('site_currency');
        if ($getDollar) {
            return "<b>" . number_format($total, 2) . "</b><small>$getDollar</small>";
        } else {
            return false;
        }
    }
}

if (!function_exists('hasModule')) {
    function hasModule($name)
    {
        return \Module::collections()->has($name);
    }
}
