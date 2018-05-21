'use strict';
angular
    .module('app.core')
    .controller('AboutUsController', function($scope) {
        // Setup view model object
        var vm = this;
        $scope.pageData = {
                banner: "assets/uploads/aboutus/banner.png",
                breadcrumb: [
                    "ABOUT US",
                ],
                title: "Get to Know Us!",
                share_title: "",
            };
        
    });

