<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;

class RateLavelSetting extends Model
{
    use HasFactory;

    protected $fillable =[
        "label_name",
        "num_of_use",
        "user_id",
        "created_at"
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


    public function rateSettings(): HasMany
    {
        return $this->hasMany(RateSetting::class);
    }


    public function mark(): HasOneThrough
    {
        return $this->through("rate_settings")->has("marks");
    }


    public function todoList(): HasOne
    {
        return $this->hasOne(TodoList::class);
    }
}