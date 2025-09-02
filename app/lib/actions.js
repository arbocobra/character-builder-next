// import { Character } from '.base/baseCharacter';
// import { Barbarian } from './classes/barbarian';


import { Character } from '@/lib/base/baseCharacter';

export const CreateCharacter = (name, level) => {
   // const name = form.get('characterName');
   // const level = parseInt(form.get('characterLevel'), 10);
   const char = new Character(name, parseInt(level));
   return char;
   // console.log(current)
   // console.log(name, level)
}
export const ApplyClass = async (val, level) => {
   // switch (val) {
   //    case 'Barbarian':
   //       return new Barbarian(level);
   //    // Add other classes here as needed
   //    default:
   //       throw new Error(`Class ${val} not implemented`);
   // }
   console.log('Applying class:', val, 'at level:', level);
}