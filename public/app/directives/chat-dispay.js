/**
 * Created by avishek on 5/23/17.
 */


App.directive("chatDisplay", function(){
    return {
        templateUrl : "app/views/pages/chat/chat-display.html",
        scope : {
            obj : "="
        },
        link : function(scope, element, attributes) {

        }
    }
})