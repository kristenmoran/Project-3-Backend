const mongoose = require('../db/connection');

const ItemSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		},
		weight: {
			type: String,
			required: true,
		},
		categoryOne: {
			type: String,
			required: true,
			unique: true,
		},
		categoryTwo: String,
		categoryThree: String,
        categoryFour: String,
        categoryMagical: String,
		image: String,
		source: String,
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
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
