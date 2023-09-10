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
        Schema::create('todo_lists', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id")->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->string("title")->nullable();
            $table->foreignId("current_mark_id")->default(1)->cascadeOnUpdate()->nullOnDelete()->constrained("marks");
            $table->foreignId("rate_label_setting_id")->cascadeOnUpdate()->nullOnDelete()->constrained();
            $table->integer("current_percent")->default("0");
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('todo_lists');
    }
};
