'use strict';
angular
    .module('app.core')
    .component('swiperSlider', {
        templateUrl: 'components/swiper/swiper.tpl.html',
        bindings: {
            data: '=',
        }
    });