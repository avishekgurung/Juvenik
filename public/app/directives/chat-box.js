/**
 * Created by avishek on 5/23/17.
 */

App.directive("chatBox", ['ChatService', '$rootScope', function(ChatService, $rootScope) {
    return {
        templateUrl : "app/views/pages/chat/chatBox.html",
        scope : {
            obj:"="
        },
        link : function(scope, elements, attributes) {
            var id = scope.obj._id;
            scope.text = '';
            scope.user = scope.obj;
            scope.change = function(event) {
                var keyPressed = event.which;
                if(keyPressed === 13) {
                    var text = scope.text;
                    scope.text = '';
                    if(scope.obj.sendFirst) {
                        ChatService.sendFirst(id, "me", text);
                    }
                    else {
                        ChatService.send(id, text);
                    }
                }
            }

            scope.closeCommunication = function() {
                console.log(scope.user);
                var chatDisplay = scope.user.chatDisplay;
                var lastMessage = chatDisplay[chatDisplay.length-1];
                var from = $rootScope.user._id;
                var to = scope.obj._id;
                var text = lastMessage.text;
                if(lastMessage.type === 'him') {
                    var temp = from;
                    from = to;
                    to = temp;
                }

                ChatService.closeCommunication([{from:from, to:to, text:text[text.length-1]}]);
            }

            /*scope.change = function(event) {
                var keyPressed = event.which;
                if(keyPressed === 13) {
                    var text = scope.text;
                    scope.text = '';
                    if(ChatService.User[id].sendFirst) {
                        ChatService.sendFirst(id, "me", text);
                    }
                    else {
                        ChatService.send(id, text);
                    }
                }
            }*/
        }
    }
}])