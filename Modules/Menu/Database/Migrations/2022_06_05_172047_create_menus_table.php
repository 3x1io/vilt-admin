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
        Schema::create('menus', function (Blueprint $table) {
            $table->id();

            //Menu Title
            $table->string('title');
            $table->string('description')->nullable();
            $table->string('icon')->default('bx bxs-circle')->nullable();

            //Lang & URL
            $table->string('lang')->nullable();
            $table->string('route')->nullable();
            $table->string('url')->default('#')->nullable();

            //Type & Options
            $table->string('type')->default('route')->nullable();
            $table->integer('sort')->default(0)->nullable();
            $table->boolean('target')->default(false)->nullable();
            $table->string('can')->default('true')->nullable();
            $table->string('badge')->nullable();
            $table->double('counter')->default(0)->nullable();

            //GROUP
            $table->unsignedBigInteger('group_id')->nullable();

            $table->timestamps();
        });

        Schema::table('menus',  function (Blueprint $table) {
            $table->foreign('group_id')->references('id')->on('menus_groups')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menus');
    }
};
