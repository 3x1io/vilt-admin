<?php

namespace Modules\Payment\Entities;
use Eloquent as Model;

//use Illuminate\Database\Eloquent\Model;

class PaymentMethod extends Model
{

    protected $fillable = [];


    public function integration(){
        return $this->hasMany(PaymentMethodIntegration::class);
    }
}
