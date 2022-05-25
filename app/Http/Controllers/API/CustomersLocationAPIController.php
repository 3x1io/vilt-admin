<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\API\CreateCustomersLocationAPIRequest;
use App\Http\Requests\API\UpdateCustomersLocationAPIRequest;
use App\Models\CustomersLocation;
use App\Repositories\CustomersLocationRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\AppBaseController;
use Response;

/**
 * Class CustomersLocationController
 * @package App\Http\Controllers\API
 */

class CustomersLocationAPIController extends AppBaseController
{
    /** @var  CustomersLocationRepository */
    private $customersLocationRepository;

    public function __construct(CustomersLocationRepository $customersLocationRepo)
    {
        $this->customersLocationRepository = $customersLocationRepo;
    }

    /**
     * Display a listing of the CustomersLocation.
     * GET|HEAD /customersLocations
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $customersLocations = $this->customersLocationRepository->all(
            $request->except(['skip', 'limit']),
            $request->get('skip'),
            $request->get('limit')
        );

        return $this->sendResponse($customersLocations->toArray(), 'Customers Locations retrieved successfully');
    }

    /**
     * Store a newly created CustomersLocation in storage.
     * POST /customersLocations
     *
     * @param CreateCustomersLocationAPIRequest $request
     *
     * @return Response
     */
    public function store(CreateCustomersLocationAPIRequest $request)
    {
        $input = $request->all();

        $customersLocation = $this->customersLocationRepository->create($input);

        return $this->sendResponse($customersLocation->toArray(), 'Customers Location saved successfully');
    }

    /**
     * Display the specified CustomersLocation.
     * GET|HEAD /customersLocations/{id}
     *
     * @param int $id
     *
     * @return Response
     */
    public function show($id)
    {
        /** @var CustomersLocation $customersLocation */
        $customersLocation = $this->customersLocationRepository->find($id);

        if (empty($customersLocation)) {
            return $this->sendError('Customers Location not found');
        }

        return $this->sendResponse($customersLocation->toArray(), 'Customers Location retrieved successfully');
    }

    /**
     * Update the specified CustomersLocation in storage.
     * PUT/PATCH /customersLocations/{id}
     *
     * @param int $id
     * @param UpdateCustomersLocationAPIRequest $request
     *
     * @return Response
     */
    public function update($id, UpdateCustomersLocationAPIRequest $request)
    {
        $input = $request->all();

        /** @var CustomersLocation $customersLocation */
        $customersLocation = $this->customersLocationRepository->find($id);

        if (empty($customersLocation)) {
            return $this->sendError('Customers Location not found');
        }

        $customersLocation = $this->customersLocationRepository->update($input, $id);

        return $this->sendResponse($customersLocation->toArray(), 'CustomersLocation updated successfully');
    }

    /**
     * Remove the specified CustomersLocation from storage.
     * DELETE /customersLocations/{id}
     *
     * @param int $id
     *
     * @throws \Exception
     *
     * @return Response
     */
    public function destroy($id)
    {
        /** @var CustomersLocation $customersLocation */
        $customersLocation = $this->customersLocationRepository->find($id);

        if (empty($customersLocation)) {
            return $this->sendError('Customers Location not found');
        }

        $customersLocation->delete();

        return $this->sendSuccess('Customers Location deleted successfully');
    }
}
