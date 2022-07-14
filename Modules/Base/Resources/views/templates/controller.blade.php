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
        else {
            $item = Str::ucfirst($item) . " ";
            $tableName .= $item;
        }

        $count++;
    }

    return Str::ucfirst($tableName);
}
@endphp

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\{{ $model }};
use Modules\Base\Helpers\Vilt\Row;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Handler;
use Modules\Base\Helpers\Vilt\AdminListing;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;

class {{ $model }}Controller extends Controller
{
    use Handler;

    public $url = "{{ $table }}";

    public function schema()
    {
        return [
        @php $hasRel = false; $hasPassword = false; @endphp
        @foreach($cols as $col)
        @if($col['type'] === 'password')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->type('password')->list(false)->view(false)->get(),
        Row::make('password_confirmation')->label(__('Password Confirmation'))->type('password')->list(false)->view(false)->get(),
        @php $hasPassword = true; @endphp
        @elseif($col['type'] === 'email')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->type('email')->get(),
        @elseif($col['type'] === 'time')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->type('time')->get(),
        @elseif($col['type'] === 'datetime')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->type('datetime')->get(),
        @elseif($col['type'] === 'date')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->type('date')->get(),
        @elseif($col['type'] === 'tel')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->type('tel')->get(),
        @elseif($col['type'] === 'integer')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->type('number')->get(),
        @elseif($col['type'] === 'textarea')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->type('textarea')->get(),
        @elseif($col['type'] === 'relation')
        Row::make('{{ $col['name'] }}')->label('{{ str_replace('_id', '', $col['name']) }}')->type('hasOne')->list(false)->options({{ $col['relation']['model'] }}::all()->toArray())->get(),
        @php $hasRel = true; @endphp
        @elseif($col['type'] === 'boolean')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->type('switch')->get(),
        @elseif($col['type'] === 'datetime' || $col['type'] === 'date')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->type('datetime')->get(),
        @elseif($col['name'] === 'id')
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->create(false)->edit(false)->get(),
        @else
        Row::make('{{ $col['name'] }}')->label(__('{{ getName($col['name']) }}'))->get(),
        @endif

        @endforeach
        ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->roles($this->url);
        if(!$this->canView){
            return inertia('403');
        }

        // create and AdminListing instance for a specific model and
        $data = AdminListing::create({{ $model }}::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                @php
                    $searching= "id";
                    foreach ($cols as $col) {
                        if($col['type'] === "string"){
                            $searching = $col['name'];
                            break;
                        }
                    }
                @endphp
                // set columns to searchIn
                ['{{ $searching }}'],

            );

        $this->loadMedia($data);
        $this->loadFilters($request);

        @if($hasRel || $hasPassword)
        foreach($data as $item){
            @foreach($cols as $col)
                @if($col['type'] === 'relation')
                    $item->{{ $col['name'] }} = {{ $col['relation']['model'] }}::find($item->{{ $col['name'] }});
                @elseif($col['name'] === 'password')
                    unset($item->password);
                    unset($item->password_confirmation);
                @endif
            @endforeach
        }
        @endif

        return inertia('{{ $model }}/List',$this->response($data, $this->url));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->roles($this->url);
        if(!$this->canCreate){
            return inertia('403');
        }

        $rules = [
        @foreach($cols as $col)
        @php
            if($col['required']){
                $required = "required";
            }
            else {
                $required = "";
            }
            if($col['unique']){
                $unique = "unique:".$table.",".$col['name'];
            }
            else {
                $unique = "";
            }
            if($col['maxLength']){
                $max = "max:" . $col['maxLength'];
            }
            else {
                $max = "";
            }
        @endphp
        @if($col['name'] === 'password')
        "password" => "{{ $required ? $required . "|" : "" }}{{ $max ? $max . "|" : "" }}string|min:8|confirmed",
        @elseif($col['name'] === 'email')
        "email" => "{{ $required ? $required . "|" : "" }}{{ $max ? $max . "|" : "" }}{{ $unique ? $unique . "|" : "" }}email|string",
        @elseif($col['type'] === 'relation')
        "{{ $col['name'] }}" => "{{ $required ? $required . "|" : "" }}{{ $max ? $max . "|" : "" }}{{ $unique ? $unique . "|" : "" }}array",
        @elseif($col['type'] === 'boolean')
        "{{ $col['name'] }}" => "{{ $required ? $required . "|" : "" }}{{ $max ? $max . "|" : "" }}{{ $unique ? $unique . "|" : "" }}bool",
        @elseif($col['name'] === 'tel')
        "{{ $col['name'] }}" => "{{ $required ? $required . "|" : "" }}{{ $max ? $max . "|" : "" }}{{ $unique ? $unique . "|" : "" }}string",
        @elseif($col['name'] === 'id')
        @else
        "{{ $col['name'] }}" => "{{ $required ? $required . "|" : "" }}{{ $max ? $max . "|" : "" }}{{ $unique ? $unique . "|" : "" }}string",
        @endif
        @endforeach
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            @foreach($cols as $col)
                @if($col['type'] === 'relation')
                $getRequest['{{ $col['name'] }}'] = $getRequest['{{ $col['name'] }}']['id'];
                @endif
            @endforeach
            $record = {{ $model }}::create($getRequest);

            $this->processCreateMedia($request, $record);

            session(["message" =>__("{{ $sp }} Created Success")]);
            return back();
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->roles($this->url);
        if(!$this->canEdit){
            return inertia('403');
        }

        $record = {{ $model }}::find($id);

        $rules = [
        @foreach($cols as $col)
        @php
        if($col['maxLength']){
            $max = "max:" . $col['maxLength'];
        }
        else {
            $max = "";
        }
        if($col['unique']){
            $unique = "unique:".$table.",".$col['name'].",";
        }
        else {
            $unique = "";
        }
        @endphp
        @if($col['name'] === 'password')
        "password" => "sometimes|string|min:8|confirmed",
        @elseif($col['name'] === 'email')
        "email" => "sometimes|string|email{{ $unique ? "|" . $unique  : "" }}"{{ $unique ? '.$id': ''}},
        @elseif($col['type'] === 'integer')
        "{{ $col['name'] }}" => "sometimes|integer{{ $unique ? "|" . $unique  : "" }}"{{ $unique ? '.$id': ''}},
        @elseif($col['type'] === 'boolean')
        "{{ $col['name'] }}" => "sometimes|boolean{{ $unique ? "|" . $unique  : "" }}"{{ $unique ? '.$id': ''}},
        @elseif($col['type'] === 'relation')
        "{{ $col['name'] }}" => "sometimes|array{{ $unique ? "|" . $unique  : "" }}"{{ $unique ? '.$id': ''}},
        @elseif($col['type'] === 'boolean')
        "{{ $col['name'] }}" => "sometimes|bool{{ $unique ? "|" . $unique  : "" }}"{{ $unique ? '.$id': ''}},
        @elseif($col['type'] === 'datetime')
        "{{ $col['name'] }}" => "sometimes|date{{ $unique ? "|" . $unique  : "" }}"{{ $unique ? '.$id': ''}},
        @elseif($col['name'] === 'id')
        @else
        "{{ $col['name'] }}" => "sometimes|string{{ $unique ? "|" . $unique  : "" }}"{{ $unique ? '.$id' : ''}},
        @endif
        @endforeach
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $getRequest = $request->all();
            @foreach($cols as $col)
                @if($col['type'] === 'relation')
                $getRequest['{{ $col['name'] }}'] = $getRequest['{{ $col['name'] }}']['id'];
                @endif
            @endforeach
            $record->update($getRequest);
            $this->processUpdateMedia($request, $record);

            session(["message" => __("{{ $sp }} Updated Success")]);
            return back();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->roles($this->url);
        if(!$this->canDelete){
            return inertia('403');
        }

        $record = {{ $model }}::find($id);
        if ($record) {
            $record->delete();

            session(["message" => __("{{ $sp }} Deleted Success")]);
            return back();
        }
    }


    public function bulk(Request $request)
    {

        $rules = [
            "action" => "required",
            "ids" => "required|array",
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            foreach ($request->get('ids') as $key => $value) {
                $this->roles($this->url);
                if(!$this->canDeleteAny){
                    return inertia('403');
                }

                $record = {{ $model }}::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }

            session(["message" => __("{{ $sp }} Bulk Action Success")]);
            return back();
        }
    }
}
