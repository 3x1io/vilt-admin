<?php

namespace Modules\Roles\Console;

use Modules\Base\Helpers\Generator\ResourceGenerator;
use App\Models\User;
use Illuminate\Console\Command;

class GeneratePermission extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'vilt-roles:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Main Permission';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $generatorRoles = new ResourceGenerator('roles');
        $generatorRoles->generatePermission();
        $generatorUsers = new ResourceGenerator('users');
        $generatorUsers->generatePermission();
        $generatorUsers = new ResourceGenerator('translations');
        $generatorUsers->generatePermission();
        $user = User::find(1);
        $user->assignRole('admin');
        $this->info('The Permission Has Been Generated');

        return Command::SUCCESS;
    }
}
