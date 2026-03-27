<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Product::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        Product::create([
            'name' => 'رسيفر HD',
            'price' => 500,
            'image' => 'receiver.jpg',
        ]);

        Product::create([
            'name' => 'شاشة 32 بوصة',
            'price' => 3000,
            'image' => 'tv.jpg',
        ]);

        Product::create([
            'name' => 'لابتوب مستعمل',
            'price' => 4500,
            'image' => 'laptop.jpg',
        ]);
    }
}
