// import { BaseClass } from './baseClass';

export class Character {
   constructor(name, level) {
      this.Name = name;
      this.Level = level;
      this.OpTest2();
   }
   Class = null;
   Background = null;
   Species = null;
   Bio = null;

   OpTest() {
      this.Bio = 'This is also a test';
      return 'Character operation test';
   }

   OpTest2() {this.Bio = 'Raging mindfully, all day long';}
}

// export default CHARACTER;