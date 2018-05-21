'use strict';
angular
    .module('app.core')
    .controller('SolutionsController', function ($scope, $window) {
        // Setup view model object
        var vm = this;
        $scope.pageData = {
            banner: "assets/uploads/solutions/banner.png",
            breadcrumb: [
                "SOLUTIONS",
            ],
            title: "From Idea to Digital Product",
            share_title: "",
        };

        $scope.slideData = [{
                file: "assets/uploads/solutions/slider/1.png",
                title: "DEFINE",
                subtitle: "PHASE 1",
                description: "Our project management team reaches out to our customers, not only to set a good relationship foundation but also the common goal for the project or tasks. With the initial requirements briefed, our teams provide consultation services to explore the feasibility, scalability, theme and creative ideas. In addition, schedules for the project or tasks will be set.",
            }
        ];

        $scope.$on('$destroy', function () {
            angular.element($window).unbind("scroll");
            angular.element($window).unbind("resize");
        });

        angular.element($window).bind("scroll", function () {
            var headerHeight = document.getElementById('site-header').offsetHeight;
            var fixedBannerHeight = document.querySelector('.fixed_banner_wrapper').offsetHeight;
            var bumperPos = document.querySelector('.sticky_bumper').offsetTop;

            if ($window.pageYOffset > (bumperPos - (fixedBannerHeight + headerHeight))) {
                angular.element(document.querySelector('.fixed_banner_wrapper')).addClass('static');
                var fixedBannerPos = bumperPos - fixedBannerHeight;
                angular.element(document.querySelector('.fixed_banner_wrapper')).css('top', fixedBannerPos+'px');
            } else {
                angular.element(document.querySelector('.fixed_banner_wrapper')).removeClass('static').removeAttr('style');
            }
        });

        angular.element($window).bind("resize", function () {
            var headerHeight = document.getElementById('site-header').offsetHeight;
            var fixedBannerHeight = document.querySelector('.fixed_banner_wrapper').offsetHeight;
            var bumperPos = document.querySelector('.sticky_bumper').offsetTop;
            
            if ($window.pageYOffset > (bumperPos - (fixedBannerHeight + headerHeight))) {
                var fixedBannerPos = bumperPos - fixedBannerHeight;
                angular.element(document.querySelector('.fixed_banner_wrapper')).css('top', fixedBannerPos + 'px');
            }
        });
    });