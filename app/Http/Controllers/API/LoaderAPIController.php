<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateLoaderAPIRequest;
use App\Http\Requests\API\UpdateLoaderAPIRequest;
use App\Models\Loader;
use App\Repositories\LoaderRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Response;

/**
 * Class LoaderController
 * @package App\Http\Controllers\API
 */

class LoaderAPIController extends AppBaseController
{
    /** @var  LoaderRepository */
    private $loaderRepository;

    public function __construct(LoaderRepository $loaderRepo)
    {
        $this->loaderRepository = $loaderRepo;
    }

    /**
     * Display a listing of the Loader.
     * GET|HEAD /loaders
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $loaders = $this->loaderRepository->all(
            $request->except(['skip', 'limit']),
            $request->get('skip'),
            $request->get('limit')
        );

        return $this->sendResponse($loaders->toArray(), 'Loaders retrieved successfully');
    }

    /**
     * Store a newly created Loader in storage.
     * POST /loaders
     *
     * @param CreateLoaderAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateLoaderAPIRequest $request)
    {
        $input = $request->all();

        $loader = $this->loaderRepository->create($input);

        return $this->sendResponse($loader->toArray(), 'Loader saved successfully');
    }

    /**
     * Display the specified Loader.
     * GET|HEAD /loaders/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var Loader $loader */
        $loader = $this->loaderRepository->find($id);

        if (empty($loader)) {
            return $this->sendError('Loader not found');
        }

        return $this->sendResponse($loader->toArray(), 'Loader retrieved successfully');
    }

    /**
     * Update the specified Loader in storage.
     * PUT/PATCH /loaders/{id}
     *
     * @param int $id
     * @param UpdateLoaderAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateLoaderAPIRequest $request)
    {
        $input = $request->all();

        /** @var Loader $loader */
        $loader = $this->loaderRepository->find($id);

        if (empty($loader)) {
            return $this->sendError('Loader not found');
        }

        $loader = $this->loaderRepository->update($input, $id);

        return $this->sendResponse($loader->toArray(), 'Loader updated successfully');
    }

    /**
     * Remove the specified Loader from storage.
     * DELETE /loaders/{id}
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var Loader $loader */
        $loader = $this->loaderRepository->find($id);

        if (empty($loader)) {
            return $this->sendError('Loader not found');
        }

        $loader->delete();

        return $this->sendSuccess('Loader deleted successfully');
    }
}
