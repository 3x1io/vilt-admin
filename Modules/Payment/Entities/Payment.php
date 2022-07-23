<?php

namespace Modules\Payment\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $approved_by
 * @property integer $plan_id
 * @property integer $bank_id
 * @property integer $payment_method_id
 * @property integer $payment_status_id
 * @property integer $model_id
 * @property string $model_type
 * @property string $transaction_code
 * @property string $payment_type
 * @property float $amount
 * @property string $notes
 * @property string $vendor
 * @property string $vendor_id
 * @property string $vendor_status
 * @property string $created_at
 * @property string $updated_at
 * @property Account[] $accounts
 * @property User $user
 * @property Bank $bank
 * @property PaymentMethod $paymentMethod
 * @property PaymentStatus $paymentStatus
 * @property Plan $plan
 */
class Payment extends Model
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
    protected $fillable = ['approved_by', 'plan_id', 'bank_id', 'payment_method_id', 'payment_status_id', 'model_id', 'model_type', 'transaction_code', 'payment_type', 'amount', 'notes', 'vendor', 'vendor_id', 'vendor_status', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function accounts()
    {
        return $this->hasMany('Modules\Payment\Entities\Account', 'last_payment_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('Modules\Payment\Entities\User', 'approved_by');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function bank()
    {
        return $this->belongsTo('Modules\Payment\Entities\Bank');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function paymentMethod()
    {
        return $this->belongsTo('Modules\Payment\Entities\PaymentMethod');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function paymentStatus()
    {
        return $this->belongsTo('Modules\Payment\Entities\PaymentStatus');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function plan()
    {
        return $this->belongsTo('Modules\Payment\Entities\Plan');
    }
}
