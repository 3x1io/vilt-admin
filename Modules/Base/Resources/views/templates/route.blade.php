Route::middleware(['auth:sanctum',
'verified'])->prefix('admin/{{ str_replace('_', '-', $table) }}')->name('{{ $table }}.')->group(function () {
Route::get('/', [App\Http\Controllers\Admin\{{ $model }}Controller::class, 'index'])->name('index');
Route::post('/', [App\Http\Controllers\Admin\{{ $model }}Controller::class, 'store'])->name('store');
Route::post('{id}/update', [App\Http\Controllers\Admin\{{ $model }}Controller::class, 'update'])->name('update');
Route::delete('{id}/delete', [App\Http\Controllers\Admin\{{ $model }}Controller::class, 'destroy'])->name('destory');
Route::post('bulk', [App\Http\Controllers\Admin\{{ $model }}Controller::class, 'bulk'])->name('bulk');
});
