// import { Character } from '.base/baseCharacter';
import { Barbarian } from '@/lib/base/baseClass';


// import { Character } from '@/lib/base/baseCharacter';

export const applyClass = (val, level) => {
   switch (val) {
      case 'barbarian':
         const base = new Barbarian(level);
         return base;
   //    // Add other classes here as needed
      default:
         throw new Error(`Class ${val} not implemented`);
   }
   // console.log('Applying class:', val, 'at level:', level);
}