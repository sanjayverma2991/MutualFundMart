var mongoose = require('mongoose');
//var validators = require('mongoose-validators');

var adminSchema = new mongoose.Schema( {
    admin_id: {
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
        max: 10,
        unique: true
    },

    joined_date: {
        type: Date,
        default: Date.now,
    }
} );

const ADMIN = module.exports = mongoose.model("admin", adminSchema);