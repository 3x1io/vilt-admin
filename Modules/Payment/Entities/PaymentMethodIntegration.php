<?php

namespace Modules\Payment\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $payment_method_id
 * @property string $key
 * @property string $value
 * @property string $created_at
 * @property string $updated_at
 * @property PaymentMethod $paymentMethod
 */
class PaymentMethodIntegration extends Model
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
    protected $fillable = ['payment_method_id', 'key', 'value', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function paymentMethod()
    {
        return $this->belongsTo('Modules\Payment\Entities\PaymentMethod');
    }
}
