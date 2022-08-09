<?php

namespace Modules\Base\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithHeadings;

class BaseExport implements FromArray,WithHeadings
{
    protected ?array $data;
    protected $cols;
    protected ?array $rows;

    public function __construct(array $data, array $rows, $cols)
    {
        $this->data = $data;
        $this->rows = $rows;
        $this->cols = $cols;
    }

    public function array(): array
    {
        return $this->data;
    }

    public function headings(): array
    {
        $header = [];

        foreach($this->rows as $row){
            if($row['list'] && $this->cols->{$row['field']} &&  (!$row['over']) && ($row['type'] !== 'image')){
                array_push($header, $row['label']);
            }
        }
        return $header;
    }
}
