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
        Schema::create('user_notifications', function (Blueprint $table) {
            $table->id();

            //If Selected Record On the model
            $table->string('model_type')->nullable();
            $table->unsignedBigInteger('model_id')->nullable();

            //Else on public
            $table->string('title');
            $table->string('url')->nullable();
            $table->string('icon')->default('bx bx-user')->nullable();
            $table->string('description')->nullable();
            $table->string('type')->default('info');
            $table->string('privacy')->default('public');

            //If Created By
            $table->unsignedBigInteger('created_by')->nullable();

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
        Schema::dropIfExists('user_notifications');
    }
};
