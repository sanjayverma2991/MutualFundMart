var mongoose = require('mongoose');
//var validators = require('mongoose-validators');

var collRecordsSchema = new mongoose.Schema( {
    collection_name: {
        type: String,
        in: ["admin_id", "scheme_id", "catg_id", "order_id", "user_id"],
        unique: true,
        required: true
    },
    records: {
        type: Number,
        default: 1,
        required: true
    }
});

const RECORD = module.exports = mongoose.model("collection_record", collRecordsSchema);