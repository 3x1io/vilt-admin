<?php

namespace Database\Factories;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Customer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'governorate_id' => $this->faker->word,
        'area_id' => $this->faker->word,
        'created_by' => $this->faker->word,
        'updated_by' => $this->faker->word,
        'approved_by' => $this->faker->word,
        'request_id' => $this->faker->word,
        'name' => $this->faker->word,
        'phone' => $this->faker->word,
        'email' => $this->faker->word,
        'address' => $this->faker->word,
        'tax_number' => $this->faker->word,
        'contact_title' => $this->faker->word,
        'contact_name' => $this->faker->word,
        'contact_number' => $this->faker->word,
        'sap_customer_code' => $this->faker->word,
        'sap_customer_group_code' => $this->faker->word,
        'sap_marketing_group_code' => $this->faker->word,
        'sap_pin' => $this->faker->word,
        'password' => $this->faker->word,
        'otp_code' => $this->faker->word,
        'otp_activated_at' => $this->faker->date('Y-m-d H:i:s'),
        'email_verified_at' => $this->faker->date('Y-m-d H:i:s'),
        'remember_token' => $this->faker->word,
        'balance' => $this->faker->randomDigitNotNull,
        'in' => $this->faker->randomDigitNotNull,
        'out' => $this->faker->randomDigitNotNull,
        'lang' => $this->faker->word,
        'lng' => $this->faker->word,
        'lat' => $this->faker->word,
        'geo' => $this->faker->text,
        'street' => $this->faker->word,
        'home' => $this->faker->word,
        'mark' => $this->faker->word,
        'info' => $this->faker->text,
        'activated' => $this->faker->word,
        'blocked' => $this->faker->word,
        'approved_at' => $this->faker->date('Y-m-d H:i:s'),
        'deleted_at' => $this->faker->date('Y-m-d H:i:s'),
        'created_at' => $this->faker->date('Y-m-d H:i:s'),
        'updated_at' => $this->faker->date('Y-m-d H:i:s')
        ];
    }
}
