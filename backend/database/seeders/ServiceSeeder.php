<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    public function run(): void
    {
        Service::create([
            'title' => 'صيانة الأجهزة الإلكترونية',
            'description' => 'نقدم خدمات صيانة متكاملة لجميع أنواع الشاشات (LED - LCD)، والرسيفر، وأجهزة DVR والكاميرات، باستخدام أحدث الأجهزة وقطع غيار أصلية لضمان أفضل أداء.',
            'image' => 'services/elctronic.jpg',
        ]);

        Service::create([
            'title' => 'التسويق الرقمي',
            'description' => 'نساعدك في نمو مشروعك من خلال تصميم إعلانات احترافية، إدارة صفحات السوشيال ميديا، إنشاء محتوى جذاب، وعمل حملات إعلانية ممولة.',
            'image' => 'services/marketing.jpg',
        ]);

        Service::create([
            'title' => 'تصميم الجرافيك والمونتاج',
            'description' => 'تصميم صور إعلانية، لوجوهات، فيديوهات مونتاج، وانيميشن بجودة عالية تناسب جميع الأنشطة التجارية.',
            'image' => 'services/graphic.jpg',
        ]);

        Service::create([
            'title' => 'تطوير البرمجيات',
            'description' => 'تصميم وتطوير مواقع إلكترونية وبرامج مخصصة حسب احتياجات العملاء، باستخدام أحدث التقنيات.',
            'image' => 'services/code.jpg',
        ]);

        Service::create([
            'title' => 'الكورسات والتدريب',
            'description' => 'نقدم دورات تدريبية في الإلكترونيات، صيانة الأجهزة، والتقنيات الحديثة للمبتدئين والمحترفين.',
            'image' => 'services/trainnig.jpg',
        ]);
    }
}
