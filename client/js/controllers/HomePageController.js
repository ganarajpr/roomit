angular.module('MyApp')
    .controller('HomePageController', function ($scope, $auth,$location,$timeout,$window) {
        $scope.place = null;
        $scope.hasBackground = true;
        $scope.autocompleteOptions = {
            componentRestrictions: {country: 'uk'},
            types: ['geocode']
        };

        $scope.dropdownOptions = [

        ];
        $scope.authenticate = function (provider) {
            $auth.authenticate(provider)
                .then(function () {
                    $location.path('/onlogin');
                })
                .catch(function (response) {

                });
        };
    });