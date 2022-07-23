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
        Schema::table('notifiactions_templates', function (Blueprint $table) {
            $table->json('providers')->nullable();
            $table->string('action')->default('manual')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('notifiactions_templates', function (Blueprint $table) {
            $table->dropColumn('providers');
            $table->dropColumn('action');
        });
    }
};
