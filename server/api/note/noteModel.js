var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	slug: {
		type: String,
		required: true,
		unique: true,
		match: /[a-z0-9-]/
	},
	body: {
		type: String,
		required: true
	},
	subjects: {
		type: [
			{
				type: Schema.Types.ObjectId,
				ref: 'subject'
			}
		],
		required: true
	}
});

NoteSchema.index({name: 'text'});

module.exports = mongoose.model('note', NoteSchema);
