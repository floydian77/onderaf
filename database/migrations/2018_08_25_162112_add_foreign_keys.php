<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKeys extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        // Schema::table('users', function (Blueprint $table) {
        //     $table->unsignedInteger('organisation_id');
        //     $table->foreign('organisation_id')->references('id')->on('organisations')->nullable();
        // });

        // Schema::table('categories', function (Blueprint $table) {
        //     $table->unsignedInteger('parent_id');
        //     $table->foreign('parent_id')->references('id')->on('categories')->nullable();
        // });
        // Schema::table('conditions', function (Blueprint $table) {
        //     $table->unsignedInteger('parent_id');
        //     $table->foreign('parent_id')->references('id')->on('conditions')->nullable();
        // });
        Schema::table('entries', function (Blueprint $table) {
            $table->string('layout');
            $table->foreign('layout')->references('id')->on('layouts');
        });
        // Schema::table('form_entries', function (Blueprint $table) {
        //     $table->string('form_layout');
        //     $table->foreign('form_layout')->references('name')->on('form_layouts');
        // });
        // Schema::table('users', function (Blueprint $table) {
        //     $table->unsignedInteger('initiative_id');
        //     $table->foreign('initiative_id')->references('id')->on('initiatives')->nullable();
        // });
        // Schema::table('form_entries', function (Blueprint $table) {
        //     $table->unsignedInteger('initiative_id');
        //     $table->foreign('initiative_id')->references('id')->on('initiatives');
        // });
        // Schema::table('initiatives', function (Blueprint $table) {
        //     $table->unsignedInteger('user_id');
        //     $table->foreign('user_id')->references('id')->on('users');
        // });
        // Schema::table('users', function (Blueprint $table) {
        //     $table->unsignedInteger('organisation_id');
        //     $table->foreign('organisation_id')->references('id')->on('organisations')->nullable();
        // });
        // Schema::table('form_entries', function (Blueprint $table) {
        //     $table->unsignedInteger('form_layout');
        //     $table->foreign('form_layout')->references('id')->on('form_layouts');
        // });

        // category_initiative pivot
        // category_organisation pivot

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
