<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RateSetting extends Model
{
    use HasFactory;

    protected $fillable = [
        "mark_id",
        "rate_label_setting_id",
        "percent"
    ];


    public function mark(): BelongsTo
    {
        return $this->belongsTo(Mark::class);
    }


    public function rateLabelSetting(): BelongsTo
    {
        return $this->belongsTo(rateLabelSetting::class);
    }
}
