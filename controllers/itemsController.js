const express = require('express');
const router = express.Router();
// const { requireToken } = require('../middleware/auth');
const Item = require('../models/Items');

//All Items
router.get('/', (req, res) => {
	Item.find().then((items) => res.json(items));
});

//Adventuring Gear
router.get('/adventuring', (req, res) => {
	Item.find({ categoryOne: 'Adventuring Gear' }).then((items) =>
		res.json(items)
	);
});

//Adventuring Gear/Comfort and Shelter
router.get('/adventuring/shelter', (req, res) => {
	Item.find({
		categoryOne: 'Adventuring Gear',
		categoryTwo: 'Comfort and Shelter',
	}).then((items) => res.json(items));
});

//Adventuring Gear/Hunting and Fishing
router.get('/adventuring/hunting', (req, res) => {
	Item.find({
		categoryOne: 'Adventuring Gear',
		categoryTwo: 'Hunting and Fishing',
	}).then((items) => res.json(items));
});

//Adventuring Gear/Misc. Outdoors Gear
router.get('/adventuring/misc', (req, res) => {
	Item.find({
		categoryOne: 'Adventuring Gear',
		categoryTwo: 'Misc. Outdoors Gear',
	}).then((items) => res.json(items));
});

//Adventuring Gear/Illuminations
router.get('/adventuring/illuminations', (req, res) => {
	Item.find({
		categoryOne: 'Adventuring Gear',
		categoryTwo: 'Illuminations',
	}).then((items) => res.json(items));
});

//Food and Drink
router.get('/food_drink', (req, res) => {
	Item.find({ categoryOne: 'Food and Drink' }).then((items) => res.json(items));
});

//Food and Drink/Beverage
router.get('/food_drink/beverage', (req, res) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Beverage',
	}).then((items) => res.json(items));
});

//Food and Drink/Beverage
router.get('/food_drink/food', (req, res) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Food',
	}).then((items) => res.json(items));
});

//Food and Drink/Beverage/Alcoholic
router.get('/food_drink/beverage/alcoholic', (req, res) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Beverage',
		categoryThree: 'Alcoholic',
	}).then((items) => res.json(items));
});

//Food and Drink/Beverage/Nonalcoholic
router.get('/food_drink/beverage/nonalcoholic', (req, res) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Beverage',
		categoryThree: 'Nonalcoholic',
	}).then((items) => res.json(items));
});

//Food and Drink/Food/Fresh
router.get('/food_drink/food/fresh', (req, res) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Food',
		categoryThree: 'Fresh',
	}).then((items) => res.json(items));
});

//Food and Drink/Food/Ration
router.get('/food_drink/food/ration', (req, res) => {
	Item.find({
		categoryOne: 'Food and Drink',
		categoryTwo: 'Food',
		categoryThree: 'Ration',
	}).then((items) => res.json(items));
});

//Armor and Shields
router.get('/armor_shield', (req, res) => {
	Item.find({ categoryOne: 'Armor and Shields' }).then((items) =>
		res.json(items)
	);
});

//Armor and Shields/Light Armor
router.get('/armor_shield/light', (req, res) => {
	Item.find({
		categoryOne: 'Armor and Shields',
		categoryTwo: 'Light Armor',
	}).then((items) => res.json(items));
});

//Armor and Shields/Medium Armor
router.get('/armor_shield/medium', (req, res) => {
	Item.find({
		categoryOne: 'Armor and Shields',
		categoryTwo: 'Medium Armor',
	}).then((items) => res.json(items));
});

//Armor and Shields/Heavy Armor
router.get('/armor_shield/heavy', (req, res) => {
	Item.find({
		categoryOne: 'Armor and Shields',
		categoryTwo: 'Heavy Armor',
	}).then((items) => res.json(items));
});

//Armor and Shields/Extras
router.get('/armor_shield/extra', (req, res) => {
	Item.find({
		categoryOne: 'Armor and Shields',
		categoryTwo: 'Extras',
	}).then((items) => res.json(items));
});

//Weapon
router.get('/weapons', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
	}).then((items) => res.json(items));
});

//Weapon/Simple
router.get('/weapons/simple', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
	}).then((items) => res.json(items));
});

//Weapon/Simple/Unarmed
router.get('/weapons/simple/unarmed', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
		categoryThree: 'Unarmed',
	}).then((items) => res.json(items));
});

