angular
    .module('app.core')
    .directive("swiperSlider", function() {
    return {
        template: '<div class="swiper-container">' + 
                    '<div class="swiper-wrapper" >' + 
                    '<div class="swiper-slide" ng-repeat="item in getSlide()">' +
                    '<img src="{{item.file}}" />' +
                    '<div class="content">' + 
                    '<div class="title">{{item.title}}</div><div class="desc" ng-bind-html="item.description"></div>' + 
                    '</div>' +
                    '</div>' + 
                    '</div>' +
                    '<div class="swiper-button-prev swiper-button-white"></div><div class="swiper-button-next swiper-button-white"></div></div>'
    };
});