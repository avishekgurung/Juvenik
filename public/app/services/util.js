/**
 * Created by avishek on 6/3/17.
 */

App.factory('util', [function() {
    var util = {};

    util.isValidEmail = function(email) {
        if(!email) return false;
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    util.isValidPassword = function(password) {
        return Boolean(password);
    }

    return util;
}])