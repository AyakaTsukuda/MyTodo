<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

class Mark extends Model
{
    use HasFactory;

    protected $fillable =[
        "name",
        "class_name",
        "created_at"
    ];


    public function todoLists(): HasMany
    {
        return $this->hasMany(TodoList::class);
    }


    public function supportMessages(): HasMany
    {
        return $this->hasMany(SupportMessage::class);
    }


    public function rateSettings(): HasMany
    {
        return $this->hasMany(RateSetting::class);
    }


    public function rateLabelSettings(): HasManyThrough
    {
        return $this->through("rate_settings")->has("rate_label_settings");
    }
}
