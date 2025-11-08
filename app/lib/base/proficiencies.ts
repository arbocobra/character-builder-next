export default Proficiencies
type Proficiencies = {
   class:BaseProficiencies,
   species:BaseProficiencies,
   background:BaseProficiencies,
   feats:ProficienciesList,
   total: {
      armour:string[],
      weapons:string[],
      tools:string[],
      savingThrows:string[],
      skills:string[],
      languages:string[]
   }
}

export type BaseProficiencies = {
   armour:string[],
   weapons:string[],
   tools:string[],
   savingThrows:string[],
   skills:string[],
   languages:string[],
   selectFromList?: {
      armour?:string[] | null,
      weapons?:string[] | null,
      tools?:string[] | null,
      savingThrows?:string[] | null,
      skills?:string[] | null,
      languages?:string[] | null,
   }
}

export type ProficienciesList = {
   list:ProficienciesItem[],
   total: BaseProficiencies,
}

export type ProficienciesItem = {
   name:string,
   prop:string,
   level:number,
   value:any[],
}

export const updateValue = (val:object, current:Proficiencies, keys:string|string[]):Proficiencies => {
  let copy:{[key:string]:any} = {...current}
  if (typeof keys === 'string') copy[keys] = {...val}
  else {
    let category:{[key:string]:any} = copy[keys[0]]
    if (Array.isArray(category[keys[1]])) category[keys[1]] = val
    else category[keys[1]][keys[2]] = val
  }
    return calculateTotal(copy as Proficiencies)
}

export const addToList = (mod:object, current:Proficiencies):Proficiencies => {
  let copy:{[key:string]:any} = {...current}
  let featCopy:{[key:string]:any} = {...copy.feats}
  if (isNew(featCopy.list, mod)) {
    let tempList = [...featCopy.list, mod as ProficienciesItem]
    featCopy.list = tempList
    featCopy.total = getListTotal(tempList)
  }
  copy.feats = featCopy as ProficienciesList
  return calculateTotal(copy as Proficiencies)
}

export const removeFromList = (id:string | number, current:Proficiencies):Proficiencies => {
   let copy:{[key:string]:any} = {...current}
   let featCopy:{[key:string]:any} = {...copy.feats}
   let tempList;
   if (typeof id === 'string') tempList = featCopy.list.filter((feat:ProficienciesItem) => feat.name !== id)
   else tempList = featCopy.list.filter((feat:ProficienciesItem) => feat.level <= id)
   featCopy.list = tempList
   featCopy.total = getListTotal(tempList)
   copy.feats = featCopy as ProficienciesList
   return calculateTotal(copy as Proficiencies)
}

export const clearCategory = (key:string, current:Proficiencies) => {
   let emptyBase:BaseProficiencies = {
      armour: [], weapons: [], tools: [], savingThrows: [], skills: [], languages: [], selectFromList: undefined
   }
   let copy:{[key:string]:any} = {...current}
   if (key === 'feats') copy[key] = {list: [], total: emptyBase} as ProficienciesList
   else copy[key] = emptyBase
  return calculateTotal(copy as Proficiencies)
}

const calculateTotal = (update:Proficiencies):Proficiencies => {
  let total:{[key:string]: string[]} = {
    armour: [], weapons: [], tools: [], savingThrows: [], skills: [], languages: []
  }
  
  const addModifiers = (category:BaseProficiencies) => {
    let cat:{[key:string]:any} = {...category}
    for (let prop of Object.keys(cat)) {
      if (prop !== 'selectFromList') {
        let tempList = [...total[prop]]
        let list = cat[prop]
        if (list.length) {
          list.forEach((item:string) => {
            if (!tempList.includes(item)) tempList.push(item)
          })
        }
        total[prop] = tempList;
      }
    }
  }

  let categories:{[key:string]: BaseProficiencies} = {
    class: update.class, 
    species: update.species, 
    background: update.background, 
    feats: update.feats.total
  }

  Object.keys(categories).forEach(el => addModifiers(categories[el]))
  update.total = total as Proficiencies['total'];
  return update;
}

const isNew = (current: object[], update: object):boolean => (current as ProficienciesItem[]).every((el) => el.name !== (update as ProficienciesItem).name)

const getListTotal = (feats: object[]):object => {
  let total:{[key:string]:any} = {
    armour: [], weapons: [], tools: [], savingThrows: [], skills: [], languages: []
  }
  
  const addToTotal = (feat:ProficienciesItem) => {
    let prop = feat.prop
    if (prop !== 'selectFromList') {
      let temp = [...total[prop]]
      feat.value.forEach(el => {
        if (!temp.includes(el)) temp.push(el)
      })
      total[prop] = temp
    }
  }

  (feats as ProficienciesItem[]).forEach(feat => addToTotal(feat))
  return total;
}