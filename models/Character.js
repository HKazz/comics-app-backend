const {Schema, model} = require('mongoose');

const characterSchema = new Schema({
    name: { type: String, required: true },
    comics: [{ type: Schema.Types.ObjectId, ref: 'Comic' }]
});

module.exports = model('Character', characterSchema);
