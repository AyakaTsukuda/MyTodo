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
        Schema::create('todo_list_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId("todo_list_id")->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->tinyInteger("checked")->default(0);
            $table->string("item",255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('todo_list_items');
    }
};
