const mongoose = require('../db/connection');

const ItemSchema = new mongoose.Schema(
	{
		game: {
			type: String,
			required: true,
		},
		game_owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		game_id: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		game_users: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			// ret is the returned Mongoose document
			transform: (_doc, ret) => {
				delete ret.password;
				return ret;
			},
		},
	}
);

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
