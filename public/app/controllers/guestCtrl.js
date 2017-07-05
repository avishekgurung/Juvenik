/**
 * Created by avishek on 6/8/17.
 */

App.controller('guestCtrl', ['$scope', 'GuestService', '$rootScope', 'ChatService', function($scope, GuestService, $rootScope, ChatService) {

    $scope.chatNow = function() {
        console.log('Chat nw');
        GuestService.chatNow()
            .then(function(res) {
                if(res.data.success) {
                    var support = res.data.user;
                    $rootScope.user = res.data.guest;
                    ChatService.open(res.data.guest._id, support._id);
                    ChatService.sendFirst(support._id, 'Initiation of conversation', support.name, support.pic);
                    console.log(res.data);
                }
                else {

                }
            }, function(err) {
                console.log(err);
            });
    }

    $scope.user = {};
    /*$scope.$watch(function() {
        $scope.user = ChatService.User;
        console.log('chat box changed in controller');
    }, true);*/

    $scope.$watch(function() {
        return ChatService.User;
    }, function() {
        $scope.user = ChatService.User;
        console.log('chat box changed in controller');
    });

}])