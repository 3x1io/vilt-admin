<?php

namespace App\Helpers\Generator;

use Illuminate\Support\Str;
use Doctrine\DBAL\DriverManager;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Laravel\Jetstream\Rules\Role;
use Spatie\Permission\Models\Permission;

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

    public function generatePermission()
    {
        $checkView = Permission::where('name', 'view_' . $this->table)->where('guard_name', 'web')->first();
        if (!$checkView) {
            Permission::create(['name' => 'view_' . $this->table, 'guard_name' => 'web']);
        }
        $checkViewAny = Permission::where('name', 'view_any_' . $this->table)->where('guard_name', 'web')->first();
        if (!$checkViewAny) {
            Permission::create(['name' => 'view_any_' . $this->table, 'guard_name' => 'web']);
        }
        $checkCreate = Permission::where('name', 'create_' . $this->table)->where('guard_name', 'web')->first();
        if (!$checkCreate) {
            Permission::create(['name' => 'create_' . $this->table, 'guard_name' => 'web']);
        }
        $checkUpdate = Permission::where('name', 'update_' . $this->table)->where('guard_name', 'web')->first();
        if (!$checkUpdate) {
            Permission::create(['name' => 'update_' . $this->table, 'guard_name' => 'web']);
        }
        $checkDelete = Permission::where('name', 'delete_' . $this->table)->where('guard_name', 'web')->first();
        if (!$checkDelete) {
            Permission::create(['name' => 'delete_' . $this->table, 'guard_name' => 'web']);
        }
        $checkExport = Permission::where('name', 'export_' . $this->table)->where('guard_name', 'web')->first();
        if (!$checkExport) {
            Permission::create(['name' => 'export_' . $this->table, 'guard_name' => 'web']);
        }
        $checkDeleteAny = Permission::where('name', 'delete_any_' . $this->table)->where('guard_name', 'web')->first();
        if (!$checkDeleteAny) {
            Permission::create(['name' => 'delete_any_' . $this->table, 'guard_name' => 'web']);
        }

        $checkIfAdminIsExist = Role::where('name', 'admin')->where('guard_name', 'web')->first();
        if (!$checkIfAdminIsExist) {
            $checkIfAdminIsExist = Role::create([
                "name" => "admin",
                "guard_name" => "web"
            ]);
        }

        $checkIfAdminIsExist->givePermissionTo('view_' . $this->table);
        $checkIfAdminIsExist->givePermissionTo('view_any_' . $this->table);
        $checkIfAdminIsExist->givePermissionTo('create_' . $this->table);
        $checkIfAdminIsExist->givePermissionTo('update_' . $this->table);
        $checkIfAdminIsExist->givePermissionTo('delete_' . $this->table);
        $checkIfAdminIsExist->givePermissionTo('delete_any_' . $this->table);
        $checkIfAdminIsExist->givePermissionTo('export_' . $this->table);
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
        $this->generatePermission();
    }
}
