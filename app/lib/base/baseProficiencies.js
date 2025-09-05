class baseProficiencies {
   constructor() {}

   // List of proficiencies
   Armour = [];
   Weapons = [];
   Tools = [];
   SavingThrows = [];
   Skills = [];
   Languages = [];

   SelectFromList = {
      Armour: null,
      Weapons: null,
      Tools: null,
      SavingThrows: null,
      Skills: null,
      Languages: null,
   }
   
   // addProficiency(proficiency, value) {
   //    if (typeof value === 'object') {
   //       value.array.forEach(el => this.addProficiency(el));
   //    } else {
   //       if (!this[proficiency].includes(value)) {
   //          this[proficiency].push(value);
   //       }
   //    }
   // }
   
   // getProficiency(val) {
   //    return this[val];
   // }
}

export default baseProficiencies;