/**
 * Created by avishek on 6/3/17.
 */

App.controller('registerCtrl', ['Auth', '$scope', '$http', 'util', function(Auth, $scope, $http, util) {
    console.log('SIGN UP CTRL');
    $scope.user = {};
    $scope.error = { name : false, email : false, password : false};

    $scope.register = function() {
        $scope.serverErr = null;
        $scope.error.name = !$scope.user.name;
        $scope.error.email = !util.isValidEmail($scope.user.email);
        $scope.error.password = !util.isValidPassword($scope.user.password);

        if($scope.error.email || $scope.error.password) {
            return;
        }
        Auth.signup($scope.user)
            .then(function(res){
                $scope.serverSucces = res.data.message;
            }, function(err) {
                $scope.serverErr = err.data.message;
            })

    }


}])
