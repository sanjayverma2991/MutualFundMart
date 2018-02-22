var mongoose = require('mongoose');
//var validators = require('mongoose-validators');

var userSchema = new mongoose.Schema( {
    user_id: {
        type: String,
        unique: true,
        required: true
    },

    email_id: {
        type: String,
        unique: true,
        lowercase: true,
        validate: function(email_id) {
                return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_id)
        },
        required: true
    },

    name: {
        f_name: {
            type: String,
            required: true
        },
        l_name: {
            type: String,
            required: true
        }
    },

    passwd: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        //max: 11,
        required: true,
        unique: true
    },

    gender: String,

    cart: [{
        c_id: String,
        c_name: String,
        s_id: String,
        s_name: String,
        s_img: String,
        NAV: Number,
        qty: Number
    }],

    privilege: {
        type: Boolean,
        default: false,
    },

    net_amount: {
        type:Number,
        default: 0
    },

    net_funds: {
        type: Number,
        default: 0
    },

    active: {
        type: Boolean,
        default: true,
    },

    joined_date: {
        type: Date,
        default: Date.now,
    }
} );

const USER = module.exports = mongoose.model("user", userSchema);