<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Illuminate\Support\Facades\Auth;

class RateLabelSetting extends Model
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
        return $this->hasMany(RateSetting::class)->with("mark");
    }


    public function mark(): HasOneThrough
    {
        return $this->through("rate_settings")->has("marks");
    }


    public function todoList(): HasOne
    {
        return $this->hasOne(TodoList::class);
    }


    /* ===========
        Scope
    =========== */
    public function scopeMine(Builder $builder)
    {
        $builder
            ->select("rate_label_settings.*")
            ->where("user_id", Auth::user()->id)
            ->orWhere("user_id", null);
    }
}