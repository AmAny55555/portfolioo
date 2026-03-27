<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\About;

class AboutSeeder extends Seeder
{
    public function run(): void
    {
        About::create([
            'title' => 'من نحن',
            'description' => 'شركة المستقبل تك متخصصة في صيانة الأجهزة الإلكترونية، والتسويق الرقمي، والبرمجيات، مع تقديم خدمات عالية الجودة وبأسعار مناسبة.'
        ]);
    }
}
