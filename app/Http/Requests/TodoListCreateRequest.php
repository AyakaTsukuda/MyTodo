<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TodoListCreateRequest extends FormRequest
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
            "title"                 => ["max:255"],
            "rate_label_setting_id" => ["exists:rate_label_settings,id"]
        ];
    }
}
