Core::registerDashboardMenuItem(Menu::make('{{ $model }}')->lang('{{ $table }}.sidebar')->icon('bx
bxs-circle')->route('{{ $table }}.index')->can('view_any_{{  $table }}'));
