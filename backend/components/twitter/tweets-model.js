const mongoose = require('mongoose').set('debug', true);
var Schema = mongoose.Schema;

const tweetsSchema = new Schema({
    created_at: {
        type: String,
        required: false
    },
    text: {
        type: String,
    },
    entities: {
        user_mentions: [
            {
                screen_name: {
                    type: String
                },
                name: {
                    type: String
                },
                id: {
                    type: Number
                },
            }
        ],
    },
    user: {
        screen_name: {
            type: String
        }
    },
});
module.exports = mongoose.model('tweet', tweetsSchema);
