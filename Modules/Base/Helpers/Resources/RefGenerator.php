<?php

namespace Modules\Base\Helpers\Resources;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class RefGenerator {

    public ?string $name;
    public ?string $module;
    public ?string $resource;

    public function __construct($name, $resource, $module = false)
    {
        $this->name = $name;
        $this->module = $module;
        $this->resource = $resource;
    }


    public function generateName($sp = false, $sg = false, $hasSpace = true)
    {
        $expload = explode('_', $this->name);
        $tableName = "";
        $x = 1;
        foreach ($expload as $item) {
            if ($sp) {
                if ($sg) {
                    if ($x === count($expload)) {
                        $item = Str::singular(Str::ucfirst($item));
                        $tableName .= $item;
                    } else {
                        if ($hasSpace) {
                            $item = Str::ucfirst($item) . " Generator.php";
                        } else {
                            $item = Str::ucfirst($item);
                        }

                        $tableName .= $item;
                    }
                    $x++;
                } else {
                    if ($hasSpace) {
                        $item = Str::ucfirst($item) . " Generator.php";
                    } else {
                        $item = Str::ucfirst($item);
                    }

                    $tableName .= $item;
                }
            } else {
                $item = Str::ucfirst($item);
                $tableName .= $item;
            }
        }

        return Str::ucfirst($tableName);
    }


    public function render($view, $path, $append = false)
    {
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

    public function generateAction()
    {
        $sg = $this->generateName(true, true);
        $sp = $this->generateName(true);
        $model = $this->generateName(true, true, false);
        $view = view('base::templates.action', [
            "sg" => $sg,
            "sp" => $sp,
            "model" => $model,
            "resource" => $this->resource,
            "name" => $this->name,
            "module" => $this->module,
        ]);

        $this->render($view, module_path($this->module) .  '/Vilt/Resources/' . $this->resource . '/' . $model .'Action.php');
    }

}
