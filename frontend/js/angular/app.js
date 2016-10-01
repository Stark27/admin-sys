(function() {
    'use strict';
     angular
        .module('App', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                /*
                .when('/', {
                    templateUrl: 'cliente/views/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                })
                */
                .when('/', {
                    templateUrl: 'frontend/views/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'login'
                })
                .when('/signup', {
                    templateUrl: 'frontend/views/signup.html',
                    controller: 'SignupCtrl',
                    controllerAs: 'signup'
                })
                .when('/home', {
                    templateUrl: 'frontend/views/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'home'
                })
                .otherwise({
                    redirectTo: '/'
                });
        });

        
        
})();    