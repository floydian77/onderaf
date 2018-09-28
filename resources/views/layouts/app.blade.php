<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Onderaf') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>


    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <!-- <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css"> -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600" rel="stylesheet" type="text/css">
    <!-- <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet" type="text/css"> -->

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <app></app>
        <div id="userDetails">
            @if (Auth::guest())
                <a href="{{ route('login') }}">Login</a>
                <!-- <a href="{{ route('register') }}">Register</a> -->

            @else
                {{ Auth::user()->name }}
                <a href="{{ route('logout') }}">Logout</a>
            @endif
        </div>
    </div>
</body>

<script>
    // temp
    let subdomain = location.hostname.split('.').shift();
    if (subdomain == 'admin') {
        var loggedIn = "{{{ (auth()->check()) ? true : false }}}";
        if (!!!loggedIn) {
            window.location.href = "{{URL::to('login')}}"
        }
    }
    else if (subdomain == 'front') {
        // if (window.location.href != "http://front.unfu.io/#/entries/create/layout/1") 
        // {
        window.location.href = "/#/entries/create/layout/1";
        document.getElementById("userDetails").style.display = 'none';
        window.onhashchange = function() { 
            window.location.href = "/#/entries/create/layout/1";
        }
        // }
    }

</script>
</html>
