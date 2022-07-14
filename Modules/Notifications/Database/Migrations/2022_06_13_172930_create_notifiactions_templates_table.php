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
        Schema::create('notifiactions_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('key')->unique();
            $table->text('body');
            $table->string('title')->nullable();
            $table->string('url')->nullable();
            $table->string('icon')->nullable();
            $table->string('type')->default('info')->nullable();
            $table->timestamps();
        });

        Schema::table('user_notifications', function (Blueprint $table) {
            if (Schema::hasColumn('notifiactions_templates', 'template_id')) {
                $table->unsignedBigInteger('template_id');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifiactions_templates');
        Schema::table('user_notifications', function (Blueprint $table) {
            if (Schema::hasColumn('notifiactions_templates', 'template_id')) {
                $table->dropColumn('template_id');
            }
        });
    }
};
