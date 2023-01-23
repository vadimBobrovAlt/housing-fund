<?php

namespace App\Http\Controllers\Resources\Auth;

use Illuminate\Http\Resources\Json\JsonResource;

class LoginResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param $req
     * @return array
     */
    public function toArray($req)
    {
        return [
            'token' => request()->user()->createToken('AUTH_TOKEN')->plainTextToken,
        ];
    }
}
