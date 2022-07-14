<?php

namespace Modules\Roles\Console;

use App\Models\User;
use Illuminate\Console\Command;
use Modules\Base\Helpers\Resources\Generator;
use Modules\Base\Helpers\Generator\ResourceGenerator;

class GeneratePermission extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'roles:install';

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
        $generatorRoles = new Generator('roles');
        $generatorRoles->generatePermission();
        $generatorUsers = new Generator('users');
        $generatorUsers->generatePermission();
        $generatorUsers = new Generator('translations');
        $generatorUsers->generatePermission();
        $user = User::find(1);
        if (!$user) {
            $user = new User();
            $user->name = "admin";
            $user->email = "admin@admin.com";
            $user->password = bcrypt("3x1@2021");
            $user->save();
        } else {
            $user->name = "admin";
            $user->email = "admin@admin.com";
            $user->password = bcrypt("3x1@2021");
            $user->save();
        }
        $user->assignRole('admin');
        $this->info('The Permission Has Been Generated');
        $this->info('Admin Username: admin@admin.com');
        $this->info('Admin Password: 3x1@2021');

        return Command::SUCCESS;
    }
}
