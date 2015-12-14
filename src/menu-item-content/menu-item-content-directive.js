'use strict';
angular.module('eehMenuBs3').directive('eehMenuBs3MenuItemContent', MenuItemContentDirective);

/** @ngInject */
function MenuItemContentDirective(eehMenu) {
    return {
        restrict: 'A',
        scope: {
            menuItem: '=eehMenuBs3MenuItemContent'
        },
        templateUrl: 'template/eeh-menu-bs3/menu-item-content/menu-item-content.html',
        link: function (scope) {
            scope.iconBaseClass = function () {
                return eehMenu.iconBaseClass();
            };
        }
    };
}
