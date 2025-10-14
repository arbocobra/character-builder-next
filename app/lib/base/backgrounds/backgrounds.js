import BaseBackground from './base-background';
import { Languages, GamingSet, Musical_Instruments, ArtisansTools } from '@/lib/init-data'

export class Acolyte extends BaseBackground {
   constructor() {
      super('acolyte');
      this.proficiencies.skills = ['Insight', 'Religion'];
      this.proficiencies.selectFromList.languages = [{ list: Languages, count: 2, title: 'Select 2 Languages' }];
      this.items.equipment = ['holy symbol', 'prayer book or prayer wheel', '5 sticks of incense', 'vestments', 'set of common clothes'];
      this.items.currency = 15;
      this.features = [
         { name: 'Shelter of the Faithful',
            description: 'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.' 
      }]
   }
}

export class Charlatan extends BaseBackground {
   constructor() {
      super('charlatan');
      this.proficiencies.skills = ['Deception', 'Sleight of Hand'];
      this.proficiencies.tools = ['Disguise kit', 'Forgery kit'];
      this.items.equipment = ['set of fine clothes'];
      this.items.tools = ['disguise kit', 'tools of the con of your choice'];
      this.items.currency = 15;
      this.features = [
         { name: 'Favorite Schemes',
            description: 'Every charlatan has an angle they use in preference to other schemes' }, 
         { name: 'False Identity',
            description: 'You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.' }
      ]
   }
}

export class Criminal extends BaseBackground {
   constructor() {
      super('criminal');
      this.proficiencies.skills = ['Deception', 'Stealth'];
      this.proficiencies.tools = ['Thieves\' Tools'];
      this.proficiencies.selectFromList.tools = [{ list: GamingSet, count: 1, title: 'Select Gaming Set' }];
      this.items.equipment = ['crowbar', 'set of dark common clothes', 'dark hood']
      this.items.currency = 15;
      this.features = [
         { name: 'Criminal Speciality',
            description: 'There are many kinds of criminals, and within a thieves\' guild or similar criminal organization, individual members have particular specialties. Even criminals who operate outside of such organizations have strong preferences for certain kinds of crimes over others. Choose the role you played in your criminal life' }, 
         {name: 'Criminal Contact',
            description: 'You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.' }, 
      ]
   }
}

// export class Spy extends BaseBackground {
//    constructor() {
//       super('spy');
   
//    }
// }

export class Entertainer extends BaseBackground {
   constructor() {
      super('entertainer');
      this.proficiencies.skills = ['Acrobatics', 'Performance'];
      this.proficiencies.tools = [' Disguise kit'];
      this.proficiencies.selectFromList.tools = [{ list: Musical_Instruments, count: 1, title: 'Select Musical Instrument' }];
      this.items.equipment = ['the favor of an admirer', 'costume']
      this.items.selectFromList.tools = [{list: Musical_Instruments, count: 1, title: 'Select Musical Instrument' }];
      this.items.currency = 15;
      this.features = [
         { name: 'Entertainer Routines',
            description: 'A good entertainer is versatile, spicing up every performance with a variety of different routines. Choose one to three routines to define your expertise as an entertainer.' }, 
         {name: 'By Popular Demand',
            description: 'You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble\'s court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.' }, 
      ]
   }
}

// export class Gladiator extends BaseBackground {
//    constructor() {
//       super('gladiator');
   
//    }
// }

export class FolkHero extends BaseBackground {
   constructor() {
      super('folk hero');
      this.proficiencies.skills = ['Animal Handling', 'Survival'];
      this.proficiencies.tools = ['Land Vehicles'];
      this.proficiencies.selectFromList.tools = [{ list: ArtisansTools, count: 1, title: 'Select Artisan\s Tools' }];
      this.items.selectFromList.tools = [{ list: ArtisansTools, count: 1, title: 'Select Artisan\s Tools' }];
      this.items.equipment = ['shovel', 'iron pot', 'set of common clothes']
      this.items.currency = 10;
      this.features = [
         { name: 'Defining Event',
            description: 'You previously pursued a simple profession among the peasantry, perhaps as a farmer, miner, servant, shepherd, woodcutter, or gravedigger. But something happened that set you on a different path and marked you for greater things. Choose a defining event that marked you as a hero of the people.' }, 
         {name: 'Rustic Hospitality',
            description: 'Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.' }, 
      ]
   }
}

export class GuildArtisan extends BaseBackground {
   constructor() {
      super('guild artisan');
      this.proficiencies.skills = ['Insight', 'Persuasion'];
      this.proficiencies.selectFromList.tools = [{ list: ArtisansTools, count: 1, title: 'Select Artisan\s Tools' }];
      this.proficiencies.selectFromList.languages = [{ list: Languages, count: 1, title: 'Select Language' }];
      this.items.selectFromList.tools = [{ list: ArtisansTools, count: 1, title: 'Select Artisan\s Tools' }];
      this.items.equipment = ['letter of introduction from your guild', 'set of traveler\'s clothes']
      this.items.currency = 15;
      this.features = [
         { name: 'Guild Business',
            description: 'Guilds are generally found in cities large enough to support several artisans practicing the same trade. However, your guild might instead be a loose network of artisans who each work in a different village within a larger realm. Work with your DM to determine the nature of your guild.' }, 
         {name: 'Guild Membership',
            description: 'As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild\'s coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild\'s good graces.' }, 
      ]
   }
}

