<?php

namespace Modules\Base\Console;

use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Nwidart\Modules\Facades\Module;
use Modules\Base\Helpers\Resources\Generator;

class GenerateAction extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'vilt:action {name} {resource} {module}';

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
        $name = $this->argument('name');
        $module = $this->argument('module');
        $resource = $this->argument('resource');

        $check = Module::find($module);

        if (!$check) {
            $this->error('Module not exists we will create it for you');
            exit;
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
