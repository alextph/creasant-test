'use strict';
angular
    .module('app.core')
    .controller('HomeController', function($scope, PageValues) {
        //Set page title and description
        PageValues.title = "HOME";
        //Setup view model object
        var vm = this;
        vm.items = [
            {
                file: "assets/uploads/home_slider/1.png",
                title: "ATTRACTIVE ENOUGH?",
                description: "Have your website been drawing traffic as expected?<br/>It is time to consider a more appealing one.",
            },
            {
                file: "assets/uploads/home_slider/2.png",
                title: "GO MOBILE !",
                description: "As easy and convenient way for others to have your information at their fingertips",
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
    