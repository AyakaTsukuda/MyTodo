<?php

namespace App\Http\Controllers;

use App\Http\Requests\SettingCreateRequest;
use App\Models\Mark;
use App\Models\RateLabelSetting;
use App\Models\RateSetting;
use App\Rules\SettingNumOfUseValidation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;


class SettingController extends Controller
{
    public function index()
    {
        $rate_label_settings = RateLabelSetting::with("rateSettings")->mine()->get();
        $marks = Mark::all();

        return Inertia::render("Setting/Index")
            ->with("rateLabelSettings", $rate_label_settings)
            ->with("marks", $marks);
    }


    public function store(SettingCreateRequest $request)
    {
        $rate_label_settings = RateLabelSetting::create([
            "label_name" => $request->label,
            "user_id" => Auth::user()->id
        ]);

        foreach($request->percents as $item){
            RateSetting::create([
                "mark_id"               => $item["mark_id"],
                "rate_label_setting_id" => $rate_label_settings->id,
                "percent"               => $item["percent"],
            ]);
        }

        return redirect()->route("setting.index");
    }


    public function destroy(Request $request)
    {
        $validated = $request->validate([
            'id' => ['required','numeric','exists:rate_label_settings,id',new SettingNumOfUseValidation],
        ]);

        $rateLabelSetting = RateLabelSetting::findOrFail($request->id);
        if($rateLabelSetting->user_id != Auth::user()->id){
            abort(404);
        }

        $rateLabelSetting->delete();
        return redirect()->route("setting.index");
    }
}
