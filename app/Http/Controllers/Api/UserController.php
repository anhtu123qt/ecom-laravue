<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login (Request $request) {
        $credentials = request(['email', 'password']);

        if (!$token = Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return response()->json(compact('token'));
    }
    public function me(){
        return response()->json(['user'=>auth()->user()]);
    }
    public function logout(){
        Auth::logout();
        return response()->json(['message' => 'Logged Out!']);
    }
}
