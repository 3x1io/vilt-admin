<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_method_integrations', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('payment_method_id');
            $table->string('key');
            $table->string('value');

            $table->timestamps();
        });

        Schema::table('payment_method_integrations', function (Blueprint $table) {
            $table->foreign('payment_method_id')->references('id')->on('payment_methods');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_method_integrations');
    }
};
