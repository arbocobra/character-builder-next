import { features as featuresC } from '@/lib/base/classes/class-features.js';
import { features as featuresS } from '@/lib/base/species/species-features.js';

export default Features;
type Features = {
   class:FeatureItem[],
   species:FeatureItem[],
   background:FeatureItem[],
   feats:FeatureItem[],
}

type FeatureItem = {
   name:string,
   level:number,
   description?:string
}

export const updateValue = (current:Features, level:number, type:string, id:string, sub?:string):Features => {
   let copy:{[key:string]:any} = {...current}
   let featObj = getFeaturesByType(type, id)
   let result = filterFeatures(level, type, featObj, sub)
   copy[type] = result;
   return copy as Features;
}

export const addToList = (current:Features, type:string, params:any[]):Features => {
   let copy:{[key:string]:any} = {...current}
   if (params.length === 1) {
      let [mod] = params
      let checkIndex = copy[type].findIndex((el:FeatureItem) => el.name == (mod as FeatureItem).name)
      if (checkIndex < 0) {
         let tempList = [...copy[type], mod]
         copy[type] = tempList
      }
      return copy as Features
   } else {
      let [level, className] = params;
      let featObj = getFeaturesByType(type, className)
      let result = filterFeatures(level, type, featObj)
      copy[type] = result;
      return copy as Features;
   }
}

export const removeFromList = (id: string | number, current:Features, type:string):Features => {
   let copy:{[key:string]:any} = {...current}
   let features = copy[type]
   let tempList:FeatureItem[]

   if (typeof id === 'string') {
      tempList = features.filter((mod:any) => mod.name !== id);
      copy[type] = tempList
   } else if (typeof id === 'number') {
      tempList = features.filter((mod:any) => mod.level <= id);
      copy[type] = tempList
   }
   return copy as Features;
}

export const clearCategory = (current:Features, type:string, ):Features => {
   let copy:{[key:string]:any} = {...current}
   copy[type] = [] as FeatureItem[]
   return copy as Features;
}

const filterFeatures = (level:number, type:string, features:any[], sub?:string):FeatureItem[] => {
   let result:FeatureItem[];
   if (type === 'class') {
      result = features.filter((el:any) => {
          if (el.level <= level) return el as FeatureItem
      })
   } else if (type === 'species') {
      if (sub) {
         result = features.filter((el:any) => {
            if (el.species === 'base' || el.species === sub) return el as FeatureItem
         })
      } else result = features
   } else result = []

   return result;
}

const getFeaturesByType = (type:string, id:string):FeatureItem[] => {
   let copy:{[key:string]:any}
   if (type === 'class') copy = {...featuresC}
   else if (type === 'species') copy = {...featuresS}
   else copy = {}
   return copy[id].map((el:any) => el as FeatureItem)
}