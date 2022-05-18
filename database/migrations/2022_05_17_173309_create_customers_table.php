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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('group_id')->nullable();

            $table->string('name');
            $table->string('phone')->unique();
            $table->string('email')->unique();
            $table->boolean('login')->default(false);
            $table->string('password');
            $table->text('address')->nullable();
            $table->timestamps();
        });

        Schema::table('customers', function (Blueprint $table) {
            $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
};
