const express = require('express');
const router = express.Router();
// const { requireToken } = require('../middleware/auth');
const Item = require('../models/Items');

categoryOneTranslate = (text) => {
	switch (text) {
		case 'adventuring':
			text = 'Adventuring Gear';
			break;
		case 'food_drink':
			text = 'Food and Drink';
			break;
		case 'armor_shield':
			text = 'Armor and Shields';
			break;
		case 'weapons':
			text = 'Weapon';
			break;
		case 'clothing':
			text = 'Clothing';
			break;
		case 'containers':
			text = 'Containers';
			break;
		case 'alchemical':
			text = 'Alchemical Items';
			break;
		case 'writing':
			text = 'Books, Paper, & Writing Supplies';
	}
	return text;
};
categoryTwoTranslate = (text) => {
	switch (text) {
		case 'shelter':
			text = 'Comfort and Shelter';
			break;
		case 'hunting':
			text = 'Hunting and Fishing';
			break;
		case 'misc':
			text = 'Misc. Outdoors Gear';
			break;
		case 'illuminations':
			text = 'Illuminations';
			break;
		case 'beverage':
			text = 'Beverage';
			break;
		case 'food':
			text = 'Food';
			break;
		case 'light':
			text = 'Light Armor';
			break;
		case 'medium':
			text = 'Medium Armor';
			break;
		case 'heavy':
			text = 'Heavy Armor';
			break;
		case 'shield':
			text = 'Shield';
			break;
		case 'extra':
			text = 'Extras';
			break;
		case 'simple':
			text = 'Simple';
			break;
		case 'martial':
			text = 'Martial';
			break;
		case 'exotic':
			text = 'Exotic';
			break;
		case 'ammunition':
			text = 'Ammunition';
			break;
		case 'reagents':
			text = 'Reagents';
			break;
		case 'oils':
			text = 'Oils and Flammables';
			break;
		case 'tools':
			text = 'Tools and Devices';
			break;
		case 'substances':
			text = 'Misc. Substances';
			break;
		case 'medicines':
			text = 'Balms, Medicines and Tonics';
			break;
		case 'hunting':
			text = 'Hunting and Fishing';
			break;
		case 'herbs':
			text = 'Herbs and Plants';
			break;
		case 'equipment':
			text = 'Special Equipment';
			break;
		case 'outfits':
			text = 'Outfits';
			break;
		case 'footwear':
			text = 'Footwear';
			break;
		case 'head':
			text = 'Face, Head and Neck';
			break;
		case 'bodywear':
			text = 'Bodywear';
			break;
		case 'accessories':
			text = 'Jewelry, Perfumes and other Decorative Accessories';
			break;
		case 'bags':
			text = 'Bags and Pouches';
			break;
		case 'boxes':
			text = 'Barrels, Boxes, and Chests';
			break;
		case 'other':
			text = 'Other Containers';
			break;
		case 'books':
			text = 'Books';
			break;
		case 'utensils':
			text = 'Inks and Writing Utensils';
			break;
		case 'things':
			text = 'Things to Write, Paint, or Draw On';
	}
	return text;
};

categoryThreeTranslate = (text) => {
	switch (text) {
		case 'alcoholic':
			text = 'Alcoholic';
			break;
		case 'nonalcoholic':
			text = 'Nonalcoholic';
			break;
		case 'fresh':
			text = 'Fresh';
			break;
		case 'ration':
			text = 'Ration';
			break;
		case 'unarmed':
			text = 'Unarmed';
			break;
		case 'light':
			text = 'Light';
			break;
		case 'one':
			text = 'One-Handed';
			break;
		case 'two':
			text = 'Two-Handed';
			break;
		case 'ranged':
			text = 'Ranged';
			break;
		case 'thrown':
			text = 'Thrown';
			break;
		case 'bolt':
			text = 'Bolt';
			break;
		case 'arrow':
			text = 'Arrow';
			break;
		case 'bullet':
			text = 'Bullet';
	}
	return text;
};

//All Items
router.get('/', (req, res, next) => {
	Item.find()
		.then((items) => res.json(items))
		.catch(next);
});

//Search/text
router.get('/search/:text', (req, res, next) => {
	Item.find()
		.or([
			{
				name: { $regex: req.params.text, $options: 'i' },
			},
			{
				description: { $regex: req.params.text, $options: 'i' },
			},
		])

		.then((items) => res.json(items))
		.catch(next);
});
//Post New
router.post('/admin/new', (req, res, next) => {
	Item.create(req.body)
		.then((item) => res.json(item))
		.catch(next);
});

//Edit by ID
router.put('/admin/:id', (req, res, next) => {
	Item.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		.then((item) => res.json(item))
		.catch(next);
});

//Delete by ID
router.delete('/admin/:id', (req, res, next) => {
	Item.findOneAndDelete({
		_id: req.params.id,
	})
		.then((item) => res.json(item))
		.catch(next);
});

//Get by ID
router.get('/id/:id', (req, res, next) => {
	Item.findById(req.params.id)
		.then((item) => res.json(item))
		.catch(next);
});

//Get by Category One
router.get('/:catOne', (req, res, next) => {
	Item.find({
		categoryOne: categoryOneTranslate(req.params.catOne),
	})
		.then((items) => res.json(items))
		.catch(next);;
});

//Get by Category One, Two
router.get('/:catOne/:catTwo', (req, res, next) => {
	Item.find({
		categoryOne: categoryOneTranslate(req.params.catOne),
		categoryTwo: categoryTwoTranslate(req.params.catTwo),
	})
		.then((items) => res.json(items))
		.catch(next);;
});

//Get by Category One, Two, Three
router.get('/:catOne/:catTwo/:catThree', (req, res, next) => {
	Item.find({
		categoryOne: categoryOneTranslate(req.params.catOne),
		categoryTwo: categoryTwoTranslate(req.params.catTwo),
		categoryThree: categoryThreeTranslate(req.params.catThree),
	})
		.then((items) => res.json(items))
		.catch(next);;
});

module.exports = router;
