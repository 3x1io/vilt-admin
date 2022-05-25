<?php

namespace Modules\Translations\Http\Middleware;

use Closure;

class Language
{
    public function handle($request, Closure $next)
    {
        if (in_array($request->header('Language'), ['ar', 'en'])) {
            app()->setLocale($request->header('Language'));
        } else {
            app()->setLocale('ar');
        }
        return $next($request);
    }
}
