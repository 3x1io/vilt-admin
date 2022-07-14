<?php

namespace Modules\Roles\Console;

use App\Models\User;
use Illuminate\Console\Command;
use Modules\Base\Helpers\Resources\Generator;

class GeneratePermissionTable extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'roles:generate {table}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Table Permission';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $table = $this->argument('table');
        $generatorRoles = new Generator($table);
        $generatorRoles->generatePermission();
        $user = User::find(1);
        $user->assignRole('admin');
        $this->info('The Permission Has Been Generated');

        return Command::SUCCESS;
    }
}
