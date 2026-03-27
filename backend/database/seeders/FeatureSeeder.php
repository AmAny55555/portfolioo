<?php

namespace Database\Seeders;

use App\Models\Feature;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FeatureSeeder extends Seeder
{
    public function run(): void
    {
        // 🔥 يمنع التكرار
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Feature::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

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
