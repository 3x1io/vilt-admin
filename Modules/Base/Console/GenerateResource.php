<?php

namespace Modules\Base\Console;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Nwidart\Modules\Facades\Module;
use Modules\Base\Helpers\Resources\Generator;
use Modules\Base\Helpers\Generator\ResourceGenerator;

class GenerateResource extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'vilt:resource {table} {module}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Full Vlit Resource To Vlit Admin Table';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $table = $this->argument('table');
        $module = $this->argument('module');

        $check = Module::find($module);

        if (!$check) {
            $this->info('Module not exists we will create it for you');
            Artisan::call('module:make ' . $module);
            $this->info('Module Created Success');
        }

        try {
            $newGenerator = new Generator($table, $module);
            $newGenerator->generateModel();
            $this->info('The Model Has Been Generated');
            $newGenerator->generateResource();
            $this->info('The Resource Has Been Generated');
            $newGenerator->generatePermission();
            $this->info('The Permission Has Been Generated');
            $this->info('Please Run yarn i & yarn dev to compate assets of vuejs');
        } catch (Exception $e) {
            $this->error($e);
        }

        return Command::SUCCESS;
    }
}
