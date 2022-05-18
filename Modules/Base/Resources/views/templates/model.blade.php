@php echo "<?php";
@endphp

namespace App\Models;

use Eloquent as Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class {{ $model }} extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    public $table = '{{ $table }}';

    const CREATED_AT = 'created_at';
    const UPDATED_AT = 'updated_at';

    public $fillable = [
    @foreach($cols as $col)
        '{{ $col['name'] }}',
    @endforeach
    ];
}
