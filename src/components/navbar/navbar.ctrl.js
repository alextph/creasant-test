'use strict';
angular
    .module('app.core')
    .controller('NavbarController', function ($scope, $location) {
        //Setup the view model object
        var vm = this;
        vm.items = [
            {
                href: "#/",
                path: "/",
                name: "Home",
                className: "",
            },
            {
                href: "#/aboutus",
                path: "/aboutus",
                name: "About Us",
                className: "",
            },
            {
                href: "#/solutions",
                path: "/solutions",
                name: "Solutions",
                className: "",
            },
            {
                href: "#/portfolio",
                path: "/portfolio",
                name: "Portfolio",
                className: "",
            },
            {
                href: "#/clients",
                path: "/clients",
                name: "Clients",
                className: "",
            },
            {
                href: "#/contactus",
                path: "/contactus",
                name: "Contact Us",
                className: "",
            },
            {
                href: "#/login",
                path: "/login",
                name: "Sign In",
                className: "signin",
            }
        ];

        $scope.isActive = function(loc) {
            return loc == $location.path();
        }
    });

