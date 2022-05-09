<?php

namespace io3x1\ViltRoles\Models;

use App\Models\User as ModelsUser;
use Spatie\Permission\Traits\HasRoles;

class User extends ModelsUser
{
    use HasRoles;

    protected $guard_name = 'sanctum';
}
