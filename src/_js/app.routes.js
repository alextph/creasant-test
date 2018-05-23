'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(($routeProvider, $locationProvider)=> {
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
          .when('/solutions', {
              templateUrl: 'sections/solutions/solutions.tpl.html',
              controller: 'SolutionsController as solutions'
          })
          .otherwise({
              redirectTo: '/'
          });
      });

