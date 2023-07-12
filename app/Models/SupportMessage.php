<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SupportMessage extends Model
{
    use HasFactory;

    protected $fillable = [
        "mark_id",
        "message"
    ];


    public function mark(): BelongsTo
    {
        return $this->belongsTo(Mark::class);
    }
}
