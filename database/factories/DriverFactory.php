<?php

namespace Database\Factories;

use App\Models\Driver;
use Illuminate\Database\Eloquent\Factories\Factory;

class DriverFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Driver::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'customer_id' => $this->faker->word,
        'governorate_id' => $this->faker->word,
        'area_id' => $this->faker->word,
        'created_by' => $this->faker->word,
        'updated_by' => $this->faker->word,
        'name' => $this->faker->word,
        'phone' => $this->faker->word,
        'plate_number' => $this->faker->word,
        'max_qty' => $this->faker->randomDigitNotNull,
        'lang' => $this->faker->word,
        'lng' => $this->faker->word,
        'lat' => $this->faker->word,
        'geo' => $this->faker->text,
        'street' => $this->faker->word,
        'home' => $this->faker->word,
        'mark' => $this->faker->word,
        'created_at' => $this->faker->date('Y-m-d H:i:s'),
        'updated_at' => $this->faker->date('Y-m-d H:i:s')
        ];
    }
}
