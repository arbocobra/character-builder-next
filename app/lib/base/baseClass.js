import baseProficiencies from './baseProficiencies';

export class BaseClass {
   constructor(className, level) {
      this.Name = className;
      this.GrantFeatures(level);
   }
   Name;
   Proficiencies = new baseProficiencies();
   Features;
   HitDice;

   GrantFeatures(level) {
      this.Features = [];

      let list = featureList.filter((_,i) => i < level).flat();
      this.Features = list.map(feature => Features.find(f => f.name === feature))
   }
   // UnlockSubclass(level) {}
}

const Features = [
   { name: 'Rage', level: 1, appliedBy: 'class' },
   { name: 'Unarmoured Defence', level: 1, appliedBy: 'class' },
   { name: 'Reckless Attack', level: 2, appliedBy: 'class' },
   { name: 'Danger Sense', level: 2, appliedBy: 'class' },
   { name: 'Primal Path', level: 3, appliedBy: 'class' },
   { name: 'Ability Score Improvement', level: 4, appliedBy: 'class' },
   { name: 'Extra Attack', level: 5, appliedBy: 'class' },
   { name: 'Fast Movement', level: 5, appliedBy: 'class' },
   { name: 'Path Feature', level: 6, appliedBy: 'class' },
   { name: 'Feral Instinct', level: 7, appliedBy: 'class' }
]

const featureList = [['Rage', 'Unarmoured Defence'], ['Reckless Attack', 'Danger Sense'], ['Primal Path'], ['Ability Score Improvement'], ['Extra Attack', 'Fast Movement'], ['Path Feature'], ['Feral Instinct']];

export class Barbarian extends BaseClass {
   constructor(level) {
      super('Barbarian', level);
      this.HitDice = '1d12';
      this.Proficiencies.SavingThrows = ['Strength', 'Constitution'];
      this.Proficiencies.Armour = ['Light Armour', 'Medium Armour', 'Shields'];
      this.Proficiencies.Weapons = ['Simple Weapons', 'Martial Weapons'];
      this.Proficiencies.SelectFromList.Skills = { list: ['Animal Handling', 'Athletics', 'Intimidation', 'Survival'], count: 2 };
   }

   // SelectEquipment = [
   //    { list: ['Greataxe', 'Any martial melee weapon'], count: 1 },
   //    { list: ['2 Handaxes', 'Any simple weapon'], count: 1 }
   // ];
}