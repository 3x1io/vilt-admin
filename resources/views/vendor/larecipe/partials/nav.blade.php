<div class="fixed z-40 pin-t pin-x">
    <div class="h-1 text-white bg-gradient-primary"></div>

    <nav class="flex items-center justify-between h-16 text-black shadow-xs bg-navbar">
        <div class="flex items-center flex-no-shrink">
            <a href="{{ url('/') }}" class="flex items-center mx-4 text-black flex-no-shrink">
                @include("larecipe::partials.logo")

                <p class="inline-block mx-1 font-semibold text-grey-dark">
                    Vilt Admin Docs <small>v1.00</small>
                </p>
            </a>

            <div class="switch">
                <input type="checkbox" name="1" id="1" v-model="sidebar" class="switch-checkbox" />
                <label class="switch-label" for="1"></label>
            </div>
        </div>

        <div class="flex items-center block mx-4">
            @if(config('larecipe.search.enabled'))
            <larecipe-button id="search-button" :type="searchBox ? 'primary' : 'link'" @click="searchBox = ! searchBox"
                class="px-4">
                <i class="fas fa-search" id="search-button-icon"></i>
            </larecipe-button>
            @endif

            <larecipe-button tag="a" href="https://github.com/3x1io/vilt-admin" target="__blank" type="black"
                class="px-4 mx-2">
                <i class="fab fa-github"></i>
            </larecipe-button>

            {{-- versions dropdown --}}
            <larecipe-dropdown>
                <larecipe-button type="primary" class="flex">
                    {{ $currentVersion }} <i class="mx-1 fa fa-angle-down"></i>
                </larecipe-button>

                <template slot="list">
                    <ul class="list-reset">
                        @foreach ($versions as $version)
                        <li class="py-2 hover:bg-grey-lightest">
                            <a class="px-6 text-grey-darkest"
                                href="{{ route('larecipe.show', ['version' => $version, 'page' => $currentSection]) }}">{{ $version }}</a>
                        </li>
                        @endforeach
                    </ul>
                </template>
            </larecipe-dropdown>
            {{-- /versions dropdown --}}

            @auth
            {{-- account --}}
            <larecipe-dropdown>
                <larecipe-button type="white" class="ml-2">
                    {{ auth()->user()->name ?? 'Account' }} <i class="fa fa-angle-down"></i>
                </larecipe-button>

                <template slot="list">
                    <form action="/logout" method="POST">
                        {{ csrf_field() }}

                        <button type="submit" class="inline-flex px-4 py-2 text-white bg-danger"><i
                                class="mr-2 fa fa-power-off"></i> Logout</button>
                    </form>
                </template>
            </larecipe-dropdown>
            {{-- /account --}}
            @endauth
        </div>
    </nav>
</div>
