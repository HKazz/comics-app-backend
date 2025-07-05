const {Schema, model} = require('mongoose');
const comicsSchema = new Schema({
    title: { type: String, required: true },
    issueNumber: { type: Number, required: true },
    description: { type: String, required: true },
    characters: [{ type: Schema.Types.ObjectId, ref: 'Character' }],
    coverImage: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    publisher: { type: String, required: true },
    pageCount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});
const Comic = model('Comic', comicsSchema);
module.exports = Comic;