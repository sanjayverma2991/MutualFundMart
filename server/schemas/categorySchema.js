var mongoose = require('mongoose');
//var validators = require('mongoose-validators');

var categorySchema = new mongoose.Schema( {
    catg_id: {
        type: String,
        unique: true,
        required: true
    },
    c_name: {
        type: String,
        unique: true,
        required: true
    },
    c_description: {
        type: String,
        required: true
    },
    c_img: String,

    last_modified: {
        type: Date,
        required: true
    },
    scheme : [{
        scheme_id: String,
        s_name: String,
        s_description: String,
        s_img: String,
        NAV: Number,
        sold: Number,
        last_modified: Date
    }]
});

const CATEGORY = module.exports = mongoose.model("category", categorySchema);