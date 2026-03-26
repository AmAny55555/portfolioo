<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Contact;

class ContactSeeder extends Seeder
{
    public function run(): void
    {
        Contact::create([
            'manager_name' => 'المهندس محمد حافظ',
            'phone' => '01283087083',
            'whatsapp' => '01283087083',
            'location' => 'مصر',
        ]);
    }
}
