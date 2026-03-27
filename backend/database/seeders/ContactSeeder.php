<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Contact;
use Illuminate\Support\Facades\DB;

class ContactSeeder extends Seeder
{
    public function run(): void
    {

        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Contact::truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        Contact::create([
            'manager_name' => 'المهندس محمد حافظ',
            'phone' => '01283087083',
            'whatsapp' => '01283087083',
            'location' => 'مصر',
        ]);
    }
}
