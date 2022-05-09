Core::registerDashboardMenuItem(Menu::make('{{ $model }}')->icon('bx
bxs-circle')->route('{{ $table }}.index'))->can('view_any_{{  $table }}');
