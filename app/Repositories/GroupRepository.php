<?php

namespace App\Repositories;

use App\Models\Group;
use App\Repositories\BaseRepository;

/**
 * Class GroupRepository
 * @package App\Repositories
 * @version May 18, 2022, 11:10 am UTC
*/

class GroupRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'name'
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
        return Group::class;
    }
}
