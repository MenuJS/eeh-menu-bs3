'use strict';

describe('eehMenuBs3Sidebar', function () {
    var eehMenu;

    beforeEach(module('eehMenuBs3'));

    beforeEach(inject(function ($injector) {
        eehMenu = $injector.get('eehMenu');
    }));

    describe('Sidebar Navigation Menu Items', function () {
        it('should throw an exception if sidebar menu items does not exist', function () {
            var nonExistingMenuItemName = 'foo';
            var expected = nonExistingMenuItemName + ' is not a menu item';
            var actual = '';

            try {
                eehMenu.menuItem(nonExistingMenuItemName);
            } catch (exception) {
                actual = exception;
            }

            expect(actual).toEqual(expected);
        });
    });
});