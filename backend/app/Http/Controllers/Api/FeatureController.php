<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Feature;

class FeatureController extends Controller
{
    public function index()
    {
        return response()->json(
            Feature::select('id', 'title')->latest()->get()
        );
    }
}
