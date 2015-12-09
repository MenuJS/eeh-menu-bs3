'use strict';
angular.module('eehMenuBs3').directive('eehMenuBs3SearchInput', SearchInputDirective);

/** @ngInject */
function SearchInputDirective(eehMenu) {
    return {
        restrict: 'AE',
        transclude: true,
        templateUrl: 'template/eeh-menu-bs3/search-input/eeh-menu-bs3-search-input.html',
        scope: {
            iconClass: '=',
            submit: '=',
            classes: '=',
            isCollapsed: '='
        },
        link: function (scope) {
            scope.model = {
                query: ''
            };
            scope.iconBaseClass = function () {
                return eehMenu.iconBaseClass();
            };
        }
    };
}
