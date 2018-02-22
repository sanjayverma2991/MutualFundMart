var mongoose = require('mongoose');
//var validators = require('mongoose-validators');

var purchaseSchema = new mongoose.Schema( {
    order_id: {
        type: String,
        unique: true,
        required: true
    },
    
    buyer_name: {
        type: String,
        required: true
    },

    email_id: {
        type: String,
        lowercase: true,
        validate: function(email_id) {
            return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email_id);
        },
        required: true
    },
    
    purchase: [{
        c_id: String,
        c_name: String,
        s_id: String,
        s_name: String,
        s_img: String,
        NAV: Number,
        qty: Number
    }],

    p_date: {
        type: Date,
        default: Date.now,
        required: true
    },

    net_amount: Number,
    net_funds: Number
});

const PURCHASE = module.exports = mongoose.model("purchase", purchaseSchema);