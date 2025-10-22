export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Character = {
  id:string,
   name:string;
   level:number;
   class:string;
   subclass?:string;
   species:string;
   background:string;
   proficiency_bonus:number;
   hit_dice?:number;
   hit_points?:undefined;
   proficiencies?:any;
   abilities?:undefined;
   speed?:undefined;
   initiative_bonus?:number;
   armour_class?:undefined;
   items:undefined;
   features?:undefined;
}

export type CharacterPreview = Pick<Character, 'id' | 'name' | 'class' | 'species' | 'background' | 'level'>