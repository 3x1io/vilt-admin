<?php

namespace App\Repositories;

use App\Models\CustomersLocation;
use App\Repositories\BaseRepository;

/**
 * Class CustomersLocationRepository
 * @package App\Repositories
 * @version May 20, 2022, 2:31 pm UTC
*/

class CustomersLocationRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'customer_id',
        'address',
        'country',
        'city',
        'area',
        'home',
        'flat',
        'floor',
        'active'
    ];

    /**
     * Return searchable fields
     *
     * @return array
     */
    public function getFieldsSearchable()
    {
        return $this->fieldSearchable;
    }

    /**
     * Configure the Model
     **/
    public function model()
    {
        return CustomersLocation::class;
    }
}
