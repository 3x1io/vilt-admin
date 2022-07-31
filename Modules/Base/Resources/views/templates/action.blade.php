@php echo "<?php";
@endphp

namespace Modules\{{$module}}\Vilt\Resources\{{ $resource }}\Actions;

use Modules\Base\Helpers\Resources\Base\Actions;

class {{ $model }}Action extends Actions
{
    public function setup(): void
    {
        $this->name('{{ $name }}');
        $this->label(__('{{ $sp }}'));
        $this->type('success');
        $this->icon('bx bx-user');
        $this->url(url('/'));
    }
}
