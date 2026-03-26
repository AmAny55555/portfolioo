<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;

class ContactController extends Controller
{
    public function index()
    {
        return response()->json(
            Contact::latest()->first(),
            200,
            [],
            JSON_UNESCAPED_UNICODE
        );
    }
}
