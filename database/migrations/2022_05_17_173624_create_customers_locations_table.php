<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers_locations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id');

            $table->text('address');
            $table->string('country');
            $table->string('city');
            $table->string('area');
            $table->integer('home');
            $table->integer('flat');
            $table->integer('floor');
            $table->boolean('active')->default(false);
            $table->timestamps();
        });

        Schema::table('customers_locations', function (Blueprint $table) {
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers_locations');
    }
};
