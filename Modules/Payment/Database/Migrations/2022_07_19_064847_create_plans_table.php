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
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            // FIXME: add a new form_id to list a form maybe json object
            $table->unsignedBigInteger('payment_method');

            //Plans Data
            $table->string('name');
            $table->string('icons')->nullable();
            $table->string('plan_user_type')->default('co');
            $table->text('descriptions')->nullable();

            //Price
            $table->double('price_monthly')->unsigned()->default(0);
            $table->double('price_yearly')->unsigned()->default(0);


            //Plan Options
            $table->boolean('is_public')->default(true);
            $table->boolean('is_recurring')->default(false);
            $table->boolean('is_default')->default(false);
            $table->boolean('is_active')->default(true);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('plans');
    }
};