//Weapon/Simple/Light
router.get('/weapons/simple/light', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
		categoryThree: 'Light',
	}).then((items) => res.json(items));
});

//Weapon/Simple/One-Handed
router.get('/weapons/simple/one', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
		categoryThree: 'One-Handed',
	}).then((items) => res.json(items));
});

//Weapon/Simple/Two-Handed
router.get('/weapons/simple/two', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
		categoryThree: 'Two-Handed',
	}).then((items) => res.json(items));
});

//Weapon/Simple/Ranged
router.get('/weapons/simple/ranged', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Simple',
		categoryThree: 'Ranged',
	}).then((items) => res.json(items));
});

//Weapon/Martial
router.get('/weapons/martial', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Martial',
	}).then((items) => res.json(items));
});

//Weapon/Martial/Light
router.get('/weapons/martial/light', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Martial',
		categoryThree: 'Light',
	}).then((items) => res.json(items));
});

//Weapon/Martial/One-Handed
router.get('/weapons/martial/one', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Martial',
		categoryThree: 'One-Handed',
	}).then((items) => res.json(items));
});

//Weapon/Martial/Two-Handed
router.get('/weapons/martial/two', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Martial',
		categoryThree: 'Two-Handed',
	}).then((items) => res.json(items));
});

//Weapon/Martial/Ranged
router.get('/weapons/martial/ranged', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Martial',
		categoryThree: 'Ranged',
	}).then((items) => res.json(items));
});

//Weapon/Exotic
router.get('/weapons/exotic', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Exotic',
	}).then((items) => res.json(items));
});

//Weapon/Exotic/Light
router.get('/weapons/exotic/light', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Exotic',
		categoryThree: 'Light',
	}).then((items) => res.json(items));
});

//Weapon/Exotic/One-Handed
router.get('/weapons/exotic/one', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Exotic',
		categoryThree: 'One-Handed',
	}).then((items) => res.json(items));
});

//Weapon/Exotic/Two-Handed
router.get('/weapons/exotic/two', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Exotic',
		categoryThree: 'Two-Handed',
	}).then((items) => res.json(items));
});

//Weapon/Exotic/Ranged
router.get('/weapons/exotic/ranged', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Exotic',
		categoryThree: 'Ranged',
	}).then((items) => res.json(items));
});

//Weapon/Ammunition
router.get('/weapons/ammunition', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunition',
	}).then((items) => res.json(items));
});

//Weapon/Ammunition/Thrown
router.get('/weapons/ammunition/thrown', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunition',
		categoryThree: 'Thrown',
	}).then((items) => res.json(items));
});

//Weapon/Ammunition/Bolt
router.get('/weapons/ammunition/bolt', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunition',
		categoryThree: 'Bolt',
	}).then((items) => res.json(items));
});

//Weapon/Ammunition/Arrow
router.get('/weapons/ammunition/arrow', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunition',
		categoryThree: 'Arrow',
	}).then((items) => res.json(items));
});

//Weapon/Ammunition/Bullet
router.get('/weapons/ammunition/bullet', (req, res) => {
	Item.find({
		categoryOne: 'Weapon',
		categoryTwo: 'Ammunition',
		categoryThree: 'Bullet',
	}).then((items) => res.json(items));
});

//Alchemical Items
router.get('/alchemical', (req, res) => {
	Item.find({
		categoryOne: 'Alchemical Items',
	}).then((items) => res.json(items));
});

//Alchemical Items/Reagents
router.get('/alchemical/reagents', (req, res) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Reagents',
	}).then((items) => res.json(items));
});

//Alchemical Items/Oils and Flammables
router.get('/alchemical/oils', (req, res) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Oils and Flammables',
	}).then((items) => res.json(items));
});

//Alchemical Items/Tools and Devices
router.get('/alchemical/tools', (req, res) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Tools and Devices',
	}).then((items) => res.json(items));
});

//Alchemical Items/Misc. Substances
router.get('/alchemical/substances', (req, res) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Misc. Substances',
	}).then((items) => res.json(items));
});

//Alchemical Items/Balms, Medicines and Tonics
router.get('/alchemical/medicines', (req, res) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Balms, Medicines and Tonics',
	}).then((items) => res.json(items));
});

//Alchemical Items/Hunting Aids
router.get('/alchemical/hunting', (req, res) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Hunting Aids',
	}).then((items) => res.json(items));
});

