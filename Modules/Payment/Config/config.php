<?php

return [
    
    'name' => 'Payment',

    /*
     *
     * Fawry section
     *
     *
     * */

    /*
    |--------------------------------------------------------------------------
    | Debug option
    |--------------------------------------------------------------------------
    | Accept boolean value , and toggle between the production endpoint and sandbox
    */

    'debug' => env('FAWRY_DEBUG', true),

    /*
    |--------------------------------------------------------------------------
    | uri links option
    |--------------------------------------------------------------------------
    | Set testing uri and pr uri for pay by fawry session checkout
    */

    'testing_uri' => env('FAWRY_TESTING_URI','https://atfawry.fawrystaging.com/fawrypay-api/api/payments/init'),
    
    'pr_uri' => env('FAWRY_PR_URI','https://atfawry.fawrystaging.com/fawrypay-api/api/payments/init'),

    /*
    |--------------------------------------------------------------------------
    | Fawry Keys
    |--------------------------------------------------------------------------
    |
    | The Fawry publishable key and secret key give you access to Fawry's
    | API.
    */

    'merchant_code' => env('FAWRY_MERCHANT_CODE','siYxylRjSPwyUDLWDo/Dsw=='),

    'security_key' => env('FAWRY_SECURITY_KEY','3210548d-5d93-453d-8dba-a1bdc5c2eb11'),


];