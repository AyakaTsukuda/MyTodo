<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TodoList extends Model
{
    use HasFactory, SoftDeletes;

    

}

// $table->id();
//             $table->unsignedBigInteger("user_id");
//             $table->string("title")->nullable();
//             $table->unsignedBigInteger("current_mark_id")->default(1);
//             $table->unsignedBigInteger("rate_label_setting_id");
//             $table->timestamps();
//             $table->softDeletes();