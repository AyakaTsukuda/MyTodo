<?php

namespace App\Http\Controllers;

use App\Models\RateLabelSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function index()
    {
        $rate_label_settings = RateLabelSetting::with("rateSettings")->mine()->get();

        return Inertia::render("Setting/Index")
            ->with("rateLabelSettings", $rate_label_settings);
    }
}
