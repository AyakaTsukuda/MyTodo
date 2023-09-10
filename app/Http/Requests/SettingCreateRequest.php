<?php

namespace App\Http\Requests;

use App\Rules\SettingPercentValidation;
use Illuminate\Foundation\Http\FormRequest;

class SettingCreateRequest extends FormRequest
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
            "percents" => ["required", new SettingPercentValidation],
            "label"    => ["required", "string", "max:255"],
        ];
    }
}
