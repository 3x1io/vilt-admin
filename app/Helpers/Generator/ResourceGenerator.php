<?php

namespace App\Helpers\Generator;

use Illuminate\Support\Str;
use Doctrine\DBAL\DriverManager;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ResourceGenerator
{

    public $table;
    public $connection;

    public function __construct($table)
    {
        $this->table = $table;
        $connectionParams = [
            'dbname' => config('database.connections.mysql.database'),
            'user' => config('database.connections.mysql.username'),
            'password' => config('database.connections.mysql.password'),
            'host' => config('database.connections.mysql.host'),
            'driver' => 'pdo_mysql',
        ];

        $this->connection = DriverManager::getConnection($connectionParams);
    }

    public function getTables()
    {
        $sm = $this->connection->getSchemaManager();
        $tables = $sm->listSequences();

        return $tables;
    }

    public function getFileds()
    {
        $rows = [];

        $sm = $this->connection->getSchemaManager();
        $columns = $sm->listTableColumns($this->table);
        foreach ($columns as $column) {
            array_push($rows, [
                "name" => $column->getName(),
                "type" => DB::getSchemaBuilder()->getColumnType($this->table, $column->getName())
            ]);
        }
        return $rows;
    }

    public function render($view, $path, $append = false)
    {
        $checkControllersFolder = File::exists(app_path('Http/Controllers/Admin'));
        if (!$checkControllersFolder) {
            File::makeDirectory(app_path('Http/Controllers/Admin'));
        }
        $content = $view->render();

        if (!$append) {
            $check = File::exists($path);
            if ($check) {
                File::delete($path);
            }
        }
        if ($append) {
            File::append($path, "\n" . $content);
        } else {
            File::put($path, $content);
        }
    }

    public function generateModel()
    {
        $model = Str::ucfirst(Str::singular($this->table));
        $view = view('templates.model', [
            "model" => $model,
            "table" => $this->table,
            "cols" => $this->getFileds()
        ]);

        $this->render($view, app_path('Models/' . $model . '.php'));
    }

    public function generateController()
    {
        $model = Str::ucfirst(Str::singular($this->table));
        $view = view('templates.controller', [
            "model" => $model,
            "table" => $this->table,
            "cols" => $this->getFileds()
        ]);

        $this->render($view, app_path('Http/Controllers/Admin/' . $model . 'Controller.php'));
    }

    public function generateView()
    {
        $model = Str::ucfirst(Str::singular($this->table));
        $view = view('templates.vue', [
            "model" => $model,
            "table" => $this->table,
            "cols" => $this->getFileds()
        ]);

        $checkVueFolder = File::exists(resource_path('js/Pages/' . $model));
        if (!$checkVueFolder) {
            File::makeDirectory(resource_path('js/Pages/' . $model));
        }

        $this->render($view, resource_path('js/Pages/' . $model . '/' . 'List.vue'));
    }

    public function generateMenu()
    {
        $model = Str::ucfirst(Str::singular($this->table));
        $view = view('templates.menu', [
            "model" => $model,
            "table" => $this->table,
            "cols" => $this->getFileds()
        ]);

        $this->render($view, app_path('Helpers/Menu/List.php'), true);
    }

    public function generateRoute()
    {
        $model = Str::ucfirst(Str::singular($this->table));
        $view = view('templates.route', [
            "model" => $model,
            "table" => $this->table,
            "cols" => $this->getFileds()
        ]);

        $this->render($view, base_path('routes/web.php'), true);
    }

    public function generate()
    {
        $this->generateModel();
        $this->generateController();
        $this->generateView();
        $this->generateRoute();
        $this->generateMenu();
    }
}
