<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MarkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("marks")->insert([
            ["name" => "seed", "class_name"   => "fa-solid fa-lemon",       "created_at" => now()],
            ["name" => "sprout", "class_name" => "fa-solid fa-seedling",    "created_at" => now()],
            ["name" => "leaf", "class_name"   => "fa-brands fa-pagelines",  "created_at" => now()],
            ["name" => "tree", "class_name"   => "fa-solid fa-tree",        "created_at" => now()],
            ["name" => "fruit", "class_name"  => "fa-solid fa-apple-whole", "created_at" => now()],
            ["name" => "crown", "class_name"  => "fa-solid fa-crown",       "created_at" => now()]
        ]);
    }
}
