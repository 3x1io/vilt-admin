<?php

namespace App\Repositories;

use App\Models\Customer;
use App\Repositories\BaseRepository;

/**
 * Class CustomerRepository
 * @package App\Repositories
 * @version May 5, 2022, 9:40 am UTC
*/

class CustomerRepository extends BaseRepository
{
    /**
     * @var array
     */
    protected $fieldSearchable = [
        'governorate_id',
        'area_id',
        'created_by',
        'updated_by',
        'approved_by',
        'request_id',
        'name',
        'phone',
        'email',
        'address',
        'tax_number',
        'contact_title',
        'contact_name',
        'contact_number',
        'sap_customer_code',
        'sap_customer_group_code',
        'sap_marketing_group_code',
        'sap_pin',
        'password',
        'otp_code',
        'otp_activated_at',
        'email_verified_at',
        'remember_token',
        'balance',
        'in',
        'out',
        'lang',
        'lng',
        'lat',
        'geo',
        'street',
        'home',
        'mark',
        'info',
        'activated',
        'blocked',
        'approved_at'
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
