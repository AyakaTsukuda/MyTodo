<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class TodoList extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "user_id",
        "title",
        "current_mark_id",
        "rate_label_setting_id",
        "created_at"
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


    public function currentMark(): BelongsTo
    {
        return $this->belongsTo(Mark::class);
    }


    public function rateLabelSetting(): BelongsTo
    {
        return $this->belongsTo(rateLabelSetting::class);
    }


    /* ===========
        Scope
    =========== */
    public function scopeMine(Builder $builder)
    {
        $builder->select("todo_lists.*")
            ->where("user_id", Auth::user()->id);
    }
}
