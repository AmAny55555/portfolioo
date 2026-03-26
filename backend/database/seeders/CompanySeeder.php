<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Company;

class CompanySeeder extends Seeder
{
    public function run(): void
    {
        Company::create([
            'name' => 'المستقبل تك للخدمات التكنولوجية',
            'description' => 'شركة المستقبل تك هي شركة متخصصة في تقديم الحلول التكنولوجية المتكاملة، حيث نقدم خدمات صيانة الأجهزة الإلكترونية، والتسويق الرقمي، وتطوير البرمجيات، بالإضافة إلى التدريب والكورسات التقنية. نسعى لتقديم أفضل جودة بأحدث التقنيات لمساعدة الأفراد والشركات على التطور والنجاح في العصر الرقمي.',
            'logo' => null,
        ]);
    }
}
