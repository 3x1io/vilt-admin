<?php

namespace Modules\Base\Console;

use Modules\Base\Helpers\Generator\ResourceGenerator;
use Exception;
use Illuminate\Console\Command;

class GenerateModule extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:vilt-module {table} {module}';

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
            $newGenerator = new ResourceGenerator($table, $module);
            $newGenerator->generateModel(false);
            $this->info('The Model Has Been Generated');
            $newGenerator->generateController();
            $this->info('The Controller Has Been Generated');
            $newGenerator->generateView();
            $this->info('The .Vue Has Been Generated');
            $newGenerator->generateRoute();
            $this->info('The Routes Has Been Generated');
            $newGenerator->generateMenu();
            $this->info('The Menu Has Been Generated');
            $newGenerator->generateLanguages();
            $this->info('The Languages Has Been Generated');
            $newGenerator->generatePermission();
            $this->info('The Permission Has Been Generated');
            $this->info('Please Run npm i & npm run dev to compate assets of vuejs');
        } catch (Exception $e) {
            $this->error($e);
        }

        return Command::SUCCESS;
    }
}
