<?php

namespace Modules\Payment\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Modules\Payment\Entities\PaymentMethodIntegration;

class PaymentIntegrationSeederTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $rows = [
            [
                'payment_method_id' => 2,
                'key' => 'class_name',
                'value' => 'Modules\Payment\Http\Services\FawryPlusPaymentService'
            ],
            [
                'payment_method_id' => 2,
                'key' => 'testing_uri',
                'value' => 'https://atfawry.fawrystaging.com/fawrypay-api/api/payments/init'
            ],
            [
                'payment_method_id' => 2,
                'key' => 'FAWRY_PR_URI',
                'value' => 'https://atfawry.fawrystaging.com/fawrypay-api/api/payments/init'
            ],
            [
                'payment_method_id' => 2,
                'key' => 'merchant_code',
                'value' => 'siYxylRjSPwyUDLWDo/Dsw=='
            ],
            [
                'payment_method_id' => 2,
                'key' => 'security_key',
                'value' => '3210548d-5d93-453d-8dba-a1bdc5c2eb11'
            ],
            [
                'payment_method_id' => 1,
                'key' => 'class_name',
                'value' => 'Modules\Payment\Http\Services\FawryPlusPaymentService'
            ],
            [
                'payment_method_id' => 1,
                'key' => 'testing_uri',
                'value' => 'https://atfawry.fawrystaging.com/fawrypay-api/api/payments/init'
            ],
            [
                'payment_method_id' => 1,
                'key' => 'FAWRY_PR_URI',
                'value' => 'https://atfawry.fawrystaging.com/fawrypay-api/api/payments/init'
            ],
            [
                'payment_method_id' => 1,
                'key' => 'merchant_code',
                'value' => 'siYxylRjSPwyUDLWDo/Dsw=='
            ],
            [
                'payment_method_id' => 1,
                'key' => 'security_key',
                'value' => '3210548d-5d93-453d-8dba-a1bdc5c2eb11'
            ],
        ];

        foreach ($rows as $item) {
            $paymentMethodIng = PaymentMethodIntegration::where('key', $item['key'])
                ->where('payment_method_id', $item['payment_method_id'])->first();
            if (!$paymentMethodIng) {
                $paymentMethodIng = new PaymentMethodIntegration();
                $paymentMethodIng->payment_method_id = $item['payment_method_id'];
                $paymentMethodIng->key = $item['key'];
                $paymentMethodIng->value = $item['value'];
                $paymentMethodIng->save();
            } else {
                $paymentMethodIng->payment_method_id = $item['payment_method_id'];
                $paymentMethodIng->key = $item['key'];
                $paymentMethodIng->value = $item['value'];
                $paymentMethodIng->save();
            }
        }
    }
}
