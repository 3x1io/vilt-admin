<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class LocationsSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('local.local_country', 'مصر');
        $this->migrator->add('local.local_lang', 'Arabik');
        $this->migrator->add('local.local_currency', 'EGP');
        $this->migrator->add('local.local_phone', '+2');
        $this->migrator->add('local.local_lat', '');
        $this->migrator->add('local.local_lng', '');
    }
}
