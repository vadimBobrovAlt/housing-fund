<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Resources\Auth\LoginResource;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\SignUpRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        abort_if(!Auth::attempt($request->validated()), 401,  __('auth.unauthorized'));
        return response()->json(new LoginResource(null));
    }

    public function signUp(SignUpRequest $request)
    {
        User::create($request->validated());
        return response()->json(null,201);
    }

    public function me()
    {
        return response()->json(Auth::user());
    }

    public function logout()
    {
        return response()->json(request()->user()->currentAccessToken()->delete());
    }
}
