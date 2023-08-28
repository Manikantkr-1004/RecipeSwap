
const mongoose = require('mongoose');

const blacklistSchema = mongoose.Schema({
    token: String
})

const BlackListModel = mongoose.model("blacklist", blacklistSchema);

module.exports = {
    BlackListModel
}