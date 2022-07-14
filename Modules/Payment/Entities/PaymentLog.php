<?php

namespace Modules\Payment\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PaymentLog extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $fillable = ['status','response','payload'];
    protected $table = 'payment_logs';
}
