<?php

namespace Modules\Base\Imports;

use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;

class BaseImport implements ToModel
{
    use Importable;

    protected ?array $data;
    protected ?string $model;
    protected $cols;

    public function __construct(array $data, string $model, $cols)
    {
        $this->data = $data;
        $this->model = $model;
        $this->cols = $cols;
    }

    public function model(array $row)
    {
        $set =[];
        foreach($this->data as $i=>$item){
            if($item['list'] && $this->cols->{$item['field']}){
                array_push($set, $item['field']);
            }
        }

        $setRow = [];
        foreach($set as $i=>$s){
            if(isset($row[$i])){
                $setRow[$s] = $row[$i];
            }
        }

        return $this->model::firstOrCreate($setRow);
    }
}
