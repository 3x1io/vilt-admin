<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Make a userSeeder to create a defualt user for the admin
        $user = User::find(1);
        if (!$user) {
            $user = User::create([
                'name' => 'Admin',
                'email' => 'info@3x1.io',
                'password' => bcrypt("3x1@2022")
            ]);
        }
    }
}
