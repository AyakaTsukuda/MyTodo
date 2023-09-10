<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\SettingPercentValidation;


class SettingUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "rate_label_setting_id" => ["required", "exists:rate_label_settings,id"],
            "percents" => ["required", new SettingPercentValidation],
            "label"    => ["required", "string", "max:255"],
        ];
    }
}
