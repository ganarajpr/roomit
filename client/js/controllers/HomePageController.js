angular.module('MyApp')
    .controller('HomePageController', function ($scope, $alert, $auth,$location) {
        $scope.place = null;

        $scope.hasBackground = true;
        $scope.autocompleteOptions = {
            componentRestrictions: {country: 'uk'},
            types: ['geocode']
        };
        $scope.authenticate = function (provider) {
            $auth.authenticate(provider)
                .then(function () {
                    $location.path('/onlogin');
                })
                .catch(function (response) {
                    $alert({
                        content: response.data ? response.data.message : response,
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });
                });
        };
    });