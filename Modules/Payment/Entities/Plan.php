<?php

namespace Modules\Payment\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\Payment\Entities\PaymentMethod;

/**
 * @property integer $id
 * @property integer $payment_method
 * @property string $name
 * @property string $icons
 * @property string $plan_user_type
 * @property string $descriptions
 * @property float $price_monthly
 * @property float $price_yearly
 * @property boolean $is_public
 * @property boolean $is_recurring
 * @property boolean $is_default
 * @property boolean $is_active
 * @property string $created_at
 * @property string $updated_at
 * @property AccountType[] $accountTypes
 * @property Account[] $accounts
 * @property Payment[] $payments
 * @property Feature[] $features
 */
class Plan extends Model
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
    protected $fillable = ['payment_method', 'name', 'icons', 'plan_user_type', 'descriptions', 'price_monthly', 'price_yearly', 'is_public', 'is_recurring', 'is_default', 'is_active', 'created_at', 'updated_at', 'order'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function accountTypes()
    {
        return $this->hasMany('Modules\Payment\Entities\AccountType');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function accounts()
    {
        return $this->hasMany('Modules\Payment\Entities\Account');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function payments()
    {
        return $this->hasMany('Modules\Payment\Entities\Payment');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function features()
    {
        return $this->belongsToMany('Modules\Payment\Entities\Feature', 'plan_has_features');
    }

    public function payment_methods()
    {
        return $this->belongsToMany(PaymentMethod::class)->withTimestamps();
    }

    protected static function booted()
    {
        static::deleting(function ($record) {
            $record->payment_methods()->detach();
        });
    }
}
