<?php

namespace App\Models;

use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
        "current_percent",
        "created_at"
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


    public function currentMark(): BelongsTo
    {
        return $this->belongsTo(Mark::class)->with("supportMessages");
    }


    public function rateLabelSetting(): BelongsTo
    {
        return $this->belongsTo(rateLabelSetting::class);
    }


    public function todoListItems(): HasMany
    {
        return $this->hasMany(todoListItem::class);
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
