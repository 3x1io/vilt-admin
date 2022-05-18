<?php

namespace App\Repositories;

use App\Models\Loader;
use App\Repositories\BaseRepository;

/**
 * Class LoaderRepository
 * @package App\Repositories
 * @version May 18, 2022, 11:13 am UTC
*/

class LoaderRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'start_date',
        'end_date',
        'time'
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
        return Loader::class;
    }
}
