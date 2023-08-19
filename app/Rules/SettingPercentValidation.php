<?php

namespace App\Rules;

use App\Models\Mark;
use Closure;
use Hamcrest\Type\IsNumeric;
use Illuminate\Contracts\Validation\ValidationRule;


class SettingPercentValidation implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $msg = "入力値に誤りがあります。";
        if(!is_array($value)) $fail($msg);

        foreach($value as $item){
            if(!isset($item["mark_id"]) || !isset($item["percent"])) $fail($msg);

            $mark = Mark::find($item["mark_id"]);
            if(!$mark) $fail($msg);

            if(!is_numeric($item["percent"])) $fail($msg);

            // 前のvalueと比べて。。。
        }
    }
}
