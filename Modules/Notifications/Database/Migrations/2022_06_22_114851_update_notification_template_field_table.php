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
        if (!Schema::hasColumn('user_notifications', 'template_id')) {
            Schema::table('user_notifications', function (Blueprint $table) {
                $table->unsignedBigInteger('template_id');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (!Schema::hasColumn('user_notifications', 'template_id')) {
            Schema::table('user_notifications', function (Blueprint $table) {
                $table->dropColumn('template_id');
            });
        }
    }
};
