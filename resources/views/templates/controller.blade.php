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

    public function schema()
    {
        return [
        @foreach($cols as $col)
        @if($col['name'] === 'id')
        Row::make('{{ $col['name'] }}')->label('ID')->edit(false)->create(false)->get(),
        @elseif($col['name'] === 'password')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('password')->list(false)->view(false)->get(),
        Row::make('password_confirmation')->label("Password Confirmation")->type('password')->list(false)->view(false)->get(),
        @elseif($col['name'] === 'email')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('email')->get(),
        @elseif($col['name'] === 'created_at')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->create(false)->edit(false)->type('datetime')->get(),
        @elseif($col['name'] === 'updated_at')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->create(false)->edit(false)->type('datetime')->get(),
        @elseif($col['name'] === 'deleted_at')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->create(false)->edit(false)->type('datetime')->get(),
        @elseif($col['name'] === 'phone')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('tel')->get(),
        @else
        @if($col['type'] === 'float' || $col['type'] === 'bigint')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('number')->get(),
        @elseif($col['type'] === 'boolean')
        Row::make('{{ $col['name'] }}')->label('{{ $col['name'] }}')->type('switch')->get(),
        @elseif($col['type'] === 'datetime')
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
        // create and AdminListing instance for a specific model and
        $data = AdminListing::create({{ $model }}::class)
            ->processRequestAndGet(
                // pass the request with params
                $request,

                // set columns to query
                $this->schemaFileds(),

                // set columns to searchIn
                ['id'],

            );

        $rows = $this->schema();
        $this->loadMedia($data);
        $this->loadFilters($request);

        if ($request->ajax()) {
            return inertia('{{ $model }}/List', [
                "success" => true,
                "message" => "{{ $model }} Created Success",
                "collection" => $data,
                "rows" => $rows,
                "url" => "{{ $table }}",
                "search" => $this->search,
                "per_page" => $this->per_page,
                "orderBy" => $this->orderBy,
                "desc" => $this->desc,
                "filters" => $this->filters,
                "create" => $this->create,
            ]);
        } else {
            return Inertia::render('{{ $model }}/List', [
                "collection" => $data,
                "rows" => $rows,
                "url" => "{{ $table }}",
                "search" => $this->search,
                "per_page" => $this->per_page,
                "orderBy" => $this->orderBy,
                "desc" => $this->desc,
                "filters" => $this->filters,
                "create" => $this->create,
            ]);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules = [
        @foreach($cols as $col)
        @if($col['name'] === 'id')
        @elseif($col['name'] === 'created_at')
        @elseif($col['name'] === 'updated_at')
        @elseif($col['name'] === 'password')
        "password" => "required|string|min:8|confirmed",
        @elseif($col['name'] === 'email')
        "email" => "required|string|email",
        @else
        @if($col['type'] === 'float')
        "{{ $col['name'] }}" => "required|integer",
        @elseif($col['type'] === 'boolean')
        "{{ $col['name'] }}" => "required|boolean",
        @elseif($col['type'] === 'datetime')
        "{{ $col['name'] }}" => "required|date",
        @endif
        "{{ $col['name'] }}" => "required|string",
        @endif
        @endforeach
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {
            $record = {{ $model }}::create($request->all());

            $this->processCreateMedia($request, $record);

            $data = {{ $model }}::paginate(10);

            return inertia('{{ $model }}/List', [
                "success" => true,
                "message" => "{{ $model }} Created Success",
                "collection" => $data,
                "rows" => $this->schema(),
                "url" => "{{ $table }}",
            ]);
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
        $record = {{ $model }}::find($id);

        $rules = [
        @foreach($cols as $col)
        @if($col['name'] === 'id')
        @elseif($col['name'] === 'created_at')
        @elseif($col['name'] === 'updated_at')
        @elseif($col['name'] === 'password')
        "password" => "sometimes|string|min:8|confirmed",
        @elseif($col['name'] === 'email')
        "email" => "sometimes|string|email",
        @else
        @if($col['type'] === 'float')
        "{{ $col['name'] }}" => "sometimes|integer",
        @elseif($col['type'] === 'boolean')
        "{{ $col['name'] }}" => "sometimes|boolean",
        @elseif($col['type'] === 'datetime')
        "{{ $col['name'] }}" => "sometimes|date",
        @endif
        "{{ $col['name'] }}" => "sometimes|string",
        @endif
        @endforeach
        ];
        $validator = Validator::make($request->all(), $rules);
        $validator->validate();

        if (!$validator->fails()) {

            $record->update($request->all());

            $data = {{ $model }}::paginate(10);

            $this->processUpdateMedia($request, $record);

            return inertia('{{ $model }}/List', [
                "success" => true,
                "message" => "{{ $model }} Updated Success",
                "collection" => $data,
                "rows" => $this->schema(),
                "url" => "{{ $table }}",
            ]);
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
        $record = {{ $model }}::find($id);
        if ($record) {
            $record->delete();

            $data = {{ $model }}::paginate(10);

            return inertia('{{ $model }}/List', [
                "success" => true,
                "message" => "{{ $model }} Deleted Success",
                "collection" => $data,
                "rows" => $this->schema(),
                "url" => "{{ $table }}",
            ]);
        }
    }

    public function bulkSelect()
    {
        $select = {{ $model }}::all()->lists('id')->toArray();

        $data = {{ $model }}::paginate(10);

        return inertia('{{ $model }}/List', [
            "success" => true,
            "message" => "{{ $model }} Deleted Success",
            "collection" => $data,
            "select" => $select,
            "rows" => $this->schema(),
            "url" => "{{ $table }}",
        ]);
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
                $record = {{ $model }}::find($key);
                if ($record) {
                    if ($request->action === 'delete') {
                        $record->delete();
                    }
                }
            }
            $data = {{ $model }}::paginate(10);

            return inertia('{{ $model }}/List', [
                "success" => true,
                "message" => "{{ $model }} Bulk Action Success",
                "collection" => $data,
                "rows" => $this->schema(),
                "url" => "{{ $table }}",
            ]);
        }
    }
}
