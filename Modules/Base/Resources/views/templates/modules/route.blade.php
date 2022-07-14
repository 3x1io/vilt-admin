Route::middleware(['auth:sanctum',
'verified'])->prefix('admin/{{ str_replace('_', '-', $table) }}')->name('{{ $table }}.')->group(function () {
Route::get('/', [Modules\{{ $module }}\Http\Controllers\{{ $model }}Controller::class, 'index'])->name('index');
Route::post('/', [Modules\{{ $module }}\Http\Controllers\{{ $model }}Controller::class, 'store'])->name('store');
Route::post('{id}/update', [Modules\{{ $module }}\Http\Controllers\{{ $model }}Controller::class,
'update'])->name('update');
Route::delete('{id}/delete', [Modules\{{ $module }}\Http\Controllers\{{ $model }}Controller::class,
'destroy'])->name('destory');
Route::post('bulk', [Modules\{{ $module }}\Http\Controllers\{{ $model }}Controller::class, 'bulk'])->name('bulk');
});
