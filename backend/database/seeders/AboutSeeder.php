<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\About;
use Illuminate\Support\Facades\DB;

class AboutSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        About::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        About::create([
            'title' => 'من نحن',
            'description' => 'شركة المستقبل تك متخصصة في صيانة الأجهزة الإلكترونية، والتسويق الرقمي، والبرمجيات، مع تقديم خدمات عالية الجودة وبأسعار مناسبة.',
        ]);
    }
}
