export const classes = [
   'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'
]
export const subclasses = {
   Barbarian: { id: 'Path of the', level: 3, name: ['Berserker', 'Totem Warrior'], title: function(a,b) { return `${a} ${b}`} }, 
   Bard: { id: 'College of', level: 3, name:['Lore', 'Valour'], title: function(a,b) { return `${a} ${b}`} }, 
   Cleric: { id: 'Domain', level: 1, name:['Knowledge', 'Life', 'Light', 'Trickery', 'Nature', 'Tempest', 'War'], title: function(a,b) { return `${b} ${a}`} }, 
   Druid: { id: 'Circle of the', level: 2, name:['Land', 'Moon'], title: function(a,b) { return `${a} ${b}`} }, 
   Fighter: { id: 'Archetype', level: 3, name:['Battle Master', 'Champion', 'Eldrich Knight'], title: function(a,b) { return `${b} ${a}`} }, 
   Monk: {id: 'Way of the', level: 3, name:['Four Elements', 'Open Hand', 'Shadow'], title: function(a,b) { return `${a} ${b}`} }, 
   Paladin: { id: 'Oath of', level: 3, name:['Ancients', 'Devotion', 'Vengeance'], title: function(a,b) { return `${a} ${b}`} },
   Ranger: { id: 'Archetype', level: 3, name:['Beast Master', 'Hunter'], title: function(a,b) { return `${b} ${a}`} }, 
   Rogue: { id: 'Archetype', level: 3, name:['Arcane Trickster', 'Assassin', 'Thief'], title: function(a,b) { return `${b} ${a}`} }, 
   Sorcerer: { id: 'Origin', level: 1, name:['Draconic Bloodline', 'Wild Magic'], title: function(a,b) { return `${b} ${a}`} }, 
   Warlock: { id: 'Patron', level: 1, name:['Archfey', 'Fiend', 'Great Old One'], title: function(a,b) { return `${b} ${a}`} }, 
   Wizard: {id: 'School of', level: 2, name:['Abjuration', 'Transmutation', 'Conjuration', 'Divination', 'Enchantment', 'Evocation', 'Illusion', 'Necromany'], title: function(a,b) { return `${a} ${b}`} },
}

export const species = [
   'Dwarf', 'Elf', 'Halfling', 'Human', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tiefling'
]
export const subspecies = {
   dwarf: ['Hill Dwarf', 'Mountain Dwarf'], elf: ['Dark Elf', 'High Elf', 'Wood Elf'], halfling: ['Lightfoot Halfling', 'Stout Halfling'], gnome: ['Forest Gnome', 'Rock Gnome']
}

// export const backgrounds = [
//    'Acolyte', 'Charlatan', 'Criminal', 'Spy', 'Entertainer', 'Gladiator', 'Folk Hero', 'Guild Artisan', 'Guild Merchant', 'Hermit', 'Noble', 'Knight', 'Outlander', 'Sage', 'Sailor', 'Pirate', 'Soldier', 'Urchin'
// ]

export const backgrounds = [ //variants removed
   'Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor', 'Soldier', 'Urchin'
]

export const Simple_Weapons = [
   'Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer', 'Mace', 'Quarterstaff', 'Sickle', 'Spear', 'Light Crossbow', 'Dart', 'Shortbow', 'Sling'
]
export const Simple_Melee_Weapons = [
   'Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer', 'Mace', 'Quarterstaff', 'Sickle', 'Spear'
]
export const Martial_Weapons = [
   'Battleaxe', 'Flail', 'Glaive', 'Greataxe', 'Greatsword', 'Halberd', 'Lance', 'Longsword', 'Maul', 'Morningstar', 'Pike', 'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip', 'Blowgun', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net'
]
export const Martial_Melee_Weapons = [
   'Battleaxe', 'Flail', 'Glaive', 'Greataxe', 'Greatsword', 'Halberd', 'Lance', 'Longsword', 'Maul', 'Morningstar', 'Pike', 'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip'
]
export const Skills = [
   'Acrobatics', 'Animal Handling', 'Arcana', 'Athletics', 'Deception', 'History', 'Insight', 'Intimidation', 'Investigation', 'Medicine', 'Nature', 'Perception', 'Performance', 'Religion', 'Sleight of Hand', 'Stealth', 'Survival'
]
export const SkillsAbilities = [
   { value: 'Acrobatics', ability: 1 }, 
   { value: 'Animal Handling', ability: 4 }, 
   { value: 'Arcana', ability: 3 }, 
   { value: 'Athletics', ability: 0 }, 
   { value: 'Deception', ability: 5 }, 
   { value: 'History', ability: 3 }, 
   { value: 'Insight', ability: 4 }, 
   { value: 'Intimidation', ability: 5 }, 
   { value: 'Investigation', ability: 3 }, 
   { value: 'Medicine', ability: 4 }, 
   { value: 'Nature', ability: 3 }, 
   { value: 'Perception', ability: 4 }, 
   { value: 'Performance', ability: 5 }, 
   { value: 'Persuasion', ability: 5 }, 
   { value: 'Religion', ability: 3 }, 
   { value: 'Sleight of Hand', ability: 1 }, 
   { value: 'Stealth', ability: 1 }, 
   { value: 'Survival', ability: 4 }
]
export const ArtisansTools = [
   'Alchemist\'s Supplies', 'Brewer\'s Supplies', 'Calligrapher\'s Supplies', 'Carpenter\'s Tools', 'Cartographer\'s Tools', 'Cobbler\'s Tools', 'Cook\'s Utensils', 'Glassblower\'s Tools', 'Jeweler\'s Tools', 'Leatherworker\'s Tools', 'Mason\'s Tools', 'Painter\'s Supplies', 'Potter\'s Tools', 'Smith\'s Tools', 'Tinker\'s Tools', 'Weaver\'s Tools', 'Woodcarver\'s Tools'
]

export const Musical_Instruments = ['Bagpipes', 'Drums', 'Dulcimer', 'Flute', 'Lute', 'Lyre', 'Horn', 'Pan flute', 'Shawm', 'Viol'];

export const Languages = ['Common', 'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin', 'Halfling', 'Orc', 'Abyssal', 'Celestial', 'Draconic', 'Deep Speech', 'Infernal', 'Primordial', 'Sylvan', 'Undercommon'];

export const GamingSet = [ 'Dice Set', 'Dragonchess Set', 'Playing Cards', 'Three-Dragon Ante Set' ]