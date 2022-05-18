<?php

namespace App\Http\Middleware;

use Closure;
use Inertia\Inertia;
use Inertia\Middleware;
use Illuminate\Http\Request;
use Modules\Base\Helpers\Vilt\Core;
use Illuminate\Http\RedirectResponse;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function handle(Request $request, Closure $next)
    {
        $response = parent::handle($request, $next);

        if ($response instanceof RedirectResponse && (bool) $request->header('X-Inertia-Modal-Redirect-Back')) {
            return back(303);
        }

        if (Inertia::getShared('isModal')) {
            $response->headers->set('X-Inertia-Modal', true);
        }

        return $response;
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'isModal' => (bool) $request->header('X-Inertia-Modal'),
            'appName' => config('app.name'),
            'nav' => [],
            'dropdown' => Core::loadProfileMenu(),
            'menu' => Core::loadDashboardMenu(),
            'message' => fn () => $request->session()->get('message'),
            'trans' => Core::loadLanguage(),
        ]);
    }
}
