const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    originalName: { type: String, required: true },
    path: { type: String, required: true },
    mimetype: { type: String, required: true },
    size: { type: Number, required: true }
});

module.exports = mongoose.model('File', fileSchema);
