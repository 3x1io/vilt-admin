<?php

namespace Modules\Base\Helpers\Generator;

use Illuminate\Support\Str;
use Doctrine\DBAL\DriverManager;
use Exception;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\File;
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
        $components = [];

        $sm = $this->connection->getSchemaManager();
        $columns = $sm->listTableDetails($this->table);

        foreach ($columns->getColumns() as $column) {

            if (Str::of($column->getName())->endsWith([
                '_at',
                '_token',
            ])) {
                continue;
            }

            $componentData = [];

            $componentData['name'] = $column->getName();
            $unqieName = $this->table . '_' . $column->getName() . '_unique';
            if ($columns->hasIndex($unqieName)) {
                $componentData['unique'] = true;
            } else {
                $componentData['unique'] = false;
            }
            $type = DB::getSchemaBuilder()->getColumnType($this->table, $column->getName());
            $componentData['type'] = $type;

            if ($componentData['type'] === "string") {
                if (Str::of($column->getName())->contains(['email'])) {
                    $componentData['type'] = "email";
                }

                if (Str::of($column->getName())->contains(['password'])) {
                    $componentData['type'] = "password";
                }

                if (Str::of($column->getName())->contains(['phone', 'tel'])) {
                    $componentData['type'] = "tel";
                }
            }

            if (Str::of($column->getName())->endsWith([
                '_id'
            ])) {
                if ($columns->hasForeignKey($this->table . '_' . $column->getName() . '_foreign')) {
                    $getKey = $columns->getForeignKey($this->table . '_' . $column->getName() . '_foreign');
                    $model = "\\App\\Models\\" . Str::studly(Str::singular($getKey->getForeignTableName()));
                    $componentData['relation'] = [
                        "table" => $getKey->getForeignTableName(),
                        "field" => $getKey->getForeignColumns()[0],
                        "model" => $model
                    ];
                    $componentData['type'] = 'relation';
                }
            }

            if ($column->getNotnull()) {
                $componentData['required'] = true;
            } else {
                $componentData['required'] = false;
            }

            if ($length = $column->getLength()) {
                if ($length > 255) {
                    $componentData['type'] = 'textarea';
                }
                $componentData['maxLength'] = $length;
            } else {
                $componentData['maxLength'] = false;
            }

            array_push($components, $componentData);
        }

        return $components;
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

    public function generateName()
    {
        $expload = explode('_', $this->table);
        $tableName = "";
        foreach ($expload as $item) {
            $item = Str::ucfirst($item);
            $tableName .= $item;
        }

        return Str::ucfirst(Str::singular($tableName));
    }

    public function generateModel()
    {
        $model = $this->generateName();

        Artisan::call('infyom:api ' . $model . ' --fromTable --tableName=' . $this->table);
    }

    public function generateController()
    {
        $model = $this->generateName();
        $view = view('base::templates.controller', [
            "model" => $model,
            "table" => $this->table,
            "cols" => $this->getFileds()
        ]);

        $this->render($view, app_path('Http/Controllers/Admin/' . $model . 'Controller.php'));
    }

    public function generateView()
    {
        $model = $this->generateName();
        $view = view('base::templates.vue', [
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
        $model = $this->generateName();
        $view = view('base::templates.menu', [
            "model" => $model,
            "table" => $this->table,
            "cols" => $this->getFileds()
        ]);

        $this->render($view, base_path('Modules/Base/Helpers/Menu/List.php'), true);
    }

    public function generateRoute()
    {
        $model = $this->generateName();
        $view = view('base::templates.route', [
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
