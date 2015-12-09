'use strict';

/**
 * @ngdoc directive
 * @name eeh-menu-bs3-navbar
 * @restrict AE
 *
 * @description
 * This directive allows for the creation of a Twitter Bootstrap navbar component.
 *
 * @param {string=} menuName Sets the name of the menu that the directive will render.
 * @param {string=} [navClass=navbar-default navbar-static-top] Sets the ng-class attribute of the top-level nav element.
 * @param {string=} containerClass
 * Sets the ng-class attribute of the top-level "container" element.
 * Common settings are nothing, "container" or "container-fluid".
 * Some custom class or expression can also be used if desired.
 * @param {string=} brandText Sets the text of the brand element.
 * @param {string=} brandState Sets ui-sref of the brand element.
 * @param {string=} brandHref Sets the href attribute of the brand element.
 * @param {string=} brandTarget Sets target attribute of the brand element.
 * @param {string=} brandSrc Sets the src attribute of the image in the brand element.
 * @param {function=} brandClick Sets the callback function of the brand element.
 */
var NavbarDirective = function ($window, eehMenu) {
    return {
        restrict: 'AE',
        templateUrl: 'template/eeh-menu-bs3/navbar/navbar.html',
        scope: {
            menuName: '=',
            navClass: '=?',
            containerClass: '=?',
            brandText: '=',
            brandState: '=',
            brandHref: '=',
            brandTarget: '=',
            brandSrc: '=',
            brandClick: '='
        },
        link: function (scope) {
            scope.iconBaseClass = function () {
                return eehMenu.iconBaseClass();
            };
            scope.navClass = scope.navClass || 'navbar-default navbar-static-top';
            scope.isNavbarCollapsed = true;
            scope.$watch(eehMenu.menuItems, function () {
                if (angular.isUndefined(scope.menuName)) {
                    return;
                }
                var menuItems = eehMenu.menuItemTree(scope.menuName);
                scope.leftNavbarMenuItems = menuItems.filter(function (item) { return !item.isHeavy(); });
                scope.rightNavbarMenuItems = menuItems.filter(function (item) { return item.isHeavy(); });
            }, true);
            var windowElement = angular.element($window);
            windowElement.bind('resize', function () {
                scope.$apply();
            });

            var getWindowDimensions = function () {
                return {
                    innerHeight: windowElement[0].innerHeight,
                    innerWidth: windowElement[0].innerWidth
                };
            };

            scope.$watch(getWindowDimensions, function (newValue) {
                if (angular.isUndefined(newValue)) {
                    return;
                }
                var width = (newValue.innerWidth > 0) ? newValue.innerWidth : $window.screen.width;
                if (width >= 768) {
                    scope.isNavbarCollapsed = true;
                }
            }, true);
        }
    };
};

angular.module('eehMenuBs3').directive('eehMenuBs3Navbar', ['$window', 'eehMenu', NavbarDirective]);