// export class GuildMerchant extends BaseBackground {
//    constructor() {
//       super('guild merchant');
   
//    }
// }

export class Hermit extends BaseBackground {
   constructor() {
      super('hermit');
      this.proficiencies.skills = ['Medicine', 'Religion'];
      this.proficiencies.tools = ['Herbalism kit'];
      this.proficiencies.selectFromList.languages = [{ list: Languages, count: 1, title: 'Select Language' }];
      this.items.tools = ['Herbalism kit'];
      this.items.equipment = ['scroll case full your notes', 'winter blanket', 'set of common clothes']
      this.items.currency = 5;
      this.features = [
         { name: 'Life of Seclusion',
            description: 'What was the reason for your isolation, and what changed to allow you to end your solitude? You can work with your DM to determine the exact nature of your seclusion' }, 
         {name: 'Discovery',
            description: 'The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society.' }, 
      ]
   }
}

export class Noble extends BaseBackground {
   constructor() {
      super('noble');
      this.proficiencies.skills = ['History', 'Persuasion'];
      this.proficiencies.selectFromList.tools = [{ list: GamingSet, count: 1, title: 'Select Gaming Set' }];
      this.proficiencies.selectFromList.languages = [{ list: Languages, count: 1, title: 'Select Language' }];
      this.items.equipment = ['signet ring', 'scroll of pedigree', 'set of fine clothes']
      this.items.currency = 25;
      this.features = [
         { name: 'Position of Privilege',
            description: 'Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.' }
      ]
   }
}

// export class Knight extends BaseBackground {
//    constructor() {
//       super('knight');
   
//    }
// }

export class Outlander extends BaseBackground {
   constructor() {
      super('outlander');
      this.proficiencies.skills = [ 'Athletics', 'Survival'];
      this.proficiencies.selectFromList.tools = [{ list: Musical_Instruments, count: 1, title: 'Select Musical Instrument' }];
      this.proficiencies.selectFromList.languages = [{ list: Languages, count: 1, title: 'Select Language' }];
      this.items.equipment = ['staff', 'hunting trap', 'trophy from an animal you killed', 'set of traveler\'s clothes']
      this.items.currency = 10;
      this.features = [
         { name: 'Origin',
            description: 'You\'ve been to strange places and seen things that others cannot begin to fathom. Consider some of the distant lands you have visited, and how they impacted you. Determine your occupation during your time in the wild, choose one that best fits your character.' }, 
         {name: 'Wanderer',
            description: 'You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.' }, 
      ]
   }
}

export class Sage extends BaseBackground {
   constructor() {
      super('sage');
      this.proficiencies.skills = ['Arcana', 'History'];
      this.proficiencies.selectFromList.languages = [{ list: Languages, count: 2, title: 'Select 2 Languages' }];
      this.items.equipment = ['bottle of ink', 'quill', 'small knife', 'letter from a dead colleague posing a question you have not yet been able to answer', 'set of common clothes']
      this.items.currency = 10;

      this.features = [
         { name: 'Speciality',
            description: 'Determine the nature of your scholarly training.' }, 
         {name: 'Researcher',
            description: 'When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.' }, 
      ]
   }
}

export class Sailor extends BaseBackground {
   constructor() {
      super('sailor');
      this.proficiencies.skills = ['Athletics', 'Perception'];
      this.proficiencies.tools = ['Navigator\'s Tools', 'Water Vehicles'];
      this.items.equipment = ['belaying pin (club)', '50 feet of silk rope', 'lucky charm', 'set of common clothes'],
      this.items.currency = 10;
      this.features = [
         { name: 'Ship\'s Passage',
            description: 'When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you\'re calling in a favor, you can\'t be certain of a schedule or route that will meet your every need. Your DM will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.' }, 
      ]
   }
}

// export class Pirate extends BaseBackground {
//    constructor() {
//       super('pirate');
   
//    }
// }

export class Soldier extends BaseBackground {
   constructor() {
      super('soldier');
      this.proficiencies.skills = ['Athletics', 'Perception'];
      this.proficiencies.tools = ['Land Vehicles'];
      this.proficiencies.selectFromList.tools = [{ list: GamingSet, count: 1, title: 'Select Gaming Set' }];
      this.items.equipment = ['insignia of rank', 'trophy taken from a fallen enemy', 'lucky charm', 'set of common clothes'],
      this.items.selectFromList.equipment = [{list: ['Set of Dice', 'Deck of Cards'], count: 1, title: 'Set of Dice OR Deck of Cards' }];
      this.items.currency = 10;
      this.features = [
         {name: 'Speciality',
            description: 'During your time as a soldier, you had a specific role to play in your unit or army, determine your role.'
         },
         { name: 'Military Rank',
            description: 'You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.' }, 
      ]
   }
}

export class Urchin extends BaseBackground {
   constructor() {
      super('urchin');
      this.proficiencies.skills = ['Sleight of Hand', 'Stealth'];
      this.proficiencies.tools = ['Disguise kit', 'thieves\' tools'];
      this.items.equipment = ['small knife', 'map of the city you grew up in', 'pet mouse', 'token to remember your parents by', 'set of common clothes'],
      this.items.currency = 10;
      this.features = [
         {name: 'City Secrets',
            description: 'You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.'
         },
      ]
   }
}