<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RateSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("rate_settings")->insert([
            ["rate_label_setting_id" => 1, "mark_id" => 1, "percent" => 20, "created_at" => now()],
            ["rate_label_setting_id" => 1, "mark_id" => 2, "percent" => 40, "created_at" => now()],
            ["rate_label_setting_id" => 1, "mark_id" => 3, "percent" => 60, "created_at" => now()],
            ["rate_label_setting_id" => 1, "mark_id" => 4, "percent" => 80, "created_at" => now()],
            ["rate_label_setting_id" => 1, "mark_id" => 5, "percent" => 99, "created_at" => now()],
            ["rate_label_setting_id" => 1, "mark_id" => 6, "percent" => 100, "created_at" => now()],
        ]);
    }
}
