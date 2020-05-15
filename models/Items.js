const mongoose = require('../db/connection');

const ItemSchema = new mongoose.Schema(
	{
		name: String,
		description: String,
		value: Number,
		weight: Number,
		categoryOne: String,
		categoryTwo: String,
		categoryThree: String,
		image: String,
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		game: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Game',
		},
	},
	{
		timestamps: true,
	}
);

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
