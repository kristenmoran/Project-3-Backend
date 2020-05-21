const Item = require('../models/Items');
// Seed Data
const adventuringGear = require('./adventuring_gear.json');
const adventuringGearTwo = require('./adventuring_gear_two.json');
const alchemicalCreations = require('./alchemical_creations.json');
const armorShields = require('./armor_shields.json');
const booksPaperWriting = require('./books_paper_writing.json');
const clothingContainers = require('./clothing_containers.json');
const foodDrink = require('./food_drink.json');
const weaponMartial = require('./weapon_martial.json');
const weaponSimple = require('./weapon_simple.json');
const weaponExotic = require('./weapon_exotic.json');

Item.deleteMany()

	.then(() => Item.insertMany(adventuringGear))
	.then(() => Item.insertMany(adventuringGearTwo))
	.then(() => Item.insertMany(alchemicalCreations))
	.then(() => Item.insertMany(armorShields))
	.then(() => Item.insertMany(booksPaperWriting))
	.then(() => Item.insertMany(clothingContainers))
	.then(() => Item.insertMany(foodDrink))
	.then(() => Item.insertMany(weaponMartial))
	.then(() => Item.insertMany(weaponSimple))
	.then(() => Item.insertMany(weaponExotic))

	.catch(console.error)

	.finally(process.exit);
