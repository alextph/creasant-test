'use strict';
angular
    .module('app.core')
    .component('fixedBanner', {
        templateUrl: 'components/fixedbanner/fixedbanner.tpl.html',
        bindings: {
            data: '=',
        }
    });