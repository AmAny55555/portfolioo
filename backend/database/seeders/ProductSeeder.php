<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
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
