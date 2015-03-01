'use strict';

angular.module('beerballApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


