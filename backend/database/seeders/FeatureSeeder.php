<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Seeder;

class FeatureSeeder extends Seeder
{
    public function run(): void
    {
        $features = [
            ['title' => 'خبرة واحترافية'],
            ['title' => 'دعم فني سريع'],
            ['title' => 'أسعار مناسبة'],
            ['title' => 'جودة عالية'],
        ];

        foreach ($features as $feature) {
            Feature::create($feature);
        }
    }
}
