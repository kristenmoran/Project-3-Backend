const express = require('express');
const router = express.Router();
// const { requireToken } = require('../middleware/auth');
const Item = require('../models/Items');

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

//Adventuring Gear
router.get('/adventuring', (req, res, next) => {
	Item.find({ categoryOne: 'Adventuring Gear' }).then((items) =>
		res.json(items)
	);
});

//Adventuring Gear/Comfort and Shelter
router.get('/adventuring/shelter', (req, res, next) => {
	Item.find({
		categoryOne: 'Adventuring Gear',
		categoryTwo: 'Comfort and Shelter',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Adventuring Gear/Hunting and Fishing
router.get('/adventuring/hunting', (req, res, next) => {
	Item.find({
		categoryOne: 'Adventuring Gear',
		categoryTwo: 'Hunting and Fishing',
	})
		.then((items) => res.json(items))
		.catch(next); //Test Delete by ID
	describe('/shop/items/:id', () => {
		let itemToDeleteId;
		before((done) => {
			api
				.get('/shop/items/')
				.set('Accept', 'application/json')
				.end((error, response) => {
					const items = response.body;
					itemToDeleteId = items[items.length - 1]._id;
					done();
				});
		});
		before((done) => {
			api.delete(`/shop/items/${itemToDeleteId}`).end(done);
		});
		it('should check ID deleted', (done) => {
			api
				.get('/shop/items/')
				.set('Accept', 'application/json')
				.end((error, response) => {
					const itemToFind = response.body.find(
						(item) => item.id === itemToDeleteId
					);
					expect(itemToFind).to.equal(undefined);
					done();
				});
		});
	});
});

//Adventuring Gear/Misc. Outdoors Gear
router.get('/adventuring/misc', (req, res, next) => {
	Item.find({
		categoryOne: 'Adventuring Gear',
		categoryTwo: 'Misc. Outdoors Gear',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Adventuring Gear/Illuminations
router.get('/adventuring/illuminations', (req, res, next) => {
	Item.find({
		categoryOne: 'Adventuring Gear',
		categoryTwo: 'Illuminations',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Food and Drink
router.get('/food_drink', (req, res, next) => {
	Item.find({ categoryOne: 'Food and Drink' })
		.then((items) => res.json(items))
		.catch(next);
});

//Food and Drink/Beverage
router.get('/food_drink/beverage', (req, res, next) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Beverage',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Food and Drink/Beverage
router.get('/food_drink/food', (req, res, next) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Food',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Food and Drink/Beverage/Alcoholic
router.get('/food_drink/beverage/alcoholic', (req, res, next) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Beverage',
		categoryThree: 'Alcoholic',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Food and Drink/Beverage/Nonalcoholic
router.get('/food_drink/beverage/nonalcoholic', (req, res, next) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Beverage',
		categoryThree: 'Nonalcoholic',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Food and Drink/Food/Fresh
router.get('/food_drink/food/fresh', (req, res, next) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Food',
		categoryThree: 'Fresh',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Food and Drink/Food/Ration
router.get('/food_drink/food/ration', (req, res, next) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Food',
		categoryThree: 'Ration',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Armor and Shields
router.get('/armor_shield', (req, res, next) => {
	Item.find({ categoryOne: 'Armor and Shields' }).then((items) =>
		res.json(items)
	);
});

//Armor and Shields/Light Armor
router.get('/armor_shield/light', (req, res, next) => {
	Item.find({
		categoryOne: 'Armor and Shields',
		categoryTwo: 'Light Armor',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Armor and Shields/Medium Armor
router.get('/armor_shield/medium', (req, res, next) => {
	Item.find({
		categoryOne: 'Armor and Shields',
		categoryTwo: 'Medium Armor',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Armor and Shields/Heavy Armor
router.get('/armor_shield/heavy', (req, res, next) => {
	Item.find({
		categoryOne: 'Armor and Shields',
		categoryTwo: 'Heavy Armor',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Armor and Shields/Extras
router.get('/armor_shield/extra', (req, res, next) => {
	Item.find({
		categoryOne: 'Armor and Shields',
		categoryTwo: 'Extras',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon
router.get('/weapons', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Simple
router.get('/weapons/simple', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Simple/Unarmed
router.get('/weapons/simple/unarmed', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
		categoryThree: 'Unarmed',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Simple/Light
router.get('/weapons/simple/light', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
		categoryThree: 'Light',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Simple/One-Handed
router.get('/weapons/simple/one', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
		categoryThree: 'One-Handed',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Simple/Two-Handed
router.get('/weapons/simple/two', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
		categoryThree: 'Two-Handed',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Simple/Ranged
router.get('/weapons/simple/ranged', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
		categoryThree: 'Ranged',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Martial
router.get('/weapons/martial', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Martial',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Martial/Light
router.get('/weapons/martial/light', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Martial',
		categoryThree: 'Light',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Martial/One-Handed
router.get('/weapons/martial/one', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Martial',
		categoryThree: 'One-Handed',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Martial/Two-Handed
router.get('/weapons/martial/two', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Martial',
		categoryThree: 'Two-Handed',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Martial/Ranged
router.get('/weapons/martial/ranged', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Martial',
		categoryThree: 'Ranged',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Exotic
router.get('/weapons/exotic', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Exotic',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Exotic/Light
router.get('/weapons/exotic/light', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Exotic',
		categoryThree: 'Light',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Exotic/One-Handed
router.get('/weapons/exotic/one', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Exotic',
		categoryThree: 'One-Handed',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Exotic/Two-Handed
router.get('/weapons/exotic/two', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Exotic',
		categoryThree: 'Two-Handed',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Exotic/Ranged
router.get('/weapons/exotic/ranged', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Exotic',
		categoryThree: 'Ranged',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Ammunition
router.get('/weapons/ammunition', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunition',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Ammunition/Thrown
router.get('/weapons/ammunition/thrown', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunition',
		categoryThree: 'Thrown',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Ammunition/Bolt
router.get('/weapons/ammunition/bolt', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunition',
		categoryThree: 'Bolt',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Ammunition/Arrow
router.get('/weapons/ammunition/arrow', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunition',
		categoryThree: 'Arrow',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Weapon/Ammunition/Bullet
router.get('/weapons/ammunition/bullet', (req, res, next) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunition',
		categoryThree: 'Bullet',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Alchemical Items
router.get('/alchemical', (req, res, next) => {
	Item.find({
		categoryOne: 'Alchemical Items',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Alchemical Items/Reagents
router.get('/alchemical/reagents', (req, res, next) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Reagents',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Alchemical Items/Oils and Flammables
router.get('/alchemical/oils', (req, res, next) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Oils and Flammables',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Alchemical Items/Tools and Devices
router.get('/alchemical/tools', (req, res, next) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Tools and Devices',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Alchemical Items/Misc. Substances
router.get('/alchemical/substances', (req, res, next) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Misc. Substances',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Alchemical Items/Balms, Medicines and Tonics
router.get('/alchemical/medicines', (req, res, next) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Balms, Medicines and Tonics',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Alchemical Items/Hunting Aids
router.get('/alchemical/hunting', (req, res, next) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Hunting Aids',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Alchemical Items/Herbs and Plants
router.get('/alchemical/herbs', (req, res, next) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Herbs and Plants',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Alchemical Items/Special Equipment
router.get('/alchemical/equipment', (req, res, next) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Special Equipment',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Clothing
router.get('/clothing', (req, res, next) => {
	Item.find({
		categoryOne: 'Clothing',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Clothing/Outfits
router.get('/clothing/outfits', (req, res, next) => {
	Item.find({
		categoryOne: 'Clothing',
		categoryTwo: 'Outfits',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Clothing/Footwear
router.get('/clothing/footwear', (req, res, next) => {
	Item.find({
		categoryOne: 'Clothing',
		categoryTwo: 'Footwear',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Clothing/Face, Head and Neck
router.get('/clothing/head', (req, res, next) => {
	Item.find({
		categoryOne: 'Clothing',
		categoryTwo: 'Face, Head and Neck',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Clothing/Bodywear
router.get('/clothing/bodywear', (req, res, next) => {
	Item.find({
		categoryOne: 'Clothing',
		categoryTwo: 'Bodywear',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Clothing/Jewelry, Perfumes and other Decorative Accessories
router.get('/clothing/accessories', (req, res, next) => {
	Item.find({
		categoryOne: 'Clothing',
		categoryTwo: 'Jewelry, Perfumes and other Decorative Accessories',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Containers
router.get('/containers', (req, res, next) => {
	Item.find({
		categoryOne: 'Containers',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Containers/Bags and Pouches
router.get('/containers/bags', (req, res, next) => {
	Item.find({
		categoryOne: 'Containers',
		categoryTwo: 'Bags and Pouches',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Containers/Barrels, Boxes, and Chests
router.get('/containers/boxes', (req, res, next) => {
	Item.find({
		categoryOne: 'Containers',
		categoryTwo: 'Barrels, Boxes, and Chests',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Containers/Other Containers
router.get('/containers/other', (req, res, next) => {
	Item.find({
		categoryOne: 'Containers',
		categoryTwo: 'Other Containers',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Books, Paper, & Writing Supplies
router.get('/writing', (req, res, next) => {
	Item.find({
		categoryOne: 'Books, Paper, & Writing Supplies',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Books, Paper, & Writing Supplies/Books
router.get('/writing/books', (req, res, next) => {
	Item.find({
		categoryOne: 'Books, Paper, & Writing Supplies',
		categoryTwo: 'Books',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Books, Paper, & Writing Supplies/Inks and Writing Utensils
router.get('/writing/utensils', (req, res, next) => {
	Item.find({
		categoryOne: 'Books, Paper, & Writing Supplies',
		categoryTwo: 'Inks and Writing Utensils',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Books, Paper, & Writing Supplies/Things to Write, Paint, or Draw On
router.get('/writing/things', (req, res, next) => {
	Item.find({
		categoryOne: 'Books, Paper, & Writing Supplies',
		categoryTwo: 'Things to Write, Paint, or Draw On',
	})
		.then((items) => res.json(items))
		.catch(next);
});

//Get by ID
router.get('/:id', (req, res, next) => {
	Item.findById(req.params.id)
		.then((item) => res.json(item))
		.catch(next);
});

//Post New
router.post('/new', (req, res, next) => {
	Item.create(req.body)
		.then((item) => res.json(item))
		.catch(next);
});

//Edit by ID
router.put('/:id', (req, res, next) => {
	Item.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	})
		.then((item) => res.json(item))
		.catch(next);
});

//Delete by ID
router.delete('/:id', (req, res, next) => {
	Item.findOneAndDelete({
		_id: req.params.id,
	})
		.then((item) => res.json(item))
		.catch(next);
});
module.exports = router;
