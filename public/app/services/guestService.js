/**
 * Created by avishek on 6/10/17.
 */

App.factory('GuestService', ['$http', function($http) {
    var GuestService = {};

    GuestService.chatNow = function() {
        return $http.get('/api/guestActivation');
    }

    return GuestService;
}])