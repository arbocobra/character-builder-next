const spellCasting = {
   bard: ['You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations.',
   'Spellcasting Ability: Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.',
   'Spell save DC = 8 + your proficiency bonus + your Charisma modifier',
   'Spell attack modifier = your proficiency bonus + your Charisma modifier',
   'Ritual Casting: You can cast any bard spell you know as a ritual if that spell has the ritual tag.',
   'Spellcasting Focus: You can use a musical instrument as a spellcasting focus for your bard spells.'],
   cleric: ['As a conduit for divine power, you can cast cleric spells.',
   'You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
   'Spellcasting Ability: Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.',
   'Spell save DC = 8 + your proficiency bonus + your Wisdom modifier',
   'Spell attack modifier = your proficiency bonus + your Wisdom modifier',
   'Ritual Casting: You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared','Spellcasting Focus: You can use a holy symbol as a spellcasting focus for your cleric spells.'],
   druid: ['Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will.',
   'You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.',
   'Spellcasting Ability: Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.',
   'Spell save DC = 8 + your proficiency bonus + your Wisdom modifier',
   'Spell attack modifier = your proficiency bonus + your Wisdom modifier',
   'Ritual Casting: You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.', 'Spellcasting Focus: You can use a druidic focus as a spellcasting focus for your druid spells.'],
   paladin: ['By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does.', 
   'You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell).', 
   'Spellcasting Ability: Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.',
   'Spell save DC = 8 + your proficiency bonus + your Charisma modifier',
   'Spell attack modifier = your proficiency bonus + your Charisma modifier',
   'Spellcasting Focus: You can use a holy symbol as a spellcasting focus for your paladin spells.'],
   ranger: ['By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does.',
      'Spellcasting Ability: Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.',
      'Spell save DC = 8 + your proficiency bonus + your Wisdom modifier',
      'Spell attack modifier = your proficiency bonus + your Wisdom modifier',
      'Spellcasting Focus (Optional): At 2nd level, you can use a druidic focus as a spellcasting focus for your ranger spells. A druidic focus might be a sprig of mistletoe or holly, a wand or rod made of yew or another special wood, a staff drawn whole from a living tree, or an object incorporating feathers, fur, bones, and teeth from sacred animals.']
}
export const features = {
   barbarian: [
      { name: 'Rage', level: 1, 
         description: 'In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren\'t wearing heavy armor:\n- You have advantage on Strength checks and Strength saving throws.\n- When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table. You have resistance to bludgeoning, piercing, and slashing damage. \nIf you are able to cast spells, you can\'t cast them or concentrate on them while raging. \nYour rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven\'t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. \nOnce you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.' },
      { name: 'Unarmored Defense', level: 1, 
         description: 'While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.' },
      { name: 'Reckless Attack', level: 2, 
         description: 'Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.' },
      { name: 'Danger Sense', level: 2, 
         description: 'At 2nd level, you gain an uncanny sense of when things nearby aren\'t as they should be, giving you an edge when you dodge away from danger.\nYou have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can\'t be blinded, deafened, or incapacitated.' },
      { name: 'Primal Path', level: 3 },
      { name: 'Ability Score Improvement', level: 4, 
         description: 'When you reach 4th level, 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
      { name: 'Extra Attack', level: 5, 
         description: 'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.' },
      { name: 'Fast Movement', level: 5, 
         description: 'Starting at 5th level, your speed increases by 10 feet while you aren\'t wearing heavy armor.' },
      { name: 'Path Feature 1', level: 6 },
      { name: 'Feral Instinct', level: 7, 
         description: 'By 7th level, your instincts are s o honed that you have advantage on initiative rolls.\nAdditionally, if you are surprised at the beginning of combat and aren\'t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.' },
         // { name: 'Ability Score Improvement 2', level: 8 },
      { name: 'Brutal Critical', level: 9, 
         description: 'Beginning a t 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.\nThis increases to two additional dice at 13th level and three additional dice at 17th level.' },
      { name: 'Path Feature 2', level: 10 },
      { name: 'Relentless Rage', level: 11, 
         description: 'Starting at 1 1th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you\'re raging and don\'t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.\nEach time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.' },
      // { name: 'Ability Score Improvement 3', level: 12 },
      // { name: 'Brutal Critical 2', level: 13 },
      { name: 'Path Feature 3', level: 14 },
      { name: 'Persistent Rage', level: 15, 
         description: 'Beginning at 1 5th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.' },
      // { name: 'Ability Score Improvement 4', level: 16 },
      // { name: 'Brutal Critical 3', level: 17 },
      { name: 'Indomitable Might', level: 18, 
         description: 'Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.' },
      // { name: 'Ability Score Improvement 5', level: 19 },
      { name: 'Primal Champion', level: 20, description: 'At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.' },
   ],
   bard: [
      { name: 'Spellcasting', level: 1, description: spellCasting.bard.join('\n') },
      { name: 'Bardic Inspiration', level: 1, 
         description: 'You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.\nOnce within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.\nYou can use this feature a number of times equal to your Charisma modifier.Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level.' },
      { name: 'Jack Of All Trades', level: 2, 
         description: 'Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn\'t already include your proficiency bonus.' },
      { name: 'Song Of Rest', level: 2, 
         description: 'Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points at the end of the short rest by spending one or more Hit Dice, each of those creatures regains an extra 1d6 hit points.\nThe extra Hit Points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level.' },
      { name: 'Bard College', level: 3 },
      { name: 'Expertise', level: 3, 
         description: 'At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\nAt 10th level, you can choose another two skill proficiencies to gain this benefit.' },
      { name: 'Ability Score Improvement', level: 4, 
         description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
      // { name: 'Bardic Inspiration 2', level: 5 },
      { name: 'Font Of Inspiration', level: 5, 
         description: 'Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest.' },
      { name: 'Countercharm', level: 6, 
         description: 'At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required).' },
      { name: 'Bard College Feature 1', level: 6 },
      // { name: 'Ability Score Improvement 2', level: 8 },
      // { name: 'Song of Rest 2', level: 9 },
      // { name: 'Bardic Inspiration 3', level: 10 },
      // { name: 'Expertise 2', level: 10 },
      { name: 'Magical Secrets', level: 10, 
         description: 'By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any classes, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.\nThe chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.\nYou learn two additional spells from any classes at 14th level and again at 18th level.' },
      // { name: 'Ability Score Improvement 3', level: 12 },
      // { name: 'Song of Rest 3', level: 13 },
      // { name: 'Magical Secrets 2', level: 14 },
      { name: 'Bard College Feature 2', level: 14 },
      // { name: 'Bardic Inspiration 4', level: 15 },
      // { name: 'Ability Score Improvement 4', level: 16 },
      // { name: 'Song of Rest 4', level: 17 },
      // { name: 'Magical Secrets 3', level: 18 },
      // { name: 'Ability Score Improvement 5', level: 19 },
      { name: 'Superior Inspiration', level: 20, 
         description: 'At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use.' },
   ],
   cleric: [
      { name: 'Spellcasting', level: 1, description: spellCasting.cleric.join('\n') },
      { name: 'Divine Domain', level: 1 },
      { name: 'Channel Divinity', level: 2, 
         description: 'At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.\n\nWhen you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.\n\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.\n\nBeginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses.\n\nChannel Divinity: Turn Undead\n\nAs an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.\n\nA turned creature must spend its turns trying to move as far away from you as it can, and it can\'t willingly move to a space within 30 feet of you. It also can\'t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there\'s nowhere to move, the creature can use the Dodge action.' },
      { name: 'Divine Domain Feature 1', level: 2 },
      { name: 'Ability Score Improvement', level: 4, 
         description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
      { name: 'Destroy Undead', level: 5, 
         description: 'Starting at 5th level, when an undead fails its saving throw against your Turn Undead feature, the creature is instantly destroyed if its challenge rating is at or below a certain threshold, as shown in the Cleric table above.' },
      // { name: 'Channel Divinity 2', level: 6 },
      { name: 'Divine Domain Feature 2', level: 6 },
      // { name: 'Ability Score Improvement 2', level: 8 },
      // { name: 'Destroy Undead 2', level: 8 },
      { name: 'Divine Domain Feature 3', level: 8 },
      { name: 'Divine Intervention', level: 10, 
         description: 'Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.\n\nImploring your deity\'s aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can\'t use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.' },
      // { name: 'Destroy Undead 3', level: 11 },
      // { name: 'Ability Score Improvement 3', level: 12 },
      // { name: 'Destroy Undead 4', level: 14 },
      // { name: 'Ability Score Improvement 4', level: 16 },
      // { name: 'Destroy Undead 5', level: 17 },
      { name: 'Divine Domain Feature 4', level: 17 },
      // { name: 'Channel Divinity 3', level: 18 },
      // { name: 'Ability Score Improvement 5', level: 19 },
      { name: 'Divine Intervention Improvement', level: 20, 
         description: 'At 20th level, your call for intervention succeeds automatically, no roll required.' },
   ],
   druid: [
      { name: 'Spellcasting', level: 1, description: spellCasting.druid.join('\n') },
      { name: 'Druidic', level: 1, 
         description: 'You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message\'s presence with a successful DC 15 Wisdom (Perception) check but can\'t decipher it without magic.' },
      { name: 'Wild Shape', level: 2, 
         description: 'Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.\n\nYour druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn\'t have a flying or swimming speed.\nYou can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.' },
      { name: 'Druid Circle', level: 2 },
      { name: 'Ability Score Improvement', level: 4, 
         description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
      // { name: 'Wild Shape 2', level: 4 },
      { name: 'Druid Circle Feature 1', level: 6 },
      // { name: 'Ability Score Improvement 2', level: 8 },
      // { name: 'Wild Shape 3', level: 8 },
      { name: 'Druid Circle Feature 2', level: 10 },
      // { name: 'Ability Score Improvement 3', level: 12 },
      { name: 'Druid Circle Feature 3', level: 14 },
      // { name: 'Ability Score Improvement 4', level: 16 },
      { name: 'Timeless Body', level: 18, 
         description: 'Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year.' },
      { name: 'Beast Spells', level: 18, 
         description: 'Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren\'t able to provide material components.' },
      // { name: 'Ability Score Improvement 5', level: 19 },
      { name: 'Archdruid', level: 20, 
         description: 'At 20th level, you can use your Wild Shape an unlimited number of times. Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren\'t consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape.' },
   ],
   fighter: [
      { name: 'Fighting Style', level: 1, 
         description: 'You adopt a particular style of fighting as your specialty. Choose one of the following options. You can\'t take a Fighting Style option more than once, even if you later get to choose again.' },
      { name: 'Second Wind', level: 1, 
         description: 'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.' },
      { name: 'Action Surge', level: 2, 
         description: 'Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action. Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn.' },
      { name: 'Martial Archetype', level: 3 },
      { name: 'Ability Score Improvement', level: 4, 
         description: 'When you reach 4th level, and again at 6th, 8th, 12th, 14th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
      { name: 'Extra Attack', level: 5, 
         description: 'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn. The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class.' },
      // { name: 'Ability Score Improvement 2', level: 6 },
      { name: 'Martial Archetype Feature 1', level: 7 },
      // { name: 'Ability Score Improvement 3', level: 8 },
      { name: 'Indomitable', level: 9, 
         description: 'Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can\'t use this feature again until you finish a long rest.\n\nYou can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level.' },
      { name: 'Martial Archetype Feature 2', level: 10 },
      // { name: 'Extra Attack 2', level: 11 },
      // { name: 'Ability Score Improvement 4', level: 12 },
      // { name: 'Indomitable 2', level: 13 },
      // { name: 'Ability Score Improvement 5', level: 14 },
      // { name: 'Martial Archetype Feature 3', level: 15 },
      // { name: 'Ability Score Improvement 6', level: 16 },
      // { name: 'Action Surge 2', level: 17 },
      // { name: 'Indomitable 3', level: 17 },
      { name: 'Martial Archetype Feature 4', level: 18 },
      // { name: 'Ability Score Improvement 7', level: 19 },
      // { name: 'Extra Attack 3', level: 20 },
   ],
   monk: [
      { name: 'Unarmored Defense', level: 1, 
         description: 'Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.' },
      { name: 'Martial Arts', level: 1, 
         description: 'At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don\'t have the two-handed or heavy property. You gain the following benefits while you are unarmed or wielding only monk weapons and you aren\'t wearing armor or wielding a shield: You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons. You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table. When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven\'t already taken a bonus action this turn. Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon on the Weapons page.' },
      { name: 'Ki', level: 2, 
         description: 'Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table. You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class. When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points. Some of your ki features require your target to make a saving throw to resist the feature\'s effects. The saving throw DC is calculated as follows: Ki save DC = 8 + your proficiency bonus + your Wisdom modifier Flurry of Blows. Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action. Patient Defense. You can spend 1 ki point to take the Dodge action as a bonus action on your turn. Step of the Wind. You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn.' },
      { name: 'Unarmored Movement', level: 2, 
         description: 'Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.\n\nAt 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move.' },
      { name: 'Monastic Tradition', level: 3 },
      { name: 'Deflect Missiles', level: 3, 
         description: 'Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d10 + your Dexterity modifier + your monk level. If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack with a range of 20/60 using the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack.' },
      { name: 'Ability Score Improvement', level: 4, 
         description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
      { name: 'Slow Fall', level: 4, 
         description: 'Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level.' },
      { name: 'Extra Attack', level: 5, 
         description: 'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn' },
      { name: 'Stunning Strike', level: 5, description: 'Starting at 5th level, you can interfere with the flow of ki in an opponent\'s body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn.' },
      { name: 'Ki-Empowered Strikes', level: 6, 
         description: 'Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.' },
      { name: 'Monastic Tradition Feature 1', level: 6 },
      { name: 'Evasion', level: 7, 
         description: 'At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon\'s lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.' },
      { name: 'Stillness Of Mind', level: 7, 
         description: 'Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened.' },
      // { name: 'Ability Score Improvement 2', level: 8 },
      // { name: 'Unarmoured Movement 2', level: 9 },
      { name: 'Purity Of Body', level: 10, 
         description: 'At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison.' },
      { name: 'Monastic Tradition Feature 2', level: 11 },
      // { name: 'Ability Score Improvement 3', level: 12 },
      { name: 'Tongue Of The Sun And Moon', level: 13, 
         description: 'Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say.' },
      { name: 'Diamond Soul', level: 14, 
         description: 'Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.\n\nAdditionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result.' },
      { name: 'Timeless Body', level: 15, 
         description: 'At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can\'t be aged magically. You can still die of old age, however. In addition, you no longer need food or water.' },
      // { name: 'Ability Score Improvement 4', level: 16 },
      // { name: 'Monastic Tradition Feature 3', level: 17 },
      { name: 'Empty Body', level: 18, 
         description: 'Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.\n\nAdditionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can\'t take any other creatures with you.' },
      // { name: 'Ability Score Improvement 5', level: 19 },
      { name: 'Perfect Self', level: 20, 
         description: 'At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points.' },
   ],
   paladin: [
      { name: 'Divine Sense', level: 1, 
         description: 'The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.\n\nYou can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses.' },
      { name: 'Lay On Hands', level: 1, 
         description: 'Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.\n\nAs an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.\n\nAlternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.\n\nThis feature has no effect on undead and constructs.' },
      { name: 'Fighting Style', level: 2, 
         description: 'Starting at 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can\'t take a Fighting Style option more than once, even if you later get to choose again.' },
      { name: 'Spellcasting', level: 2, description: spellCasting.paladin.join('\n') },
      { name: 'Divine Smite', level: 2, 
         description: 'Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon\'s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend, to a maximum of 6d8.' },
      { name: 'Divine Health', level: 3, 
         description: 'By 3rd level, the divine magic flowing through you makes you immune to disease.' },
      { name: 'Sacred Oath', level: 3 },
      { name: 'Channel Divinity', level: 3, 
         description: 'Channel Divinity\n\nYour oath allows you to channel divine energy to fuel magical effects. Each Channel Divinity option provided by your oath explains how to use it.\n\nWhen you use your Channel Divinity, you choose which option to use. You must then finish a short or long rest to use your Channel Divinity again.\n\nSome Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your paladin spell save DC.' },
      { name: 'Ability Score Improvement', level: 4, 
         description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
      { name: 'Extra Attack', level: 5, 
         description: 'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.' },
      { name: 'Aura Of Protection', level: 6, 
         description: 'Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.\n\nAt 18th level, the range of this aura increases to 30 feet.' },
      { name: 'Sacred Oath Feature 1', level: 7 },
      // { name: 'Ability Score Improvement 2', level: 8 },
      { name: 'Aura Of Courage', level: 10, 
         description: 'Starting at 10th level, you and friendly creatures within 10 feet of you can\'t be frightened while you are conscious.\n\nAt 18th level, the range of this aura increases to 30 feet.' },
      // { name: 'Divine Smite 2', level: 11 },
      { name: 'Improved Divine Smite', level: 11, 
         description: 'By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage.' },
      // { name: 'Ability Score Improvement 3', level: 12 },
      { name: 'Cleansing Touch', level: 14, 
         description: 'Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.\n\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest.' },
      // { name: 'Sacred Oath Feature 2', level: 15 },
      // { name: 'Ability Score Improvement 4', level: 16 },
      // { name: 'Aura of Protection 2', level: 18 },
      // { name: 'Aura of Courage 2', level: 18 },
      // { name: 'Ability Score Improvement 5', level: 19 },
      // { name: 'Sacred Oath Feature 3', level: 20 },
   ],
   ranger: [
      { name: 'Favored Enemy', level: 1, 
         description: 'Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.\n\nChoose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.\n\nYou have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.\n\nWhen you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.\n\nYou choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.' },
      { name: 'Natural Explorer', level: 1, 
         description: 'Also at 1st level, you are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you\'re proficient in.\n\nWhile traveling for an hour or more in your favored terrain, you gain the following benefits:\n\n    Difficult terrain doesn\'t slow your group\'s travel.\n    Your group can\'t become lost except by magical means.\n    Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.\n    If you are traveling alone, you can move stealthily at a normal pace.\n    When you forage, you find twice as much food as you normally would.\n    While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.\n\nYou choose additional favored terrain types at 6th and 10th level.' },
      { name: 'Fighting Style', level: 2, 
         description: 'At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options. You can\'t take a Fighting Style option more than once, even if you later get to choose again.' },
      { name: 'Spellcasting', level: 2, description: spellCasting.ranger.join('\n') },
      { name: 'Primeval Awareness', level: 3, 
         description: 'Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn\'t reveal the creatures\' location or number.' },
      { name: 'Ability Score Improvement', level: 4, 
         description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
      { name: 'Extra Attack', level: 5, 
         description: 'Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.' },
      // { name: 'Favoured Enemy 2', level: 6 },
      // { name: 'Natural Explorer 2', level: 6 },
      { name: 'Ranger Archetype Feature 1', level: 7 },
      // { name: 'Ability Score Improvement 2', level: 8 },
      { name: 'Land\'s Stride', level: 8, 
         description: 'Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.\n\nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the Entangle spell.' },
      // { name: 'Natural Explorer 3', level: 10 },
      { name: 'Hide In Plain Sight', level: 10, 
         description: 'Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.\n\nOnce you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.' },
      // { name: 'Ranger Archetype Feature 2', level: 11 },
      // { name: 'Ability Score Improvement 3', level: 12 },
      // { name: 'Favoured Enemy 3', level: 14 },
      { name: 'Vanish', level: 14, 
         description: 'Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can\'t be tracked by nonmagical means, unless you choose to leave a trail.' },
      // { name: 'Ranger Archetype Feature 3', level: 15 },
      // { name: 'Ability Score Improvement 4', level: 16 },
      { name: 'Feral Senses', level: 18, 
         description: 'At 18th level, you gain preternatural senses that help you fight creatures you can\'t see. When you attack a creature you can\'t see, your inability to see it doesn\'t impose disadvantage on your attack rolls against it.\n\nYou are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn\'t hidden from you and you aren\'t blinded or deafened.' },
      // { name: 'Ability Score Improvement 5', level: 19 },
      { name: 'Foe Slayer', level: 20, description: 'At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.' }
   ],
   rogue: [
      {name: 'Expertise 1', level: 1},
      {name: 'Sneak Attack', level: 1},
      {name: 'Thieves\' Cant', level: 1},
      {name: 'Cunning Action', level: 2},
      {name: 'Roguish Archetype', level: 3},
      {name: 'Ability Score Improvement 1', level: 4},
      {name: 'Uncanny Dodge', level: 5},
      {name: 'Expertise 2', level: 6},
      {name: 'Evasion', level: 7},
      {name: 'Ability Score Improvement 2', level: 8},
      {name: 'Roguish Archetype Feature 1', level: 9},
      {name: 'Ability Score Improvement 3', level: 10},
      {name: 'Reliable Talent', level: 11},
      {name: 'Ability Score Improvement 4', level: 12},
      {name: 'Roguish Archetype Feature 2', level: 13},
      {name: 'Blindsense', level: 14},
      {name: 'Slippery Mind', level: 15},
      {name: 'Ability Score Improvement 5', level: 16},
      {name: 'Roguish Archetype Feature 3', level: 17},
      {name: 'Elusive', level: 18},
      {name: 'Ability Score Improvement 6', level: 19},
      {name: 'Stroke of Luck', level: 20}
   ],
   sorcerer: [
      {name: 'Spellcasting', level: 1},
      {name: 'Sorcerous Origins', level: 1},
      {name: 'Font of Magic', level: 2},
      {name: 'Metamagic 1', level: 3},
      {name: 'Ability Score Improvement 1', level: 4},
      {name: 'Sorcerous Origins Feature 1', level: 6},
      {name: 'Ability Score Improvement 2', level: 8},
      {name: 'Metamagic 2', level: 10},
      {name: 'Ability Score Improvement 3', level: 12},
      {name: 'Sorcerous Origins Feature 2', level: 14},
      {name: 'Ability Score Improvement 4', level: 16},
      {name: 'Metamagic 3', level: 17},
      {name: 'Sorcerous Origins Feature 3', level: 18},
      {name: 'Ability Score Improvement 5', level: 19},
      {name: 'Sorcerous Restoration', level: 20}
   ],
   warlock: [
      { name: 'Otherworldly Patron', level: 1 },
      { name: 'Pact Magic', level: 1 },
      { name: 'Eldritch Invocations 1', level: 2 },
      { name: 'Pact Boon', level: 3 },
      { name: 'Ability Score Improvement 1', level: 4 },
      { name: 'Otherworldly Patron Feature 1', level: 6 },
      { name: 'Ability Score Improvement 2', level: 8 },
      { name: 'Otherworldly Patron Feature 2', level: 10 },
      { name: 'Mystic Arcanum 1', level: 11 },
      { name: 'Ability Score Improvement 3', level: 12 },
      { name: 'Mystic Arcanum 2', level: 13 },
      { name: 'Otherworldly Patron Feature 3', level: 14 },
      { name: 'Mystic Arcanum 3', level: 15 },
      { name: 'Ability Score Improvement 4', level: 16 },
      { name: 'Mystic Arcanum 4', level: 17 },
      { name: 'Ability Score Improvement 5', level: 19 },
      { name: 'Eldritch Master', level: 20 }
   ],
   wizard: [
      { name: 'Spellcasting', level: 1 },
      { name: 'Arcane Recovery', level: 1 },
      { name: 'Arcane Tradition', level: 2 },
      { name: 'Ability Score Improvement 1', level: 4 },
      { name: 'Arcane Tradition Feature 1', level: 6 },
      { name: 'Ability Score Improvement 2', level: 8 },
      { name: 'Arcane Tradition Feature 2', level: 10 },
      { name: 'Ability Score Improvement 3', level: 12 },
      { name: 'Arcane Tradition Feature 3', level: 14 },
      { name: 'Ability Score Improvement 4', level: 16 },
      { name: 'Spell Mastery', level: 18 },
      { name: 'Ability Score Improvement 5', level: 19 },
      { name: 'Signature Spell', level: 20 }
   ]
}

export const featureList = {
   barbarian: [
      ['Rage', 'Unarmoured Defence'], ['Reckless Attack', 'Danger Sense'], ['Primal Path'], ['Ability Score Improvement 1'], ['Extra Attack', 'Fast Movement'], ['Path Feature 1'], ['Feral Instinct'], ['Ability Score Improvement 2'], ['Brutal Critical 1'], ['Path Feature 2'], ['Relentless Rage'], ['Ability Score Improvement 3'], ['Brutal Critical 2'], ['Path Feature 3'], ['Persistent Rage'], ['Ability Score Improvement 4'], ['Brutal Critical 3'], ['Indomitable Might'], ['Ability Score Improvement 5'], ['Primal Champion']
   ],
   bard: [
      ['Spellcasting', 'Bardic Inspiration 1'], ['Jack of All Trades', 'Song of Rest 1'], ['Bard College', 'Expertise 1'], ['Ability Score Improvement 1'], ['Bardic Inspiration 2', 'Font of Inspiration'], ['Coutercharm', 'Bard College Feature 1'], [], ['Ability Score Improvement 2'], ['Song of Rest 2'], ['Bardic Inspiration 3', 'Expertise 2', 'Magical Secrets 1'], [], ['Ability Score Improvement 3'], ['Song of Rest 3'], ['Magical Secrets 2', 'Bard College Feature 2'], ['Bardic Inspiration 4'], ['Ability Score Improvement 4'], ['Song of Rest 4'], ['Magical Secrets 3'], ['Ability Score Improvement 5'], ['Superior Inspiration']
   ],
   cleric: [
      ['Spellcasting', 'Divine Domain'], ['Channel Divinity 1', 'Divine Domain Feature 1'], [], ['Ability Score Improvement 1'], ['Destroy Undead 1'], ['Channel Divinity 2', 'Divine Domain Feature 2'], [], ['Ability Score Improvement 2', 'Destroy Undead 2', 'Divine Domain Feature 3'], [], ['Divine Intervention'], ['Destroy Undead 3'], ['Ability Score Improvement 3'], [], ['Destroy Undead 4'], [], ['Ability Score Improvement 4'], ['Destroy Undead 5', 'Divine Domain Feature 4'], ['Channel Divinity 3'], ['Ability Score Improvement 5'], ['Divine Intervention Improvement']
   ],
   druid: [
      ['Spellcasting', 'Druidic'], ['Wild Shape 1', 'Druid Circle'], [], ['Ability Score Improvement 1', 'Wild Shape 2'], [], ['Druid Circle Feature 1'], [], ['Ability Score Improvement 2', 'Wild Shape 3'], [], ['Druid Circle Feature 2'], [], ['Ability Score Improvement 3'], [], ['Druid Circle Feature 3'], [], ['Ability Score Improvement 4'], [], ['Timeless Body', 'Beast Spells'], ['Ability Score Improvement 5'], ['Archdruid']
   ],
   fighter: [
      ['Fighting Style', 'Second Wind'], ['Action Surge 1'], ['Martial Archetype'], ['Ability Score Improvement 1'], ['Extra Attack 1'], ['Ability Score Improvement 2'], ['Martial Archetype Feature 1'], ['Ability Score Improvement 3'], ['Indomitable 1'], ['Martial Archetype Feature 2'], ['Extra Attack 2'], ['Ability Score Improvement 4'], ['Indomitable 2'], ['Ability Score Improvement 5'], ['Martial Archetype Feature 3'], ['Ability Score Improvement 6'], ['Action Surge 2', 'Indomitable 3'], ['Martial Archetype Feature 4'], ['Ability Score Improvement 7'], ['Extra Attack 3']
   ],
   monk: [
      ['Unarmoured Defence', 'Martial Arts'], ['Ki', 'Unarmoured Movement 1'], ['Monastic Tradition', 'Deflect Missiles'], ['Ability Score Improvement 1', 'Slow Fall'], ['Extra Attack', 'Stunning Strike'], ['Ki-Empowered Strikes', 'Monastic Tradition Feature 1'], ['Evasion', 'Stillness of Mind'], ['Ability Score Improvement 2'], ['Unarmoured Movement 2'], ['Purity of Body'], ['Monastic Tradition Feature 2'], ['Ability Score Improvement 3'], ['Tongue of the Sun and Moon'], ['Diamond Soul'], ['Timeless Body'], ['Ability Score Improvement 4'], ['Monastic Tradition Feature 3'], ['Empty Body'], ['Ability Score Improvement 5'], ['Perfect Self']
   ],
   paladin: [
      ['Divine Sense', 'Lay on Hands'], ['Fighting Style', 'Spellcasting', 'Divine Smite 1'], ['Divine Health', 'Sacred Oath'], ['Ability Score Improvement 1'], ['Extra Attack'], ['Aura of Protection 1'], ['Sacred Oath Feature 1'], ['Ability Score Improvement 2'], [], ['Aura of Courage 1'], ['Divine Smite 2'], ['Ability Score Improvement 3'], [], ['Cleansing Touch'], ['Sacred Oath Feature 2'], ['Ability Score Improvement 4'], [], ['Aura of Protection 2', 'Aura of Courage 2'], ['Ability Score Improvement 5'], ['Sacred Oath Feature 3']
   ],
   ranger: [
      ['Favoured Enemy 1', 'Natural Explorer 1'], ['Fighting Style', 'Spellcasting'], ['Ranger Archetype', 'Primeval Awareness'], ['Ability Score Improvement 1'], ['Extra Attack'], ['Favoured Enemy 2', 'Natural Explorer 2'], ['Ranger Archetype Feature 1'], ['Ability Score Improvement 2', 'Land\'s Stride'], [], ['Natural Explorer 3', 'Hide in Plain Sight'], ['Ranger Archetype Feature 2'], ['Ability Score Improvement 3'], [], ['Favoured Enemy 3', 'Vanish'], ['Ranger Archetype Feature 3'], ['Ability Score Improvement 4'], [], ['Feral Senses'], ['Ability Score Improvement 5'], ['Foe Slayer']
   ],
   rogue: [
      ['Expertise 1', 'Sneak Attack', 'Thieves\' Cant'], ['Cunning Action'], ['Roguish Archetype'], ['Ability Score Improvement 1'], ['Uncanny Dodge'], ['Expertise 2'], ['Evasion'], ['Ability Score Improvement 2'], ['Roguish Archetype Feature 1'], ['Ability Score Improvement 3'], ['Reliable Talent'], ['Ability Score Improvement 4'], ['Roguish Archetype Feature 2'], ['Blindsense'], ['Slippery Mind'], ['Ability Score Improvement 5'], ['Roguish Archetype Feature 3'], ['Elusive'], ['Ability Score Improvement 6'], ['Stroke of Luck']
   ],
   sorcerer: [
      ['Spellcasting', 'Sorcerous Origins'], ['Font of Magic'], ['Metamagic 1'] ['Ability Score Improvement 1'], [], ['Sorcerous Origins Feature 1'], [], ['Ability Score Improvement 2'], [], ['Metamagic 2'], [], ['Ability Score Improvement 3'], [], ['Sorcerous Origins Feature 2'], [], ['Ability Score Improvement 4'], ['Metamagic 3'], ['Sorcerous Origins Feature 3'], ['Ability Score Improvement 5'], ['Sorcerous Restoration']
   ],
   warlock: [
      ['Otherworldly Patron', 'Pact Magic'], ['Eldritch Invocations 1'], ['Pact Boon'], ['Ability Score Improvement 1'], [], ['Otherworldly Patron Feature 1'], [], ['Ability Score Improvement 2'], [], ['Otherworldly Patron Feature 2'], ['Mystic Arcanum 1'], ['Ability Score Improvement 3'], ['Mystic Arcanum 2'], ['Otherworldly Patron Feature 3'], ['Mystic Arcanum 3'], ['Ability Score Improvement 4'], ['Mystic Arcanum 4'], [], ['Ability Score Improvement 5'], ['Eldritch Master']
   ],
   wizard: [
      ['Spellcasting', 'Arcane Recovery'], ['Arcane Tradition'], [], ['Ability Score Improvement 1'], [], ['Arcane Tradition Feature 1'], [], ['Ability Score Improvement 2'], [], ['Arcane Tradition Feature 2'], [], ['Ability Score Improvement 3'], [], ['Arcane Tradition Feature 3'], [], ['Ability Score Improvement 4'], [], ['Spell Mastery'], ['Ability Score Improvement 5'], ['Signature Spell']
   ]
};

const descTest = {

   rogue: [
      { name: 'Expertise', level: 1, description: 'At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves\' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\n\nAt 6th level, you can choose two more of your proficiencies (in skills or with thieves\' tools) to gain this benefit.' },
{ name: 'Sneak Attack', level: 1, description: 'Beginning at 1st level, you know how to strike subtly and exploit a foe\'s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.\n\nYou don\'t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn\'t incapacitated, and you don\'t have disadvantage on the attack roll.\n\nThe amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table.' },
{ name: 'Thieves\' Cant', level: 1, description: 'During your rogue training you learned thieves\' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves\' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.\n\nIn addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves\' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.' },
{ name: 'Cunning Action', level: 2, description: 'Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.' },
{ name: 'Ability Score Improvement', level: 4, description: 'When you reach 4th level, and again at 8th, 10th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
{ name: 'Uncanny Dodge', level: 5, description: 'Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack\'s damage against you.' },
{ name: 'Evasion', level: 7, description: 'Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon\'s fiery breath or an Ice Storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.' },
{ name: 'Reliable Talent', level: 11, description: 'By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.' },
{ name: 'Blindsense', level: 14, description: 'Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.' },
{ name: 'Slippery Mind', level: 15, description: 'By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws.' },
{ name: 'Elusive', level: 18, description: 'Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren\'t incapacitated.' },
{ name: 'Stroke Of Luck', level: 20, description: 'At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.\n\nOnce you use this feature, you can\'t use it again until you finish a short or long rest.' },
   ],
   sorcerer: [
      { name: 'Spellcasting', level: 1, description: 'An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells.\nCantrips\n\nAt 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn additional sorcerer cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Sorcerer table.\nSpell Slots\n\nThe Sorcerer table shows how many spell slots you have to cast your sorcerer spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell\'s level or higher. You regain all expended spell slots when you finish a long rest.\n\nFor example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.\nSpells Known of 1st Level and Higher\n\nYou know two 1st-level spells of your choice from the sorcerer spell list.\n\nThe Spells Known column of the Sorcerer table shows when you learn more sorcerer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.\n\nAdditionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.\nSpellcasting Ability\n\nCharisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.\n\nSpell save DC = 8 + your proficiency bonus + your Charisma modifier\n\nSpell attack modifier = your proficiency bonus + your Charisma modifier\nSpellcasting Focus\n\nYou can use an arcane focus as a spellcasting focus for your sorcerer spells.' },
{ name: 'Font Of Magic', level: 2, description: 'At 2nd level, you tap into a deep wellspring of magic within yourself. This wellspring is represented by sorcery points, which allow you to create a variety of magical effects.\n\n    Sorcery Points. You have 2 sorcery points, and you gain more as you reach higher levels, as shown in the Sorcery Points column of the Sorcerer table. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest.\n\n    Flexible Casting. You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.\n          Creating Spell Slots. You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th. Any spell slot you create with this feature vanishes when you finish a long rest.\n          Converting a Spell Slot to Sorcery Points. As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot\'s level.' },
{ name: 'Metamagic', level: 3, description: 'At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.\n\nYou can use only one Metamagic option on a spell when you cast it, unless otherwise noted.' },
{ name: 'Ability Score Improvement', level: 4, description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
{ name: 'Sorcerous Restoration', level: 20, description: 'At 20th level, you regain 4 expended sorcery points whenever you finish a short rest.' },
   ],
   warlock: [
      { name: 'Pact Magic', level: 1, description: 'Your arcane research and the magic bestowed on you by your patron have given you facility with spells.\nCantrips\n\nYou know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.\nSpell Slots\n\nThe Warlock table shows how many spell slots you have to cast your warlock spells of 1st through 5th level. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.\n\nFor example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell witch bolt, you must spend one of those slots, and you cast it as a 3rd-level spell.\nSpells Known of 1st Level and Higher\n\nAt 1st level, you know two 1st-level spells of your choice from the warlock spell list.\n\nThe Spells Known column of the Warlock table shows when you learn more warlock spells of your choice of 1st level or higher. A spell you choose must be of a level no higher than what\'s shown in the table\'s Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.\n\nAdditionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.\nSpellcasting Ability\n\nCharisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.\n\nSpell save DC = 8 + your proficiency bonus + your Charisma modifier\n\nSpell attack modifier = your proficiency bonus + your Charisma modifier\nSpellcasting Focus\n\nYou can use an arcane focus as a spellcasting focus for your warlock spells.' },
{ name: 'Eldritch Invocations', level: 2, description: 'In your study of occult lore, you have unearthed Eldritch Invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.\n\nAt 2nd level, you gain two eldritch invocations of your choice. When you gain certain warlock levels, you gain additional invocations of your choice, as shown in the Invocations Known column of the Warlock table. A level prerequisite refers to your level in this class.\n\nAdditionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level.' },
{ name: 'Pact Boon', level: 3, description: 'At 3rd level, your otherworldly patron bestows a gift upon you for your loyal service. You gain one of the following features of your choice.\n\n    Pact of the Blade\n        You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.\n        Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.\n        You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest.\n        You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can\'t affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks.\n\n    Pact of the Chain\n        You learn the find familiar spell and can cast it as a ritual. The spell doesn\'t count against your number of spells known.\n        When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.\n        Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to use its reaction to make one attack with its reaction.\n\n    Pact of the Tome\n        Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class\'s spell list (the three needn\'t be from the same list). While the book is on your person, you can cast those cantrips at will. They don\'t count against your number of cantrips known. If they don\'t appear on the warlock spell list, they are nonetheless warlock spells for you.\n        If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die.\n\n    Pact of the Talisman\n        Your patron gives you an amulet, a talisman that can aid the wearer when the need is great. When the wearer fails an ability check, they can add a d4 to the roll, potentially turning the roll into a success. This benefit can be used a number of times equal to your proficiency bonus, and all expended uses are restored when you finish a long rest.\n        If you lose the talisman, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous amulet. The talisman turns to ash when you die.' },
{ name: 'Ability Score Improvement', level: 4, description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
{ name: 'Mystic Arcanum', level: 11, description: 'At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.\n\nYou can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.\n\nAt higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic Arcanum when you finish a long rest.' },
{ name: 'Eldritch Master', level: 20, description: 'At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again.' },
   ],
   wizard: [
      { name: 'Spellcasting', level: 1, description: 'As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power.\nCantrips\n\nAt 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.\nSpellbook\n\nAt 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.\n\nThe spells that you add to your spellbook as you gain levels reflect the arcane research you conduct on your own, as well as intellectual breakthroughs you have had about the nature of the multiverse. You might find other spells during your adventures. You could discover a spell recorded on a scroll in an evil wizard\'s chest, for example, or in a dusty tome in an ancient library.\n\nCopying a Spell into the Book. When you find a wizard spell of 1st level or higher, you can add it to your spellbook if it is of a spell level you can prepare and if you can spare the time to decipher and copy it.\n\nCopying a spell into your spellbook involves reproducing the basic form of the spell, then deciphering the unique system of notation used by the wizard who wrote it. You must practice the spell until you understand the sounds or gestures required, then transcribe it into your spellbook using your own notation.\n\nFor each level of the spell, the process takes 2 hours and costs 50 gp. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it. Once you have spent this time and money, you can prepare the spell just like your other spells.\n\nReplacing the Book. You can copy a spell from your own spellbook into another book-for example, if you want to make a backup copy of your spellbook. This is just like copying a new spell into your spellbook, but faster and easier, since you understand your own notation and already know how to cast the spell. You need spend only 1 hour and 10 gp for each level of the copied spell.\n\nIf you lose your spellbook, you can use the same procedure to transcribe the spells that you have prepared into a new spellbook. Filling out the remainder of your spellbook requires you to find new spells to do so, as normal. For this reason, many wizards keep backup spellbooks in a safe place.\n\nThe Book\'s Appearance. Your spellbook is a unique compilation of spells, with its own decorative flourishes and margin notes. It might be a plain, functional leather volume that you received as a gift from your master, a finely bound gilt-edged tome you found in an ancient library or even a loose collection of notes scrounged together after you lost your previous spellbook in a mishap.\nPreparing and Casting Spells\n\nThe Wizard table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell\'s level or higher. You regain all expended spell slots when you finish a long rest.\n\nYou prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.\n\nFor example, if you\'re a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn\'t remove it from your list of prepared spells.\n\nYou can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.\nSpellcasting Ability\n\nIntelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.\n\nSpell save DC = 8 + your proficiency bonus + your Intelligence modifier\n\nSpell attack modifier = your proficiency bonus + your Intelligence modifier\nRitual Casting\n\nYou can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don\'t need to have the spell prepared.\nSpellcasting Focus\n\nYou can use an arcane focus as a spellcasting focus for your wizard spells.\nLearning Spells of 1st Level and Higher\n\nEach time you gain a wizard level, you can add two wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown on the Wizard table. On your adventures, you might find other spells that you can add to your spellbook.' },
{ name: 'Arcane Recovery', level: 1, description: 'You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.\n\nFor example, if you\'re a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots.' },
{ name: 'Ability Score Improvement', level: 4, description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.' },
{ name: 'Spell Mastery', level: 18, description: 'At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.\n\nBy spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels.' },
{ name: 'Signature Spells', level: 20, description: 'When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don\'t count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can\'t do so again until you finish a short or long rest.\n\nIf you want to cast either spell at a higher level, you must expend a spell slot as normal.' },
   ]
};

const subFeatures = {
   barbarian: {
      berserker: [
         {
            name: 'Frenzy',
            level: 3,
            description:
               'Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion (as described in appendix A).',
         },
         {
            name: 'Mindless Rage',
            level: 6,
            description:
               "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
         },
         {
            name: 'Intimidating Presence',
            level: 10,
            description:
               "Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you. If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.",
         },
         {
            name: 'Retaliation',
            level: 14,
            description:
               'Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.',
         },
      ],
      'totem warrior': [
         {
            name: 'Totem Spirit',
            level: 3,
            description:
               "At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object-an amulet or similar adornment-that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thickskinned, or if your totem is the eagle, your eyes turn bright yellow.\nYour totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle.\n   Bear. While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment.\n   Eagle. While you're raging, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.\n   Wolf. While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.\n   Elk. While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift.\n   Tiger. While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps.",
         },
         {
            name: 'Aspect Of The Best',
            level: 6,
            description:
               "At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.\n   Bear. You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.\n   Eagle. You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks.\n   Wolf. You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace (see chapter 8, \"Adventuring,\" for rules on travel pace).\n   Elk. Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not incapacitated (see chapter 8 in the Player's Handbook for more information about travel pace). The elk spirit helps you roam far and fast.\n   Tiger. You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts.",
         },
         {
            name: 'Spirit Walker',
            level: 10,
            description:
               'At 10th level, you can cast the commune with nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.',
         },
         {
            name: 'Totemic Attunement',
            level: 14,
            description:
               "At 14th level, you gain a magical benefit based o n a totem animal of your choice. You can choose the same animal you selected previously or a different one.\n   Bear. While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened.\n   Eagle. While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft.\n   Wolf. While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack.\n   Elk. While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to ld12 +your Strength modifier.\n   Tiger. While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it.",
         },
      ],
   },
   bard: {
      lore: [
         {
            name: 'Bonus Proficiencies',
            level: 3,
            description:
               'When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice.',
         },
         {
            name: 'Cutting Words',
            level: 3,
            description:
               "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed.",
         },
         {
            name: 'Additional Magical Secrets',
            level: 6,
            description:
               "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know.",
         },
         {
            name: 'Peerless Skill',
            level: 14,
            description:
               'Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roll the die for the ability check, but before the DM tells you whether you succeed or fail.',
         },
      ],
      valour: [
         {
            name: 'Bonus Proficiencies',
            level: 3,
            description:
               'When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons.',
         },
         {
            name: 'Combat Inspiration',
            level: 3,
            description:
               'Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses.',
         },
         {
            name: 'Extra Attack',
            level: 6,
            description:
               'Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.',
         },
         {
            name: 'Battle Magic',
            level: 14,
            description:
               'At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.',
         },
      ],
   },
   cleric: {
      knowledge: [
         {
            name: 'Blessings Of Knowledge',
            level: 1,
            description:
               'At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.\n\nYour proficiency bonus is doubled for any ability check you make that uses either of those skills.',
         },
         {
            name: 'Channel Divinity: Knowledge Of The Ages',
            level: 2,
            description:
               'Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool.',
         },
         {
            name: 'Channel Divinity: Read Thoughts',
            level: 6,
            description:
               "At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.\n\nAs an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.\n\nIf the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.\n\nDuring that time, you can use your action to end this effect and cast the Suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell.",
         },
         {
            name: 'Potent Spellcasting',
            level: 8,
            description:
               'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.',
         },
         {
            name: 'Visions Of The Past',
            level: 17,
            description:
               "Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.\n\nObject Reading. Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.\n\nArea Reading. As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation.",
         },
      ],
      life: [
         {
            name: 'Bonus Proficiencies',
            level: 1,
            description: 'When you choose this domain at 1st level, you gain proficiency with heavy armor.',
         },
         {
            name: 'Disciple Of Life',
            level: 1,
            description:
               "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level.",
         },
         {
            name: 'Channel Divinity: Preserve Life',
            level: 2,
            description:
               "Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.\n\nAs an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct.",
         },
         {
            name: 'Blessed Healer',
            level: 6,
            description:
               "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level.",
         },
         {
            name: 'Divine strike',
            level: 8,
            description:
               'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8.',
         },
         {
            name: 'Supreme Healing',
            level: 17,
            description:
               'Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12.',
         },
      ],
      light: [
         {
            name: 'Bonus Cantrip',
            level: 1,
            description:
               "When you choose this domain at 1st level, you gain the Light cantrip if you don't already know it. This cantrip doesn\'t count against the number of cleric cantrips you know.",
         },
         {
            name: 'Warding Flare',
            level: 1,
            description:
               "Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.\n\nYou can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.",
         },
         {
            name: 'Channel Divinity: Radiance Of The Dawn',
            level: 2,
            description:
               'Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.\n\nAs an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected.',
         },
         {
            name: 'Improved Flare',
            level: 6,
            description:
               'Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you.',
         },
         {
            name: 'Potent Spellcasting',
            level: 8,
            description:
               'Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip.',
         },
         {
            name: 'Corona Of Light',
            level: 17,
            description:
               'Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage.',
         },
      ],
      trickery: [
         {
            name: 'Blessing Of The Trickster',
            level: 1,
            description:
               'Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again.',
         },
         {
            name: 'Channel Divinity: Invoke Duplicity',
            level: 2,
            description:
               "Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.\n\nAs an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.\n\nFor the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target.",
         },
         {
            name: 'Channel Divinity: Cloak Of Shadows',
            level: 6,
            description:
               'Starting at 6th level, you can use your Channel Divinity to vanish.\n\nAs an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell.',
         },
         {
            name: 'Divine Strike',
            level: 8,
            description:
               'At 8th level, you gain the ability to infuse your weapon strikes with poison – a gift from your deity. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 poison damage to the target. When you reach 14th level, the extra damage increases to 2d8.',
         },
         {
            name: 'Improved Duplicity',
            level: 17,
            description:
               'At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet.',
         },
      ],
      nature: [
         {
            name: 'Acolyte Of Nature',
            level: 1,
            description:
               'At 1st level, you learn one cantrip of your choice from the druid spell list. This cantrip counts as a cleric cantrip for you, but it doesn\'t count against the number of cleric cantrips you know. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival.',
         },
         {
            name: 'Bonus Proficiency',
            level: 1,
            description: 'Also at 1st level, you gain proficiency with heavy armor.',
         },
         {
            name: 'Channel Divinity: Charm Animals And Plants',
            level: 2,
            description:
               'Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.\n\nAs an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate.',
         },
         {
            name: 'Dampen Elements',
            level: 6,
            description:
               'Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage.',
         },
         {
            name: 'Divine Strike',
            level: 8,
            description:
               'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 cold, fire, or lightning damage (your choice) to the target. When you reach 14th level, the extra damage increases to 2d8.',
         },
         {
            name: 'Master Of Nature',
            level: 17,
            description:
               'At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn.',
         },
      ],
      tempest: [
         {
            name: 'Bonus Proficiencies',
            level: 1,
            description: 'At 1st level, you gain proficiency with martial weapons and heavy armor.',
         },
         {
            name: 'Wrath Of The Storm',
            level: 1,
            description:
               'Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.\n\nYou can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
         },
         {
            name: 'Channel Divinity: Destructive Wrath',
            level: 2,
            description:
               'Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.\n\nWhen you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling.',
         },
         {
            name: 'Thunderous Strike',
            level: 6,
            description:
               'At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you.',
         },
         {
            name: 'Divine Strike',
            level: 8,
            description:
               'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 thunder damage to the target. When you reach 14th level, the extra damage increases to 2d8.',
         },
         {
            name: 'Stormborn',
            level: 17,
            description:
               'At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors.',
         },
      ],
      war: [
         {
            name: 'Bonus Proficiency',
            level: 1,
            description:
               'At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors.',
         },
         {
            name: 'War Priest',
            level: 1,
            description:
               'From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action.\n\nYou can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest.',
         },
         {
            name: 'Channel Divinity: Guided Strike',
            level: 2,
            description:
               'Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.',
         },
         {
            name: "Channel Divinity: War God's Blessing",
            level: 6,
            description:
               'At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses.',
         },
         {
            name: 'Divine Strike',
            level: 8,
            description:
               'At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 damage of the same type dealt by the weapon to the target. When you reach 14th level, the extra damage increases to 2d8.',
         },
         {
            name: 'Avatar Of Battle',
            level: 17,
            description:
               'At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.',
         },
      ],
   },
   druid: {
      land: [
         {
            name: 'Bonus Cantrip',
            level: 2,
            description:
               'When you choose this circle at 2nd level, you learn one additional druid cantrip of your choice. This cantrip doesn\'t count against the number of druid cantrips you know.',
         },
         {
            name: 'Natural Recovery',
            level: 2,
            description:
               "Starting at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest.\n\nFor example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots.",
         },
         {
            name: 'Circle Spells',
            level: 3,
            description:
               "Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land – arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark – and consult the associated list of spells.\n\nOnce you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you.\n\nArctic\nDruid Level 	Circle Spells\n3rd 	Hold Person, Spike Growth\n5th 	Sleet Storm, Slow\n7th 	Freedom of Movement, Ice Storm\n9th 	Commune with Nature, Cone of Cold\nCoast\nDruid Level 	Circle Spells\n3rd 	Mirror Image, Misty Step\n5th 	Water Breathing, Water Walk\n7th 	Control Water, Freedom of Movement\n9th 	Conjure Elemental, Scrying\nDesert\nDruid Level 	Circle Spells\n3rd 	Blur, Silence\n5th 	Create Food and Water, Protection from Energy\n7th 	Blight, Hallucinatory Terrain\n9th 	Insect Plague, Wall of Stone\nForest\nDruid Level 	Circle Spells\n3rd 	Barkskin, Spider Climb\n5th 	Call Lightning, Plant Growth\n7th 	Divination, Freedom of Movement\n9th 	Commune with Nature, Tree Stride\nGrassland\nDruid Level 	Circle Spells\n3rd 	Invisibility, Pass Without Trace\n5th 	Daylight, Haste\n7th 	Divination, Freedom of Movement\n9th 	Dream, Insect Plague\nMountain\nDruid Level 	Circle Spells\n3rd 	Spider Climb, Spike Growth\n5th 	Lightning Bolt, Meld into Stone\n7th 	Stone Shape, Stoneskin\n9th 	Passwall, Wall of Stone\nSwamp\nDruid Level 	Circle Spells\n3rd 	Darkness, Melf's Acid Arrow\n5th 	Water Walk, Stinking Cloud\n7th 	Freedom of Movement, Locate Creature\n9th 	Insect Plague, Scrying\nUnderdark\nDruid Level 	Circle Spells\n3rd 	Spider Climb, Web\n5th 	Gaseous Form, Stinking Cloud\n7th 	Greater Invisibility, Stone Shape\n9th 	Cloudkill, Insect Plague",
         },
         {
            name: "Land's Stride",
            level: 6,
            description:
               'Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.\n\nIn addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such as those created by the Entangle spell.',
         },
         {
            name: "Nature's Ward",
            level: 10,
            description:
               "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease.",
         },
         {
            name: "Nature's Sanctuary",
            level: 14,
            description:
               'When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.\n\nThe creature is aware of this effect before it makes its attack against you.',
         },
      ],
      moon: [
         {
            name: 'Combat Wild Shape',
            level: 2,
            description:
               'When you choose this circle at 2nd level, you gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.\n\nAdditionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended.',
         },
         {
            name: 'Circle Forms',
            level: 2,
            description:
               'The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1. You ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there.\n\nStarting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down.',
         },
         {
            name: 'Primal Strike',
            level: 6,
            description:
               'Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
         },
         {
            name: 'Elemental Wild Shape',
            level: 10,
            description:
               'At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental.',
         },
         {
            name: 'Thousand Forms',
            level: 14,
            description:
               'By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the Alter Self spell at will.',
         },
      ],
   },
   fighter: {
      'battle master': [
         {
            name: 'Combat Superiority',
            level: 3,
            description:
               "When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.\n\nManeuvers. You learn three maneuvers of your choice. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack. You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.\n\nSuperiority Dice. You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level.\n\nSaving Throws. Some of your maneuvers require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows:\n\nManeuver save DC = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)",
         },
         {
            name: 'Student Of War',
            level: 3,
            description: "At 3rd level, you gain proficiency with one type of artisan's tools of your choice.",
         },
         {
            name: 'Know Your Enemy',
            level: 7,
            description:
               'Starting at 7th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:\n\n    Strength score\n\n    Dexterity score\n\n    Constitution score\n\n    Armor Class\n\n    Current hit points\n\n    Total class levels, if any\n\n    Fighter class levels, if any',
         },
         {
            name: 'Improved Combat Superiority',
            level: 10,
            description: 'At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s.',
         },
         {
            name: 'Relentless',
            level: 15,
            description:
               'Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die.',
         },
      ],
      champion: [
         {
            name: 'Improved Crical',
            level: 3,
            description:
               'Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.',
         },
         {
            name: 'Remarkable Athlete',
            level: 7,
            description:
               "Starting at 7th level, you can add half your proficiency bonus (rounded up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.\n\nIn addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.",
         },
         {
            name: 'Additional Fighting Style',
            level: 10,
            description: 'At 10th level, you can choose a second option from the Fighting Style class feature.',
         },
         {
            name: 'Superior Critical',
            level: 15,
            description: 'Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20.',
         },
         {
            name: 'Survivor',
            level: 18,
            description:
               "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points.",
         },
      ],
      'eldritch knight': [
         {
            name: 'Spellcasting',
            level: 3,
            description:
               "When you reach 3rd level, you augment your martial prowess with the ability to cast spells.\nCantrips\n\nYou learn two cantrips of your choice from the wizard spell list. You learn an additional wizard cantrip of your choice at 10th level.\nSpell Slots\n\nThe Eldritch Knight Spellcasting table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\n\nFor example, if you know the 1st-level spell Shield and have a 1st-level and a 2nd-level spell slot available, you can cast Shield using either slot.\nSpells Known of 1st Level and Higher\n\nYou know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list.\n\nThe Spells Known column of the Eldritch Knight Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.\n\nThe spells you learn at 8th, 14th, and 20th level can come from any school of magic.\n\nWhenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.\nSpellcasting Ability\n\nIntelligence is your spellcasting ability for your wizard spells, since you learn your spells through study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.\n\nSpell save DC = 8 + your proficiency bonus + your Intelligence modifier\n\nSpell attack modifier = your proficiency bonus + your Intelligence modifier",
         },
         {
            name: 'Weapon Bond',
            level: 3,
            description:
               "At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.\n\nOnce you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.\n\nYou can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two.",
         },
         {
            name: 'War Magic',
            level: 7,
            description:
               'Beginning at 7th level, when you use your action to cast a cantrip, you can make one weapon attack as a bonus action.',
         },
         {
            name: 'Eldritch Strike',
            level: 10,
            description:
               "At 10th level, you learn how to make your weapon strikes undercut a creature's resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.",
         },
         {
            name: 'Arcane Charge',
            level: 15,
            description:
               'At 15th level, you gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action.',
         },
         {
            name: 'Improved War Magic',
            level: 18,
            description:
               'Starting at 18th level, when you use your action to cast a spell, you can make one weapon attack as a bonus action.',
         },
      ],
   },
   monk: {
      'four elements': [
         {
            name: 'Disciple Of The Elements',
            level: 3,
            description:
               "When you choose this tradition at 3rd level, you learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.\n\nYou know the Elemental Attunement discipline and one other elemental discipline of your choice. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.\n\nWhenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.\n\nCasting Elemental Spells. Some elemental disciplines allow you to cast spells. See chapter 10 for the general rules of spellcasting. To cast one of these spells, you use its casting time and other rules, but you don't need to provide material components for it.\n\nOnce you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as Burning Hands does. The spell's level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast Burning Hands, you can spend 3 ki points to cast it as a 2nd-level spell (the discipline's base cost of 2 ki points plus 1).\n\nThe maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level, as shown in the Spells and Ki Points table.\nSpells and Ki Points\nMonk Levels         Maximum Ki Points for a Spell\n5th-8th         3\n9th-12th         4\n13th-16th         5\n17th-20th         6",
         },
      ],
      'open hand': [
         {
            name: 'Open Hand Technique',
            level: 3,
            description:
               "Starting when you choose this tradition at 3rd level, you can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target:\n\n    It must succeed on a Dexterity saving throw or be knocked prone.\n\n    It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.\n\n    It can't take reactions until the end of your next turn.",
         },
         {
            name: 'Whoelness Of Body',
            level: 6,
            description:
               'At 6th level, you gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again.',
         },
         {
            name: 'Tranquility',
            level: 11,
            description:
               'Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a Sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your proficiency bonus.',
         },
         {
            name: 'Quivering Palm',
            level: 17,
            description:
               "At 17th level, you gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.\n\nYou can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action.",
         },
      ],
      shadow: [
         {
            name: 'Shadow Arts',
            level: 3,
            description:
               "Starting when you choose this tradition at 3rd level, you can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the minor illusion cantrip if you don't already know it.",
         },
         {
            name: 'Shadow Step',
            level: 6,
            description:
               'At 6th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn.',
         },
         {
            name: 'Cloak Of Shadows',
            level: 11,
            description:
               'By 11th level, you have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light.',
         },
         {
            name: 'Opportunist',
            level: 17,
            description:
               "At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature.",
         },
      ],
   },
   paladin: {
      ancients: [
         {
            name: 'Tenets Of The Ancients',
            level: 3,
            description:
               "The tenets of the Oath of the Ancients have been preserved for uncounted centuries. This oath emphasizes the principles of good above any concerns of law or chaos. Its four central principles are simple.\n\nKindle the Light. Through your acts of mercy, kindness, and forgiveness, kindle the light of hope in the world, beating back despair.\n\nShelter the Light. Where there is good, beauty, love, and laughter in the world, stand against the wickedness that would swallow it. Where life flourishes, stand against the forces that would render it barren.\n\nPreserve Your Own Light. Delight in song and laughter, in beauty and art. If you allow the light to die in your own heart, you can't preserve it in the world.\n\nBe the Light. Be a glorious beacon for all who live in despair. Let the light of your joy and courage shine forth in all your deeds.",
         },
         {
            name: 'Oath Spells',
            level: 3,
            description:
               'You gain oath spells at the paladin levels listed.\nOath of the Ancients Spells\nPaladin Level 	Spells\n3rd 	Ensnaring Strike, Speak with Animals\n5th 	Moonbeam, Misty Step\n9th 	Plant Growth, Protection from Energy\n13th 	Ice Storm, Stoneskin\n17th 	Commune with Nature, Tree Stride',
         },
         {
            name: 'Channel Divinity',
            level: 3,
            description:
               "When you take this oath at 3rd level, you gain the following two Channel Divinity options.\n\n    Nature's Wrath. You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish.\n\n    Turn the Faithless. You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.\n\n    A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.\n\n    If the creature's true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned.",
         },
         {
            name: 'Aura Of Warding',
            level: 7,
            description:
               'Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.\n\nAt 18th level, the range of this aura increases to 30 feet.',
         },
         {
            name: 'Undying Sentinel',
            level: 15,
            description:
               "Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest.\n\nAdditionally, you suffer none of the drawbacks of old age, and you can't be aged magically.",
         },
         {
            name: 'Elder Champion',
            level: 20,
            description:
               "At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or moss-like, or you might sprout antlers or a lion-like mane.\n\nUsing your action, you undergo a transformation. For 1 minute, you gain the following benefits:\n\n    At the start of each of your turns, you regain 10 hit points.\n\n    Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.\n\n    Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
         },
      ],
      devotion: [
         {
            name: 'Tenets of Devotion',
            level: 3,
            description:
               "Though the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.\n\nHonesty. Don't lie or cheat. Let your word be your promise.\n\nCourage. Never fear to act, though caution is wise.\n\nCompassion. Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom.\n\nHonor. Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm.\n\nDuty. Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you.",
         },
         {
            name: 'Oath Spells',
            level: 3,
            description:
               'You gain oath spells at the paladin levels listed.\nOath of Devotion Spells\nPaladin Level 	Spells\n3rd 	Protection from Evil and Good, Sanctuary\n5th 	Lesser Restoration, Zone of Truth\n9th 	Beacon of Hope, Dispel Magic\n13th 	Freedom of Movement, Guardian of Faith\n17th 	Commune, Flame Strike',
         },
         {
            name: 'Channel Divinity',
            level: 3,
            description:
               "When you take this oath at 3rd level, you gain the following two Channel Divinity options.\n\n    Sacred Weapon. As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.\n\n    You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends.\n\n    Turn the Unholy. As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.\n\n    A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
         },
         {
            name: 'Aura of Devotion',
            level: 7,
            description:
               "Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.\n\nAt 18th level, the range of this aura increases to 30 feet.",
         },
         {
            name: 'Purity Of Spirit',
            level: 15,
            description:
               'Beginning at 15th level, you are always under the effects of a Protection from Evil and Good spell.',
         },
         {
            name: 'Holy Nimbus',
            level: 20,
            description:
               "At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.\n\nWhenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.\n\nIn addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
         },
      ],
      vengeance: [
         {
            name: 'Tenets Of Vengeance',
            level: 3,
            description:
               "The tenets of the Oath of Vengeance vary by paladin, but all the tenets revolve around punishing wrongdoers by any means necessary. Paladins who uphold these tenets are willing to sacrifice even their own righteousness to mete out justice upon those who do evil, so the paladins are often neutral or lawful neutral in alignment. The core principles of the tenets are brutally simple.\n\nFight the Greater Evil. Faced with a choice of fighting my sworn foes or combating a lesser evil, I choose the greater evil.\n\nNo Mercy for the Wicked. Ordinary foes might win my mercy, but my sworn enemies do not.\n\nBy Any Means Necessary. My qualms can't get in the way of exterminating my foes.\n\nRestitution. If my foes wreak ruin on the world, it is because I failed to stop them. I must help those harmed by their misdeeds.",
         },
         {
            name: 'Oath Spells',
            level: 3,
            description:
               "You gain oath spells at the paladin levels listed.\nOath of Vengeance Spells\nPaladin Level 	Spells\n3rd 	Bane, Hunter's Mark\n5th 	Hold Person, Misty Step\n9th 	Haste, Protection from Energy\n13th 	Banishment, Dimension Door\n17th 	Hold Monster, Scrying",
         },
         {
            name: 'Channel Divinity',
            level: 3,
            description:
               "When you take this oath at 3rd level, you gain the following two Channel Divinity options.\n\n    Abjure Enemy. As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.\n\n    On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is 0, and it can't benefit from any bonus to its speed.\n\n    On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage.\n\n    Vow of Enmity. As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious.",
         },
         {
            name: 'Relentless Avenger',
            level: 7,
            description:
               "By 7th level, your supernatural focus helps you close off a foe's retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks.",
         },
         {
            name: 'Soul Of Vengeance',
            level: 15,
            description:
               'Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range.',
         },
         {
            name: 'Avenging Angel',
            level: 20,
            description:
               "At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:\n\n    Wings sprout from your back and grant you a flying speed of 60 feet.\n\n    You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
         },
      ],
   },
   ranger: {
      'beast master': [
         {
            name: "Ranger's Companion",
            level: 3,
            description:
               'At 3rd level, you gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a beast that is no larger than Medium and that has a challenge rating of 1/4 or lower (appendix D presents statistics for the hawk, mastiff, and panther as examples). Add your proficiency bonus to the beast\'s AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher. Like any creature, the beast can spend Hit Dice during a short rest.\n\nThe beast obeys your commands as best as it can. It takes its turn on your initiative. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to take the Attack, Dash, Disengage, or Help action. If you don\'t issue a command, the beast takes the Dodge action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action. While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace.\n\nIf you are incapacitated or absent, the beast acts on its own, focusing on protecting you and itself. The beast never requires your command to use its reaction, such as when making an opportunity attack.\n\nIf the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn\'t hostile to you, either the same type of beast as before or a different one.',
         },
         {
            name: 'Primal Companion',
            level: 3,
            description:
               "This 3rd-level feature replaces the Ranger's Companion feature.\n\nYou magically summon a primal beast, which draws strength from your bond with nature. The beast is friendly to you and your companions and obeys your commands. Choose its stat block-Beast of the Land, Beast of the Sea, or Beast of the Sky-which uses your proficiency bonus (PB) in several places. You also determine the kind of animal the beast is, choosing a kind appropriate for the stat block. Whatever kind you choose, the beast bears primal markings, indicating its mystical origin.\n\nIn combat, the beast acts during your turn. It can move and use its reaction on its own, but the only action it takes is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Attack action. If\nyou are incapacitated, the beast can take any action of its choice, not just Dodge.\n\nIf the beast has died within the last hour, you can use your action to touch it and expend a spell slot of 1st level or higher. The beast returns to life after 1 minute with all its hit points restored. When you finish a long rest, you can summon a different primal beast. The new beast appears in an unoccupied space within 5 feet of you, and you choose its stat block and appearance. If you already have a beast from this feature, it vanishes when the new beast appears. The beast also vanishes if you die.\nBeast of the Land\nMedium beast\nArmor Class: 13 + PB (natural armor)\nHit Points: 5 + five times your ranger level (the beast has a number of Hit Dice [d8s] equal to your ranger level)\nSpeed: 40 ft., climb 40ft.\nSTR         DEX         CON         INT         WIS         CHA\n14 (+2)         14 (+2)         15 (+2)         8 (-1)         14 (+2)         11 (+0)\nSenses: darkvision 60 ft., passive Perception 12\nLanguages: understands the languages you speak\nChallenge: —\nProficiency Bonus (PB): equals your bonus\nCharge: If the beast moves at least 20 feet straight toward a target and then hits it with a maul attack on the same turn, the target takes an extra ld6 slashing damage. If the target is a creature, it must succeed on a Strength saving throw against your spell save DC or be knocked prone.\nPrimal Bond: You can add your proficiency bonus to any ability check or saving throw that the beast makes.\nActions\nMaul. Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d8 + 2 + PB slashing damage.\nBeast of the Sea\nMedium beast\nArmor Class: 13 + PB (natural armor)\nHit Points: 5 + five times your ranger level (the beast has a number of Hit Dice [d8s] equal to your ranger level)\nSpeed: 5 ft., swim 60ft.\nSTR         DEX         CON         INT         WIS         CHA\n14 (+2)         14 (+2)         15 (+2)         8 (-1)         14 (+2)         11 (+0)\nSenses: darkvision 60 ft., passive Perception 12\nLanguages: understands the languages you speak\nChallenge: —\nProficiency Bonus (PB): equals your bonus\nAmphibious: The beast can breathe both air and water.\nPrimal Bond: You can add your proficiency bonus to any ability check or saving throw that the beast makes.\nActions\nBinding Strike. Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d6 + 2 + PB piercing or bludgeoning damage (your choice), and the target is grappled (escape DC equals your spell save DC). Until this grapple ends, the beast can't use this attack on another target.\nBeast of the Sky\nSmall beast\nArmor Class: 13 + PB (natural armor)\nHit Points: 4 + four times your ranger level (the beast has a number of Hit Dice [d6s] equal to your ranger level)\nSpeed: 10 ft., fly 60ft.\nSTR         DEX         CON         INT         WIS         CHA\n6 (-2)         16 (+3)         13 (+1)         8 (-1)         14 (+2)         11 (+0)\nSenses: darkvision 60 ft., passive Perception 12\nLanguages: understands the languages you speak\nChallenge: —\nProficiency Bonus (PB): equals your bonus\nFlyby: The beast doesn't provoke opportunity attacks when it flies out of an enemy's reach.\nPrimal Bond: You can add your proficiency bonus to any ability check or saving throw that the beast makes.\nActions\nShred. Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft., one target. Hit: 1d4 + 3 + PB slashing damage.",
         },
         {
            name: 'Exceptional Training',
            level: 7,
            description:
               'Beginning at 7th level, on any of your turns when your beast companion doesn\'t attack, you can use a bonus action to command the beast to take the Dash, Disengage, or Help action on its turn. In addition, the beast\'s attacks now count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.',
         },
         {
            name: 'Bestial Fure',
            level: 11,
            description:
               'Starting at 11th level, when you command your beast companion to take the Attack action, the beast can make two attacks, or it can take the Multiattack action if it has that action.',
         },
         {
            name: 'Share Spells',
            level: 15,
            description:
               'Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you.',
         },
      ],
      hunter: [
         {
            name: "Hunter's Prey",
            level: 3,
            description:
               'At 3rd level, you gain one of the following features of your choice.\n\n    Colossus Slayer. Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it\'s below its hit point maximum. You can deal this extra damage only once per turn.\n\n    Giant Killer. When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature.\n\n    Horde Breaker. Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon.',
         },
         {
            name: 'Defensive Tactics',
            level: 7,
            description:
               'At 7th level, you gain one of the following features of your choice.\n\n    Escape the Horde. Opportunity attacks against you are made with disadvantage.\n\n    Multiattack Defense. When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn.\n\n    Steel Will. You have advantage on saving throws against being frightened.',
         },
         {
            name: 'Multiattack',
            level: 11,
            description:
               'At 11th level, you gain one of the following features of your choice.\n\n    Volley. You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon\'s range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target\n\n    Whirlwind Attack. You can use your action to make melee attacks against any number of creatures within 5 feet of you, with a separate attack roll for each target.',
         },
         {
            name: "Superior Hunter's Defense",
            level: 15,
            description:
               'At 15th level, you gain one of the following features of your choice.\n\n    Evasion. When you are subjected to an effect, such as a red dragon\'s fiery breath or a lightning bolt spell, that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on a saving throw, and only half damage if you fail\n\n    Stand Against the Tide. When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice.\n\n    Uncanny Dodge. When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack\'s damage against you.',
         },
      ],
   },
   rogue: {
      'arcane trickster': [
         {
            name: 'Spellcasting',
            level: 3,
            description:
               "When you reach 3rd level, you augment your martial prowess with the ability to cast spells.\nCantrips\n\nYou learn three cantrips: Mage Hand and two other cantrips of your choice from the wizard spell list. You learn another wizard cantrip of your choice at 10th level.\nSpell Slots\n\nThe Arcane Trickster Spellcasting table shows how many spell slots you have to cast your wizard spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.\n\nFor example, if you know the 1st-level spell Charm Person and have a 1st-level and a 2nd-level spell slot available, you can cast Charm Person using either slot.\nSpells Known of 1st Level and Higher\n\nYou know three 1st-level wizard spells of your choice, two of which you must choose from the enchantment and illusion spells on the wizard spell list.\n\nThe Spells Known column of the Arcane Trickster Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an enchantment or illusion spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.\n\nThe spells you learn at 8th, 14th, and 20th level can come from any school of magic.\n\nWhenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell, unless you're replacing the spell you gained at 3rd, 8th, 14th, or 20th level from any school of magic.\nSpellcasting Ability\n\nIntelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
         },
         {
            name: 'Mage Hand Legerdemain',
            level: 3,
            description:
               "Starting at 3rd level, when you cast Mage Hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it:\n\n    You can stow one object the hand is holding in a container worn or carried by another creature.\n\n    You can retrieve an object in a container worn or carried by another creature.\n\n    You can use thieves' tools to pick locks and disarm traps at range.\n\nYou can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.\n\nIn addition, you can use the bonus action granted by your Cunning Action to control the hand.",
         },
         {
            name: 'Magical Ambush',
            level: 9,
            description:
               'Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn.',
         },
         {
            name: 'Versatile Trickster',
            level: 13,
            description:
               'At 13th level, you gain the ability to distract targets with your Mage Hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn.',
         },
         {
            name: 'Spell Thief',
            level: 17,
            description:
               "At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.\n\nImmediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
         },
      ],
      assassin: [
         {
            name: 'Bonus Proficiencies',
            level: 3,
            description:
               "When you choose this archetype at 3rd level, you gain proficiency with the disguise kit and the poisoner's kit.",
         },
         {
            name: 'Assassinate',
            level: 3,
            description:
               "Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.",
         },
         {
            name: 'Infiltration Expertise',
            level: 9,
            description:
               "Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can't establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official- looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.\n\nThereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.",
         },
         {
            name: 'Impostor',
            level: 13,
            description:
               "At 13th level, you gain the ability to unerringly mimic another person's speech, writing, and behavior. You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerisms.\n\nYour ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.",
         },
         {
            name: 'Death Strike',
            level: 17,
            description:
               'Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.',
         },
      ],
      thief: [
         {
            name: 'Fast Hands',
            level: 3,
            description:
               "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action.",
         },
         {
            name: 'Second-Story Wrok',
            level: 3,
            description:
               'When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.\n\nIn addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.',
         },
         {
            name: 'Supreme Sneak',
            level: 9,
            description:
               'Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.',
         },
         {
            name: 'Use Magic Device',
            level: 13,
            description:
               'By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.',
         },
         {
            name: "Thief's Reflexes",
            level: 17,
            description:
               "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised.",
         },
      ],
   },
   sorcerer: {
      'draconic bloodline': [
         {
            name: 'Dragon Ancestor',
            level: 1,
            description:
               'At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.\nDraconic Ancestry\nDragon Color 	Damage Type\nBlack 	Acid\nBlue 	Lightning\nBrass 	Fire\nBronze 	Lightning\nCopper 	Acid\nGold 	Fire\nGreen 	Poison\nRed 	Fire\nSilver 	Cold\nWhite 	Cold\n\nYou can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check.',
         },
         {
            name: 'Draconic Resilience',
            level: 1,
            description:
               "As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.\n\nAdditionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier.",
         },
         {
            name: 'Elemental Affinity',
            level: 6,
            description:
               'Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, add your Charisma modifier to one damage roll of that spell. At the same time, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour.',
         },
         {
            name: 'Dragon Wings',
            level: 14,
            description:
               "At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.\n\nYou can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them.",
         },
         {
            name: 'Draconic Presence',
            level: 18,
            description:
               'Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours.',
         },
      ],
      'wild magic': [
         {
            name: 'Wild Magic Surge',
            level: 1,
            description:
               "Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Once per turn, the DM can have you roll a d20 immediately after you cast a sorcerer spell of 1st level or higher. If you roll a 1, roll on the Wild Magic Surge table to create a magical effect. If that effect is a spell, it is too wild to be affected by your Metamagic, and if it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration.",
         },
         {
            name: 'Tides Of Chaos',
            level: 6,
            description:
               'Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.\n\nAny time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.',
         },
         {
            name: 'Bend Luck',
            level: 6,
            description:
               "Starting at 6th level, you have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur.",
         },
         {
            name: 'Controlled Chaos',
            level: 14,
            description:
               'Controlled Chaos\n\nAt 14th level, you gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number.',
         },
         {
            name: 'Spell Bombardment',
            level: 18,
            description:
               'Beginning at 18th level, the harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn.',
         },
      ],
   },
   warlock: {
      archfey: [
         {
            name: 'Expanded Spell List',
            level: 1,
            description:
               'The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.\nArchfey Expanded Spells\nSpell Level 	Spells\n1st 	Faerie Fire, Sleep\n2nd 	Calm Emotions, Phantasmal Force\n3rd 	Blink, Plant Growth\n4th 	Dominate Beast, Greater Invisibility\n5th 	Dominate Person, Seeming',
         },
         {
            name: 'Fey Presence',
            level: 1,
            description:
               "Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
         },
         {
            name: 'Misty Escape',
            level: 6,
            description:
               "Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
         },
         {
            name: 'Beguiling Defense',
            level: 10,
            description:
               'Beginning at 10th level, your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage.',
         },
         {
            name: 'Dark Delirium',
            level: 14,
            description:
               'Starting at 14th level, you can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage.\n\nUntil this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.\n\nYou must finish a short or long rest before you can use this feature again.',
         },
      ],
      fiend: [
         {
            name: 'Expanded Spell List',
            level: 1,
            description:
               'The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.\nFiend Expanded Spells\nSpell Level 	Spells\n1st 	Burning Hands, Command\n2nd 	Blindness/Deafness, Scorching Ray\n3rd 	Fireball, Stinking Cloud\n4th 	Fire Shield, Wall of Fire\n5th 	Flame Strike, Hallow',
         },
         {
            name: "Dark One's Blessing",
            level: 1,
            description:
               'Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1).',
         },
         {
            name: "Dark One's Own Luck",
            level: 6,
            description:
               "Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
         },
         {
            name: 'Fiendish Resilience',
            level: 10,
            description:
               'Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance.',
         },
         {
            name: 'Hurl Through Hell',
            level: 14,
            description:
               "Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.\n\nAt the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d10 psychic damage as it reels from its horrific experience.\n\nOnce you use this feature, you can't use it again until you finish a long rest.",
         },
      ],
      'great old one': [
         {
            name: 'Expanded Spell List',
            level: 1,
            description:
               "The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.\nGreat Old One Expanded Spells\nSpell Level 	Spells\n1st 	Dissonant Whispers, Tasha's Hideous Laughter\n2nd 	Detect Thoughts, Phantasmal Force\n3rd 	Clairvoyance, Sending\n4th 	Dominate Beast, Evard's Black Tentacles\n5th 	Dominate Person, Telekinesis",
         },
         {
            name: 'Awakened Mind',
            level: 1,
            description:
               "Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can telepathically speak to any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.",
         },
         {
            name: 'Entropic Ward',
            level: 6,
            description:
               "At 6th level, you learn to magically ward yourself against attack and to turn an enemy's failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
         },
         {
            name: 'Thought Shield',
            level: 10,
            description:
               "Starting at 10th level, your thoughts can't be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do.",
         },
         {
            name: 'Create Thrall',
            level: 14,
            description:
               "At 14th level, you gain the ability to infect a humanoid's mind with the alien magic of your patron. You can use your action to touch an incapacitated humanoid. That creature is then charmed by you until a Remove Curse spell is cast on it, the charmed condition is removed from it, or you use this feature again.\n\nYou can communicate telepathically with the charmed creature as long as the two of you are on the same plane of existence.",
         },
      ],
   },
   wizard: {
      abjuration: [
         {
            name: 'Abjuration Savant',
            level: 2,
            description:
               'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a abjuration spell into your spellbook is halved.',
         },
         {
            name: 'Arcane Ward',
            level: 2,
            description:
               "Starting at 2nd level, you can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.\n\nWhile the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.\n\nOnce you create the ward, you can't create it again until you finish a long rest.",
         },
         {
            name: 'Projected Ward',
            level: 6,
            description:
               'Starting at 6th level, when a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage.',
         },
         {
            name: 'Improved Abjuration',
            level: 10,
            description:
               'Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in Counterspell and Dispel Magic), you add your proficiency bonus to that ability check.',
         },
         {
            name: 'Spell Resistance',
            level: 14,
            description:
               'Starting at 14th level, you have advantage on saving throws against spells.\n\nFurthermore, you have resistance against the damage of spells.',
         },
      ],
      transmutation: [
         {
            name: 'Transmutation Savant',
            level: 2,
            description:
               'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Transmutation spell into your spellbook is halved.',
         },
         {
            name: 'Minor Alchemy',
            level: 2,
            description:
               'Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance.',
         },
         {
            name: "Transmuter's Stone",
            level: 6,
            description:
               "Starting at 6th level, you can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from the following options:\n\n    Darkvision out to a range of 60 feet\n\n    An increase to speed of 10 feet while the creature is unencumbered\n\n    Proficiency in Constitution saving throws\n\n    Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)\n\nEach time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.\n\nIf you create a new transmuter's stone, the previous one ceases to function.",
         },
         {
            name: 'Shapechanger',
            level: 10,
            description:
               "At 10th level, you add the Polymorph spell to your spellbook, if it is not there already. You can cast Polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower.\n\nOnce you cast Polymorph in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot.",
         },
         {
            name: 'Master Transmuter',
            level: 14,
            description:
               "Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest.\n\nMajor Transformation. You can transmute one nonmagical object – no larger than a 5-foot cube – into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it.\n\nPanacea. You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points.\n\nRestore Life. You cast the Raise Dead spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook.\n\nRestore Youth. You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan.",
         },
      ],
      conjuration: [
         {
            name: 'Conjuration Savant',
            level: 2,
            description:
               'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Conjuration spell into your spellbook is halved.',
         },
         {
            name: 'Minor Conjuration',
            level: 2,
            description:
               'Starting at 2nd level when you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet.\n\nThe object disappears after 1 hour, when you use this feature again, or if it takes or deals any damage.',
         },
         {
            name: 'Benign Transportation',
            level: 6,
            description:
               "Starting at 6th level, you can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.\n\nOnce you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher.",
         },
         {
            name: 'Focused Conjuration',
            level: 10,
            description:
               "Beginning at 10th level, while you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage.",
         },
         {
            name: 'Durable Summons',
            level: 14,
            description:
               'Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 temporary hit points.',
         },
      ],
      divination: [
         {
            name: 'Divination Savant',
            level: 2,
            description:
               'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Divination spell into your spellbook is halved.',
         },
         {
            name: 'Portent',
            level: 2,
            description:
               'Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.\n\nEach foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls.',
         },
         {
            name: 'Expert Divination',
            level: 6,
            description:
               "Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level.",
         },
         {
            name: 'The Third Eye',
            level: 10,
            description:
               "Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a short or long rest.\n\nDarkvision. You gain darkvision out to a range of 60 feet.\n\nEthereal Sight. You can see into the Ethereal Plane within 60 feet of you.\n\nGreater Comprehension. You can read any language.\n\nSee Invisibility. You can see invisible creatures and objects within 10 feet of you that are within line of sight.",
         },
         {
            name: 'Greater Portent',
            level: 14,
            description:
               'Starting at 14th level, the visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two.',
         },
      ],
      enchantment: [
         {
            name: 'Enchantment Savant',
            level: 2,
            description:
               'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Enchantment spell into your spellbook is halved.',
         },
         {
            name: 'Hypnotic Gaze',
            level: 2,
            description:
               "Starting at 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed.\n\nOn subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.\n\nOnce the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest.",
         },
         {
            name: 'Instinctive Charm',
            level: 6,
            description:
               "Beginning at 6th level, when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target.\n\nOn a successful save, you can't use this feature on the attacker again until you finish a long rest.\n\nYou must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be charmed are immune to this effect.",
         },
         {
            name: 'Split Enchantment',
            level: 10,
            description:
               'Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature.',
         },
         {
            name: 'Alter Memories',
            level: 14,
            description:
               "At 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being charmed.\n\nAdditionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell.",
         },
      ],
      evocation: [
         {
            name: 'Evocation Savant',
            level: 2,
            description:
               'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Evocation spell into your spellbook is halved.',
         },
         {
            name: 'Sculpt Spells',
            level: 2,
            description:
               "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 + the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.",
         },
         {
            name: 'Potent Cantrip',
            level: 6,
            description:
               "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.",
         },
         {
            name: 'Empowered Evocation',
            level: 10,
            description:
               'Beginning at 10th level, you can add your Intelligence modifier (minimum of +1) to one damage roll of any wizard evocation spell that you cast.',
         },
         {
            name: 'Overchannel',
            level: 14,
            description:
               'Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.\n\nThe first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity.',
         },
      ],
      illusion: [
         {
            name: 'Illusion Savant',
            level: 2,
            description:
               'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Illusion spell into your spellbook is halved.',
         },
         {
            name: 'Imporved Minor Illusion',
            level: 2,
            description:
               "When you choose this school at 2nd level, you learn the Minor Illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known.\n\nWhen you cast Minor Illusion, you can create both a sound and an image with a single casting of the spell.",
         },
         {
            name: 'Malleable Illusions',
            level: 6,
            description:
               "Starting at 6th level, when you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that you can see the illusion.",
         },
         {
            name: 'Illusory Self',
            level: 10,
            description:
               "Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.\n\nOnce you use this feature, you can't use it again until you finish a short or long rest.",
         },
         {
            name: 'Illusory Reality',
            level: 14,
            description:
               'By 14th level, you have learned the secret of weaving shadow magic into your illusions to give them a semi-reality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross.',
         },
      ],
      necromancy: [
         {
            name: 'Necromancy Savant',
            level: 2,
            description:
               'Beginning when you select this school at 2nd level, the gold and time you must spend to copy a Necromancy spell into your spellbook is halved.',
         },
         {
            name: 'Grim Harvest',
            level: 2,
            description:
               "At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead.",
         },
         {
            name: 'Undead Thralls',
            level: 6,
            description:
               "At 6th level, you add the Animate Dead spell to your spellbook if it is not there already. When you cast Animate Dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate.\n\nWhenever you create an undead using a necromancy spell, it has additional benefits:\n\n    The creature's hit point maximum is increased by an amount equal to your wizard level.\n\n    The creature adds your proficiency bonus to its weapon damage rolls.",
         },
         {
            name: 'Inured To Undeath',
            level: 10,
            description:
               "Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects.",
         },
         {
            name: 'Command Undead',
            level: 14,
            description:
               "Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again.\n\nIntelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free.",
         },
      ],
   },
};