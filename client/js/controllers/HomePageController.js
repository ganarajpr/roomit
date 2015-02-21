angular.module('MyApp')
    .controller('HomePageController', function ($scope, $auth,$location,$window) {
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
                    //$location.path('/onlogin');
                    $window.location.href = 'profile.html';
                })
                .catch(function (response) {
                    /*$alert({
                        content: response.data ? response.data.message : response,
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });*/
                });
        };
    });