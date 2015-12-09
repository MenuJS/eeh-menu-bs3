'use strict';
angular.module('eehMenuBs3').directive('eehMenuBs3MenuItemContent', MenuItemContentDirective);

/** @ngInject */
function MenuItemContentDirective(eehNavigation) {
    return {
        restrict: 'A',
        scope: {
            menuItem: '=eehMenuBs3MenuItemContent'
        },
        templateUrl: 'template/eeh-menu/menu-item-content/menu-item-content.html',
        link: function (scope) {
            scope.iconBaseClass = function () {
                return eehNavigation.iconBaseClass();
            };
        }
    };
}