//Alchemical Items/Herbs and Plants
router.get('/alchemical/herbs', (req, res) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Herbs and Plants',
	}).then((items) => res.json(items));
});

//Alchemical Items/Special Equipment
router.get('/alchemical/equipment', (req, res) => {
	Item.find({
		categoryOne: 'Alchemical Items',
		categoryTwo: 'Special Equipment',
	}).then((items) => res.json(items));
});

//Clothing
router.get('/clothing', (req, res) => {
	Item.find({
		categoryOne: 'Clothing',
	}).then((items) => res.json(items));
});

//Clothing/Outfits
router.get('/clothing/outfits', (req, res) => {
	Item.find({
		categoryOne: 'Clothing',
		categoryTwo: 'Outfits',
	}).then((items) => res.json(items));
});

//Clothing/Footwear
router.get('/clothing/footwear', (req, res) => {
	Item.find({
		categoryOne: 'Clothing',
		categoryTwo: 'Footwear',
	}).then((items) => res.json(items));
});

//Clothing/Face, Head and Neck
router.get('/clothing/head', (req, res) => {
	Item.find({
		categoryOne: 'Clothing',
		categoryTwo: 'Face, Head and Neck',
	}).then((items) => res.json(items));
});

//Clothing/Bodywear
router.get('/clothing/bodywear', (req, res) => {
	Item.find({
		categoryOne: 'Clothing',
		categoryTwo: 'Bodywear',
	}).then((items) => res.json(items));
});

//Clothing/Jewelry, Perfumes and other Decorative Accessories
router.get('/clothing/accessories', (req, res) => {
	Item.find({
		categoryOne: 'Clothing',
		categoryTwo: 'Jewelry, Perfumes and other Decorative Accessories',
	}).then((items) => res.json(items));
});

//Containers
router.get('/containers', (req, res) => {
	Item.find({
		categoryOne: 'Containers',
	}).then((items) => res.json(items));
});

//Containers/Bags and Pouches
router.get('/containers/bags', (req, res) => {
	Item.find({
		categoryOne: 'Containers',
		categoryTwo: 'Bags and Pouches',
	}).then((items) => res.json(items));
});

//Containers/Barrels, Boxes, and Chests
router.get('/containers/boxes', (req, res) => {
	Item.find({
		categoryOne: 'Containers',
		categoryTwo: 'Barrels, Boxes, and Chests',
	}).then((items) => res.json(items));
});

//Containers/Other Containers
router.get('/containers/other', (req, res) => {
	Item.find({
		categoryOne: 'Containers',
		categoryTwo: 'Other Containers',
	}).then((items) => res.json(items));
});

//Books, Paper, & Writing Supplies
router.get('/writing', (req, res) => {
	Item.find({
		categoryOne: 'Books, Paper, & Writing Supplies',
	}).then((items) => res.json(items));
});

//Books, Paper, & Writing Supplies/Books
router.get('/writing/books', (req, res) => {
	Item.find({
		categoryOne: 'Books, Paper, & Writing Supplies',
		categoryTwo: 'Books',
	}).then((items) => res.json(items));
});

//Books, Paper, & Writing Supplies/Inks and Writing Utensils
router.get('/writing/utensils', (req, res) => {
	Item.find({
		categoryOne: 'Books, Paper, & Writing Supplies',
		categoryTwo: 'Inks and Writing Utensils',
	}).then((items) => res.json(items));
});

//Books, Paper, & Writing Supplies/Things to Write, Paint, or Draw On
router.get('/writing/things', (req, res) => {
	Item.find({
		categoryOne: 'Books, Paper, & Writing Supplies',
		categoryTwo: 'Things to Write, Paint, or Draw On',
	}).then((items) => res.json(items));
});

//Get by ID
router.get('/:id', (req, res) => {
	Item.findById(req.params.id).then((item) => res.json(item));
});

//Post New
router.post('/new', (req, res) => {
	Item.create(req.body).then((item) => res.json(item));
});

//Edit by ID
router.put('/:id', (req, res) => {
	Item.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((item) => res.json(item));
});

//Delete by ID
router.delete('/:id', (req, res) => {
	Item.findOneAndDelete({
		_id: req.params.id,
	}).then((item) => res.json(item));
});
{
}

module.exports = router;
