<?php

namespace Database\Factories;

use App\Models\Loader;
use Illuminate\Database\Eloquent\Factories\Factory;

class LoaderFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Loader::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'start_date' => $this->faker->date('Y-m-d H:i:s'),
        'end_date' => $this->faker->date('Y-m-d H:i:s'),
        'time' => $this->faker->word,
        'created_at' => $this->faker->date('Y-m-d H:i:s'),
        'updated_at' => $this->faker->date('Y-m-d H:i:s')
        ];
    }
}
