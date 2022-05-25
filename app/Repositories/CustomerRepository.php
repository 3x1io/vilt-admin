<?php

namespace App\Repositories;

use App\Models\Customer;
use App\Repositories\BaseRepository;

/**
 * Class CustomerRepository
 * @package App\Repositories
 * @version May 20, 2022, 2:31 pm UTC
*/

class CustomerRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'group_id',
        'name',
        'phone',
        'email',
        'login',
        'password',
        'address'
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
        return Customer::class;
    }
}
