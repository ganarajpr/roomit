angular.module('MyApp', ['ngResource', 'ngMessages', 'ui.router', 'ui.bootstrap', 'satellizer', 'google.places'])
    .config(function ($stateProvider, $urlRouterProvider, $authProvider,$locationProvider) {
        var startup = true;
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/partials/home.html',
                controller: 'HomePageController',
                resolve: {
                    authenticated: function ($q, $location, $auth) {
                        if( startup ){
                            $auth.logout();
                            startup = false;
                        }

                        var deferred = $q.defer();
                        if( $auth.isAuthenticated()){
                            $location.path('/onlogin');
                        }
                        else{
                            deferred.resolve();
                        }
                        return deferred.promise;
                    }
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: '/partials/login.html',
                controller: 'LoginCtrl'
            })
            .state('signup', {
                url: '/signup',
                templateUrl: '../partials/signup.html',
                controller: 'SignupCtrl'
            })
            .state('logout', {
                url: '/logout',
                template: null,
                controller: 'LogoutCtrl'
            })
            .state('onlogin', {
                url: '/onlogin',
                templateUrl: '/partials/profile.html',
                controller: 'ProfileCtrl',
                resolve: {
                    authenticated: function ($q, $location, $auth) {
                        var deferred = $q.defer();

                        if (!$auth.isAuthenticated()) {
                            $location.path('/');
                        } else {
                            deferred.resolve();
                        }

                        return deferred.promise;
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

        $authProvider.facebook({
            clientId: '936147913070360'
        });

        $authProvider.google({
            clientId: '156599800528-i4osss1mht0boit86k4oapsn81j8inub.apps.googleusercontent.com'
        });

        $authProvider.github({
            clientId: '0ba2600b1dbdb756688b'
        });

        $authProvider.linkedin({
            clientId: '77cw786yignpzj'
        });

        $authProvider.yahoo({
            clientId: 'dj0yJmk9SDVkM2RhNWJSc2ZBJmQ9WVdrOWIzVlFRMWxzTXpZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0yYw--'
        });

        $authProvider.twitter({
            url: '/auth/twitter'
        });

        $authProvider.live({
            clientId: '000000004C12E68D'
        });

        $authProvider.oauth2({
            name: 'foursquare',
            url: '/auth/foursquare',
            clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
            redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
            authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
        });
        //$locationProvider.html5Mode(true);
    });
