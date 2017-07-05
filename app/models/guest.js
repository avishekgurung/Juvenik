/**
 * Created by avishek on 6/10/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GuestSchema = new Schema({
    name : {
        type : String,
    },

    pic : {
        type : String
    }
});

module.exports = mongoose.model('Guest', GuestSchema);