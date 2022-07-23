<?php

namespace Modules\Base\Helpers\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Modules\Settings\Settings\SitesSettings;
use Spatie\LaravelSettings\Settings;

class Setting
{
    private ?string $table = null;

    public  function __construct()
    {
        $this->table = $this->path;
    }

    public function generateName($sp = false, $sg = false)
    {
        $expload = explode('_', $this->table);
        $tableName = "";
        $x = 1;
        foreach ($expload as $item) {
            if ($sp) {
                if ($sg) {
                    if ($x === count($expload)) {
                        $item = Str::singular(Str::ucfirst($item));
                        $tableName .= " " . $item;
                    } else {
                        $item = Str::ucfirst($item) . " Setting.php";
                        $tableName .= " " . $item;
                    }
                    $x++;
                } else {
                    $item = Str::ucfirst($item) . " Setting.php";
                    $tableName .= " " . $item;
                }
            } else {
                $item = Str::ucfirst($item);
                $tableName .= " " . $item;
            }
        }

        return Str::ucfirst($tableName);
    }

    public function langs()
    {
        if (!empty($this->resourceTitle)) {
            $title = $this->resourceTitle;
        } else {
            $title = $this->generateName();
        }

        $langs = [
            Lang::make($this->table . '.sidebar')->value(__($title))
        ];

        return $langs;
    }

    public  function lang(){
        return [];
    }

    public function loadLang()
    {
        $langs = [
            "index" => __($this->generateName()),
            "create" => __('Create ' . $this->generateName(true, true)),
            "bulk" => __('Delete Selected ' . $this->generateName(true, true)),
            "edit_title" => __('Edit ' . $this->generateName(true, true)),
            "create_title" => __('Create New ' . $this->generateName(true, true)),
            "view_title" => __('View ' . $this->generateName(true, true)),
            "delete_title" => __('Delete ' . $this->generateName(true, true)),
            "bulk_title" => __('Run Bulk Action To ' . $this->generateName(true, true)),
        ];

        if (!empty($this->resourceTitle)) {
            $langs['index'] = $this->resourceTitle;
        }

        return array_merge($this->lang(), $langs);
    }

    public function beforeLoad(Request $request, $rows){
        return $rows;
    }

    public function index(Request $request)
    {
        $isAPI = str_contains($request->route()->getPrefix(), 'api');
        $settings = new $this->setting();

        if($isAPI && $this->api){
            return response()->json([
                "success" => true,
                "message" => __('Settings Loaded Success'),
                "data" => $settings->toArray()
            ]);
        }
        else {
            $rows = $this->rows();
            foreach($rows as $i=>$row){
//                $rows[$i]['hint'] = "setting('".$row['field']."')";
                if( $row['type'] === 'image'){
                    $rows[$i]['default'] = url($settings->{$row['field']});
                }
                else {
                    $rows[$i]['default'] = $settings->{$row['field']};
                }

            }

            return Render::make('Settings')->module('Settings')->data([
                "rows" => $this->beforeLoad($request, $rows),
                "lang" => $this->loadLang(),
                "actions" => $this->actions(),
                "modals" => $this->modals(),
                "table" => $this->table
            ])->render();
        }
    }

    public  function  actions(){
        return [];
    }

    public  function  modals(){
        return [];
    }

    public function getVaild(Request $request)
    {
        $create = [];
        $edit = [];
        foreach ($this->rows() as $item) {
            if ($item['validation']) {
                $create[$item['field']] = $item['validation'];
            }
        }

        return $create;
    }

    public  function  beforeValid(Request $request){
        $rules = $this->getVaild($request);

        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        return $validator;
    }
    public  function beforeStore(Request $request, $settings){
        return $settings;
    }
    public  function afterStore(){}

    public function store(Request $request)
    {
        $validator = $this->beforeValid($request);

        if (!$validator->fails()) {

            $settings = new $this->setting();

            $settings = $this->beforeStore($request, $settings);

            foreach($this->rows() as $item){

                if($item['type'] === 'image' || $item['type'] === 'file'){
                    if ($request->hasFile($item['field'])) {
                        $settings->{$item['field']} = str_replace('public/', 'storage/', $request->file($item['field'])->store('public/settings'));
                    }
                }
                else {
                    if($request->has($item['field']) && (!empty($request->get($item['field'])))){
                        $settings->{$item['field']} = $request->get($item['field']);
                    }
                }
            }

            $settings->save();

            $settings->site_description = $request->get('site_description');
            $settings->site_keywords = $request->get('site_keywords');
            if ($request->hasFile('site_profile')) {
                $settings->site_profile = str_replace('public/', 'storage/', $request->file('site_profile')->store('public/settings'));
            }

            $this->afterStore($request, $settings);

            return Alert::make(__("Settings Updated Success!"))->fire();
        }
    }

    public function route(){
        return [];
    }

    public function routes()
    {
        return Router::make($this->path)->controller(static::class)->custom($this->route())->api($this->api)->settings(true)->get();
    }

    public function menu()
    {
        return [];
    }

    public function menus()
    {
        $menus = [
            $this->group => Menu::make(Str::ucfirst($this->table))->lang($this->table . '.sidebar')->icon($this->icon)->route('admin.settings.'.$this->table . '.index')->can(true)
        ];
        return array_merge($menus, $this->menu());
    }

}
