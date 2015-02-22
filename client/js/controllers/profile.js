angular.module('MyApp')
    .controller('ProfileCtrl', function ($scope, $auth, Account,$state) {

        /**
         * Get user's profile information.
         */
        $scope.getProfile = function () {
            Account.getProfile()
                .success(function (data) {
                    $scope.user = data;
                })
                .error(function (error) {
                    /*$alert({
                     content: error.message,
                     animation: 'fadeZoomFadeDown',
                     type: 'material',
                     duration: 3
                     });*/
                });
        };


        /**
         * Update user's profile information.
         */
        $scope.updateProfile = function () {
            Account.updateProfile($scope.user).then(function () {
                /*$alert({
                 content: 'Profile has been updated',
                 animation: 'fadeZoomFadeDown',
                 type: 'material',
                 duration: 3
                 });*/
                $state.transitionTo('thankyou');
            });
        };

        /**
         * Link third-party provider.
         */
        $scope.link = function (provider) {
            $auth.link(provider)
                .then(function () {
                    $alert({
                        content: 'You have successfully linked ' + provider + ' account',
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    });
                })
                .then(function () {
                    $scope.getProfile();
                })
                .catch(function (response) {
                    /*$alert({
                     content: response.data.message,
                     animation: 'fadeZoomFadeDown',
                     type: 'material',
                     duration: 3
                     });*/
                });
        };

        /**
         * Unlink third-party provider.
         */
        $scope.unlink = function (provider) {
            $auth.unlink(provider)
                .then(function () {
                    /*$alert({
                     content: 'You have successfully unlinked ' + provider + ' account',
                     animation: 'fadeZoomFadeDown',
                     type: 'material',
                     duration: 3
                     });*/
                })
                .then(function () {
                    $scope.getProfile();
                })
                .catch(function (response) {
                    /*$alert({
                     content: response.data ? response.data.message : 'Could not unlink ' + provider + ' account',
                     animation: 'fadeZoomFadeDown',
                     type: 'material',
                     duration: 3
                     });*/
                });
        };

        $scope.getProfile();

        $scope.onLogout = function () {
            $auth.logout().then(function(){
                $state.transitionTo('home');
            });
        };

        $scope.ageOptions = [
            '18-28',
            '29-39',
            '40+'

        ];
        $scope.onAgeSelect = function(option){
            $scope.user.ageGroup = option;
        };

        $scope.onFlatMateAgeSelect = function(option){
            $scope.user.flatMateAgeGroup = option;
        };

        $scope.genderOptions = [
            'Male',
            'Female',
            'Other'
        ];

        $scope.onFlatMateGenderSelect = function(option){
            $scope.user.flatMateGender = option;
        };

        $scope.occupationOptions = [
            'Student',
            'Professional',
            'Other'

        ];
        $scope.onOccupationSelect = function(option){
            $scope.user.occupation = option;
        };

        $scope.onFlatMateOccupationSelect = function(option){
            $scope.user.flatMateOccupation = option;
        };

        $scope.locationPreferenceOptions = [
            'Central London',
            'Greater London'
        ];
        $scope.onPrefLocSelect = function(option){
            $scope.user.locationPreference = option;
        };

        $scope.yesNoOptions = [
            'No',
            'Yes'
        ];

        $scope.onSmokePref = function(option){
            $scope.user.smoker = option;
        };
        $scope.onFlatMateSmokePref = function(option){
            $scope.user.flatMateSmoker = option;
        };
        $scope.onFlatMatePetsPref = function(option){
            $scope.user.flatMateHasPets = option;
        };

        $scope.onPetsPref = function(option){
            $scope.user.hasPets = option;
        };

        $scope.dietOptions = [
            'Anything',
            'Vegetarian',
            'Vegan'

        ];
        $scope.onDietSelect = function(option){
            $scope.user.diet = option;
        };

        $scope.onFlatMateDietSelect = function(option){
            $scope.user.flatMateDiet = option;
        };

        $scope.cleanOptions = [
            'Tidy when needed',
            'Always Tidy',
            'Never Tidy'
        ];
        $scope.onCleanSelect = function(option){
            $scope.user.cleanliness = option;
        };
        $scope.onFlatMateCleanSelect = function(option){
            $scope.user.flatMateCleanliness = option;
        };

        $scope.socialOptions = [
            'Weekends Only',
            'More than 3 times a week',
            'Rarely'

        ];
        $scope.onSocialSelect = function(option){
            $scope.user.social = option;
        };

        $scope.onFlatMateSocialSelect = function(option){
            $scope.user.flatMateSocial = option;
        };

        $scope.ethnicityOptions = [
            'White',
            'Asial or Asian British : Indian',
            'Asial or Asian British : Pakistani',
            'Asial or Asian British : Bangladeshi',
            'Asial or Asian British : Other',
            'Black or Black British',
            'Dont want to disclose'
        ];
        $scope.onEthnicitySelect = function(option){
            $scope.user.ethnicity = option;
        };

        $scope.onFlatMateEthnicitySelect = function(option){
            $scope.user.flatMateEthnicity = option;
        };


    });