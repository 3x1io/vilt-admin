<?php

namespace Modules\Base\Console;

use Exception;
use Illuminate\Console\Command;
use Modules\Base\Helpers\Resources\Generator;
use Modules\Base\Helpers\Generator\ResourceGenerator;

class GenerateModule extends Command
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

        try {
            $newGenerator = new Generator($table, $module);
            $newGenerator->generateModel();
            $this->info('The Model Has Been Generated');
            $newGenerator->generateResource();
            $this->info('The Resource Has Been Generated');
            $newGenerator->generatePermission();
            $this->info('The Permission Has Been Generated');
            $this->info('Please Run npm i & npm run dev to compate assets of vuejs');
        } catch (Exception $e) {
            $this->error($e);
        }

        return Command::SUCCESS;
    }
}
