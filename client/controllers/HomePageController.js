angular.module('MyApp')
    .controller('HomePageController', function($scope) {
        $scope.place = null;
        $scope.autocompleteOptions = {
            componentRestrictions: { country: 'uk' },
            types: ['geocode']
        }
    });