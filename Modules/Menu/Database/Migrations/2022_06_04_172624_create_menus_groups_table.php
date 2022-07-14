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
        Schema::create('menus_groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('type')->default('group')->nullable();
            $table->string('icon')->default('bx bxs-circle')->nullable();
            $table->string('badge')->nullable();
            $table->double('counter')->default(0)->nullable();
            $table->string('can')->default('true')->nullable();
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
        Schema::dropIfExists('menus_groups');
    }
};
