- [Create User API](#create)
- [Activate User API](#activate)
- [Resend Activation API](#resend)
- [Login API](#login)
- [Update User API](#profile)
- [Update Password API](#password)
- [Forget Password API](#forget)
- [Reset Password API](#reset)


# Auth APIs
our framework make it easy to start development REST APIs by providing your a hug of apis for auth user, thanks for Laravel Sanctum to provide the tokens to secure our apis requests
<hr>

<a name="create">
## Create User API
</a>

<larecipe-swagger endpoint="/api/register" default-method="post" :default-params="{ 
    'name': 'fady',
    'email': 'info@3x1.io',
    'phone': '+201207860084',
    'password': '3x1@2021',
    'password_confirmation': '3x1@2021',
    'username': '3x1' }"></larecipe-swagger>
<hr>

<a name="activate">
## Activate User API
</a>

<larecipe-swagger endpoint="/api/email/verify" default-method="post" :default-params="{ 
    'email': 'info@3x1.io',
    'code': 615823
     }"></larecipe-swagger>
<hr>

<a name="resend">
## Resend Activation API
</a>

<larecipe-swagger endpoint="/api/resend" default-method="post" :default-params="{ 
    'email': 'info@3x1.io'
     }"></larecipe-swagger>
<hr>

<a name="login">
## Login API
</a>

<larecipe-swagger endpoint="/api/login" default-method="post" :default-params="{ 
    'email': 'info@3x1.io',
    'password': '3x1@2021'
     }"></larecipe-swagger>
<hr>

<a name="profile">
## Update User API
</a>

<larecipe-swagger :default-headers="{ 'Content-Type': 'application/json' }" :has-auth-header="{ 'Authorization': 'Bearer token_here' }" endpoint="/api/user" default-method="post" :default-params="{ 
    'secret_key': '2100c88a-62de-485f-8b79-33a853771bb7',
    'email': 'info2@3x1.io',
     }"></larecipe-swagger>
<hr>

<a name="password">
## Update Password API
</a>

<larecipe-swagger :default-headers="{ 'Content-Type': 'application/json' }" :has-auth-header="{ 'Authorization': 'Bearer token_here' }" endpoint="/api/user/password" default-method="post" :default-params="{ 
    'secret_key': '2100c88a-62de-485f-8b79-33a853771bb7',
    'password': '3x1@2021',
    'password_confirmation': '3x1@2021',
     }"></larecipe-swagger>
<hr>

<a name="forget">
## Forget Password API
</a>

<larecipe-swagger endpoint="/api/forgot" default-method="post" :default-params="{ 
    'email': 'info2@3x1.io',
     }"></larecipe-swagger>
<hr>


<a name="reset">
## Reset Password API
</a>

<larecipe-swagger endpoint="/api/reset" default-method="post" :default-params="{ 
    'email': 'info2@3x1.io',
    'code': 615823,
    'password': '3x1@2021',
    'password_confirmation': '3x1@2021'
     }"></larecipe-swagger>
<hr>

