@php echo "<?php";
@endphp

@php
function getName($string){
    $expload = explode('_', $string);
    $tableName = "";
    $count = 0;
    foreach ($expload as $item) {
        if($count === count($expload)){
            $item = Str::ucfirst($item);
            $tableName .= $item;
        }
        else if(count($expload)) {
            $item = Str::ucfirst($item) . " ";
            $tableName .= $item;
        }
        else {
            $item = Str::ucfirst($item);
            $tableName .= $item;
        }

        $count++;
    }

    return Str::ucfirst($tableName);
}
@endphp

namespace Modules\{{ $module }}\Resources;
use Modules\{{ $module }}\Entities\{{ $model }};
use Modules\Base\Helpers\Resources\Row;
use Modules\Base\Helpers\Resources\Resource;

class {{ $model }}Resource extends Resource
{
    public $model = {{ $model }}::class;
    public $icon = "bx bxs-circle";
    public $group = "Content";
    public $api = true;

    public function rows()
    {
        return [
        @php $hasRel = false; $hasPassword = false; @endphp
        @foreach($cols as $col)
        @php
        if($col['required']){
            $required = "required";
        }
        else {
            $required = "nullable";
        }
        if($col['unique']){
            $unique = true;
        }
        else {
            $unique = false;
        }
        if($col['maxLength']){
            $max = "max:" . $col['maxLength'];
        }
        else {
            $max = "";
        }
        @endphp
        @if($col['type'] === 'password')
        Row::make('{{ $col['name'] }}')->validation("{{ $required ? $required . "|" : "" }}{{ $max ? $max . "|" : "" }}string|min:8|confirmed")->label(__('{{ getName($col['name']) }}'))->type('password')->list(false)->view(false)->get(),
        Row::make('password_confirmation')->label(__('Password Confirmation'))->type('password')->list(false)->view(false)->get(),
        @php $hasPassword = true; @endphp
        @elseif($col['type'] === 'email')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->validation("{{ $required ? $required . "|" : "" }}{{ $max ? $max . "|" : "" }}email|string")->label(__('{{ getName($col['name']) }}'))->type('email')->get(),
        @elseif($col['type'] === 'time')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->label(__('{{ getName($col['name']) }}'))->type('time')->get(),
        @elseif($col['type'] === 'datetime')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->label(__('{{ getName($col['name']) }}'))->type('datetime')->get(),
        @elseif($col['type'] === 'date')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->label(__('{{ getName($col['name']) }}'))->type('date')->get(),
        @elseif($col['type'] === 'tel')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->label(__('{{ getName($col['name']) }}'))->type('tel')->get(),
        @elseif($col['type'] === 'integer' || $col['type'] === 'double' || $col['type'] === 'float')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->label(__('{{ getName($col['name']) }}'))->type('number')->get(),
        @elseif($col['type'] === 'textarea')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->label(__('{{ getName($col['name']) }}'))->type('textarea')->get(),
        @elseif($col['type'] === 'relation')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->validation("{{ $required ? $required . "|" : "" }}{{ $max ? $max : "" }}array")->label('{{ str_replace('_id', '', $col['name']) }}')->type('hasOne')->list(false)->model({{ $col['relation']['model'] }}::class)->get(),
        @php $hasRel = true; @endphp
        @elseif($col['type'] === 'boolean')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->validation("{{ $required ? $required . "|" : "" }}{{ $max ? $max : "" }}bool")->label(__('{{ getName($col['name']) }}'))->type('switch')->get(),
        @elseif($col['type'] === 'datetime' || $col['type'] === 'date')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->label(__('{{ getName($col['name']) }}'))->type('datetime')->get(),
        @elseif($col['name'] === 'id')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->label(__('{{ getName($col['name']) }}'))->create(false)->edit(false)->get(),
        @elseif($col['type'] === 'json')
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->label(__('{{ getName($col['name']) }}'))->type('schema')->options([])->get(),
        @else
        Row::make('{{ $col['name'] }}')@if($unique)->@endif{{ $unique ? "unique(true)" : "" }}->validation("{{ $required ? $required . "|" : "" }}{{ $max ? $max : "" }}")->label(__('{{ getName($col['name']) }}'))->get(),
        @endif

        @endforeach
        ];
    }
}
