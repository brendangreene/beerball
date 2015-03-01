'use strict';

angular.module('beerballApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
