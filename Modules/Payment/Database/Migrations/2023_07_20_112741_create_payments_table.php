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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('approved_by')->nullable();

            $table->unsignedBigInteger('model_id');
            $table->string('model_type');

            $table->unsignedBigInteger('plan_id')->nullable();
            $table->unsignedBigInteger('bank_id')->nullable();
            $table->unsignedBigInteger('payment_method_id')->nullable();
            $table->unsignedBigInteger('payment_status_id')->nullable();

            //Amounts
            $table->string('transaction_code')->unique();
            $table->string('payment_type')->default('online');
            $table->double('amount')->unsigned()->default(0);
            $table->string('notes')->nullable();

            //Payment Online
            $table->string('vendor')->nullable();
            $table->string('vendor_id')->nullable();
            $table->string('vendor_status')->nullable();

            $table->timestamps();
        });

        Schema::table('payments', function (Blueprint $table) {
            $table->foreign('approved_by')->references('id')->on('users');
            $table->foreign('plan_id')->references('id')->on('plans');
            $table->foreign('bank_id')->references('id')->on('banks');
            $table->foreign('payment_method_id')->references('id')->on('payment_methods');
            $table->foreign('payment_status_id')->references('id')->on('payment_status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
};
