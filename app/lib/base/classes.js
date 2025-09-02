export class Barbarian extends BaseClass {
   constructor(level) {
      super('Barbarian', level);
      this.HitDice = '1d12';
      this.Proficiencies.SavingThrows = ['Strength', 'Constitution'];
      this.Proficiencies.Armour = ['Light Armour', 'Medium Armour', 'Shields'];
      this.Proficiencies.Weapons = ['Simple Weapons', 'Martial Weapons'];
      this.Proficiencies.SelectFromList.Skills = { list: ['Animal Handling', 'Athletics', 'Intimidation', 'Survival'], count: 2 };
   }
}