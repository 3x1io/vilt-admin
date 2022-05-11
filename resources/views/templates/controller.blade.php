@php echo "<?php";
@endphp

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\{{ $model }};
use App\Helpers\Vilt\Row;
use Illuminate\Http\Request;
use App\Helpers\Vilt\Handler;
use App\Helpers\Vilt\AdminListing;
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
        @foreach($cols as $col)
        @if($col['type'] === 'password')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('password')->list(false)->view(false)->get(),
        Row::make('password_confirmation')->label("Password Confirmation")->type('password')->list(false)->view(false)->get(),
        @elseif($col['type'] === 'email')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('email')->get(),
        @elseif($col['type'] === 'tel')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('tel')->get(),
        @else
        @if($col['type'] === 'integer')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('number')->get(),
        @elseif($col['type'] === 'string')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('text')->get(),
        @elseif($col['type'] === 'textarea')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('textarea')->get(),
        @elseif(isset($col['relation']))
        Row::make('{{ $col['name'] }}')->label('{{ str_replace('_id', '', $col['name']) }}')->type('relation')->list(false)->options({{ $col['relation']['model'] }}::all()->toArray())->multi('tags')->get(),
        @elseif($col['type'] === 'boolean')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('switch')->get(),
        @elseif($col['type'] === 'datetime' || $col['type'] === 'date')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('datetime')->get(),
        @else
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->get(),
        @endif
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
                $required = "required|";
            }
            else {
                $required = "";
            }
            if($col['unique']){
                $unique = "|unique:".$table.",".$col['name'];
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
        "password" => "{{ $required }}{{ $max }}|string|min:8|confirmed",
        @elseif($col['name'] === 'email')
        "email" => "{{ $required }}{{ $max }}|string|email{{ $unique }}",
        @elseif($col['name'] === 'tel')
        "{{ $col['name'] }}" => "{{ $required }}{{ $max }}|string{{ $unique }}",
        @else
        "{{ $col['name'] }}" => "{{ $required }}{{ $max }}|{{ $col['type'] }}{{ $unique }}",
        @endif
        @endforeach
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $record = {{ $model }}::create($request->all());

            $this->processCreateMedia($request, $record);

            session(["message" => "{{ $model }} Created Success"]);
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
            $unique = "|unique:".$table.",".$col['name'].',.$id';
        }
        else {
            $unique = "";
        }
        @endphp
        @elseif($col['name'] === 'password')
        "password" => "sometimes|string|min:8|confirmed",
        @elseif($col['name'] === 'email')
        "email" => "sometimes|string|email{{ $unique }}",
        @else
        @if($col['type'] === 'integer')
        "{{ $col['name'] }}" => "sometimes|integer{{ $unique }}",
        @elseif($col['type'] === 'boolean')
        "{{ $col['name'] }}" => "sometimes|boolean{{ $unique }}",
        @elseif($col['type'] === 'datetime')
        "{{ $col['name'] }}" => "sometimes|date{{ $unique }}",
        @endif
        "{{ $col['name'] }}" => "sometimes|string{{ $unique }}",
        @endif
        @endforeach
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {

            $record->update($request->all());
            $this->processUpdateMedia($request, $record);

            session(["message" => "{{ $model }} Updated Success"]);
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

            session(["message" => "{{ $model }} Deleted Success"]);
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

            session(["message" => "{{ $model }} Bulk Action Success"]);
            return back();
        }
    }
}
