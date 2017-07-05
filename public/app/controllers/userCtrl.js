/**
 * Created by avishek on 6/2/17.
 */

/*
App.controller('userCtrl', function(userService) {
    var self = this;


    userService.all()
        .success(function(data) {
            self.users = data;
        })


})

App.controller('userCreateCtrl', function(userService, $location, $window) {
    var self = this;

    self.signupUser = function() {
        message = '';
        userService.create(self.userData)
            .then(function(response) {
                self.userData = {};
                self.message = response.data.message;
                $window.localStorage.setItem('token', response.data.token);
                $location.path('/');
            })
    }
})*/
