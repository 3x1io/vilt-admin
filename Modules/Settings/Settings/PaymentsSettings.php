<?php

namespace Modules\Settings\Settings;

use Spatie\LaravelSettings\Settings;


class PaymentsSettings extends Settings
{
    public string $payment_gate;
    public bool $payment_online;
    public array $payment_vendors;

    public static function group(): string
    {
        return 'payments';
    }
}
