'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/', {
            templateUrl: 'sections/home/home.tpl.html',
            controller: 'HomeController as home'
        })
        .when('/aboutus', {
            templateUrl: 'sections/aboutus/aboutus.tpl.html',
            controller: 'AboutUsController as aboutus'
        })
        .otherwise({
            redirectTo: '/'
        });
}