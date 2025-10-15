export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Character = {
   name:string;
   level:number;
   class:string;
   subclass:string;
   species:string;
   background:string;
   proficiency_bonus:number;
   hit_dice:number;
   hit_points:undefined;
   proficiencies:undefined;
   abilities:undefined;
   speed:undefined;
   initiative_bonus:number;
   armour_class:undefined;
   features:undefined;
   items:undefined;
}