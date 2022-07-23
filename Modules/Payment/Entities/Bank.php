<?php

namespace Modules\Payment\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $bank_name
 * @property string $branch
 * @property string $account_name
 * @property string $account_number
 * @property string $iban
 * @property string $created_at
 * @property string $updated_at
 * @property Payment[] $payments
 */
class Bank extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     * 
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['bank_name', 'branch', 'account_name', 'account_number', 'iban', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function payments()
    {
        return $this->hasMany('Modules\Payment\Entities\Payment');
    }
}
