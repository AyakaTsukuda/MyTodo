<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rate_label_settings', function (Blueprint $table) {
            $table->id();
            $table->string("label_name");
            $table->integer("num_of_use")->nullable()->default(0);
            $table->foreignId("user_id")->nullable()->default(null)->cascadeOnUpdate()->cascadeOnDelete()->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rate_label_settings');
    }
};
