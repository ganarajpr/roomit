angular.module('MyApp')
    .controller('ProfileCtrl', function ($scope, $auth, Account,$state) {

        /**
         * Get user's profile information.
         */
        $scope.getProfile = function () {
            Account.getProfile()
                .success(function (data) {
                    $scope.user = data;
                    $scope.user.ageGroup = $scope.user.ageGroup || $scope.ageOptions[0];
                    $scope.user.flatMateAgeGroup = $scope.user.flatMateAgeGroup || 'No Preference';

                    $scope.user.gender = $scope.user.gender || $scope.genderOptions[0];
                    $scope.user.flatMateGender = $scope.user.flatMateGender || 'No Preference';

                    $scope.user.occupation = $scope.user.occupation || $scope.occupationOptions[0];
                    $scope.user.occupation = $scope.user.occupation || $scope.occupationOptions[0];
                    $scope.user.flatMateOccupation = $scope.user.flatMateOccupation || 'No Preference';

                    $scope.user.locationPreference = $scope.user.locationPreference || $scope.locationPreferenceOptions[0];

                    $scope.user.smoker = $scope.user.smoker || $scope.yesNoOptions[0];
                    $scope.user.flatMateSmoker = $scope.user.flatMateSmoker || 'No Preference';

                    $scope.user.diet = $scope.user.diet || $scope.dietOptions[0];
                    $scope.user.flatMateDiet = $scope.user.flatMateDiet || 'No Preference';

                    $scope.user.hasPets = $scope.user.hasPets || $scope.yesNoOptions[0];
                    $scope.user.flatMateHasPets = $scope.user.flatMateHasPets || 'No Preference';

                    $scope.user.cleanliness = $scope.user.cleanliness || $scope.cleanOptions[0];
                    $scope.user.flatMateCleanliness = $scope.user.flatMateCleanliness || 'No Preference';

                    $scope.user.social = $scope.user.social || $scope.socialOptions[0];
                    $scope.user.flatMateSocial = $scope.user.flatMateSocial || 'No Preference';

                    $scope.user.ethnicity = $scope.user.ethnicity || $scope.ethnicityOptions[0];
                    $scope.user.flatMateEthnicity = $scope.user.flatMateEthnicity || 'No Preference';
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

        $scope.onGenderSelect = function(option){
            $scope.user.gender = option;
        };

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
            'No Preference',
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
            'Black or Black British'
        ];
        $scope.onEthnicitySelect = function(option){
            $scope.user.ethnicity = option;
        };

        $scope.onFlatMateEthnicitySelect = function(option){
            $scope.user.flatMateEthnicity = option;
        };


    });