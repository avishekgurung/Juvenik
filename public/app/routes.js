/**
 * Created by avishek on 6/1/17.
 */

//angular.module('juvenik', ['ngRoute'])

/*App.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html'
            })

            .when('/login', {
                templateUrl : 'app/views/pages/login.html'
            })

            .when('/signup', {
                templateUrl : 'app/views/pages/register.html'
            })


        $locationProvider.html5Mode(true);
    })*/

//https://stackoverflow.com/questions/26145871/redirect-on-all-routes-to-login-if-not-authenticated


App.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.html',
                controller : 'homeCtrl'
            })

            .when('/login', {
                templateUrl : 'app/views/pages/login.html',
                controller : 'loginCtrl'
            })

            .when('/register', {
                templateUrl : 'app/views/pages/register.html',
                controller : 'registerCtrl'
            })

            .when('/profile', {
                templateUrl : 'app/views/pages/profile.html'
            })

            .when('/guest', {
                templateUrl : 'app/views/pages/chat/guest.html',
                controller : 'guestCtrl'
            })

            .otherwise({
                templateUrl : '/app/views/pages/pageNotFound.html'
            })


        $locationProvider.html5Mode(true);
    });
