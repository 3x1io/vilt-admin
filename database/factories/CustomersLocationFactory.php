<?php

namespace Database\Factories;

use App\Models\CustomersLocation;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomersLocationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CustomersLocation::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'customer_id' => $this->faker->word,
        'address' => $this->faker->text,
        'country' => $this->faker->word,
        'city' => $this->faker->word,
        'area' => $this->faker->word,
        'home' => $this->faker->randomDigitNotNull,
        'flat' => $this->faker->randomDigitNotNull,
        'floor' => $this->faker->randomDigitNotNull,
        'active' => $this->faker->word,
        'created_at' => $this->faker->date('Y-m-d H:i:s'),
        'updated_at' => $this->faker->date('Y-m-d H:i:s')
        ];
    }
}
