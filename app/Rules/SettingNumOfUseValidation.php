<?php

namespace App\Rules;

use App\Models\RateLabelSetting;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class SettingNumOfUseValidation implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $rate_label_setting = RateLabelSetting::find($value);
        if(0 < $rate_label_setting->num_of_use) $fail("この設定を利用したTodoリストがある為、削除できません。");
    }
}
