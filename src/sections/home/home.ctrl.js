'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope) {
        //Setup view model object
        var vm = this;
        vm.items = [
            {
                file: "assets/uploads/home_slider/1.png",
                title: "ATTRACTIVE ENOUGH?",
                description: "Have your website been drawing traffic as expected?<br/>It is time to consider a more appealing one.",
            },
            {
                file: "assets/uploads/home_slider/2.jpg",
                title: "GO MOBILE !",
                description: "As easy and convenient way for others to have your information at their fingertips",
            }
        ];

        $scope.getSlide = function () {
            return vm.items;
        }
    })
    .controller('ServiceController', function ($scope) {
        //Setup view model object
        var vm = this;
        vm.items = [
            {
                bg: "assets/uploads/our_services/1.png",
                icon: "assets/uploads/our_services/1_ico.png",
                name: "WEBSITES & WEB PORTALS",
            },
            {
                bg: "assets/uploads/our_services/2.png",
                icon: "assets/uploads/our_services/2_ico.png",
                name: "MOBILE TECHNOLOGY/APPS",
            },
            {
                bg: "assets/uploads/our_services/3.png",
                icon: "assets/uploads/our_services/3_ico.png",
                name: "ONLINE MARKETING",
            },
            {
                bg: "assets/uploads/our_services/4.png",
                icon: "assets/uploads/our_services/4_ico.png",
                name: "ELECTRONIC GREETINGS",
            },
            {
                bg: "assets/uploads/our_services/5.png",
                icon: "assets/uploads/our_services/5_ico.png",
                name: "CORPORATE IDENTITY",
            },
            {
                bg: "assets/uploads/our_services/6.png",
                icon: "assets/uploads/our_services/6_ico.png",
                name: "EBOOKS & DIGITAL SIGNAGES",
            }
        ];
    });



window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
    