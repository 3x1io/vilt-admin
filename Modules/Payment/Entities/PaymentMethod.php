<?php

namespace Modules\Payment\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property string $description
 * @property string $color
 * @property string $icon
 * @property boolean $activated
 * @property string $created_at
 * @property string $updated_at
 * @property PaymentMethodIntegration[] $paymentMethodIntegrations
 * @property Payment[] $payments
 */
class PaymentMethod extends Model
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
    protected $fillable = ['name', 'description', 'color', 'icon', 'activated', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function paymentMethodIntegrations()
    {
        return $this->hasMany('Modules\Payment\Entities\PaymentMethodIntegration');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function payments()
    {
        return $this->hasMany('Modules\Payment\Entities\Payment');
    }
}
