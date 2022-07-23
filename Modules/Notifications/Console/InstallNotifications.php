<?php

namespace Modules\Notifications\Console;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class InstallNotifications extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $name = 'notifications:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install notifications permissions';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->info('Install Permissions');
        Artisan::call('roles:generate user_notifications');
        Artisan::call('roles:generate notifiactions_templates');
        Artisan::call('roles:generate notifications_logs');
        $this->info('Your Notifications is ready now');

        return Command::SUCCESS;
    }

    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments()
    {
        return [];
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions()
    {
        return [];
    }
}
