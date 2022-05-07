<?php

namespace App\Repositories;

use App\Models\Driver;
use App\Repositories\BaseRepository;

/**
 * Class DriverRepository
 * @package App\Repositories
 * @version May 5, 2022, 9:40 am UTC
*/

class DriverRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'customer_id',
        'governorate_id',
        'area_id',
        'created_by',
        'updated_by',
        'name',
        'phone',
        'plate_number',
        'max_qty',
        'lang',
        'lng',
        'lat',
        'geo',
        'street',
        'home',
        'mark'
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
        return Driver::class;
    }
}
