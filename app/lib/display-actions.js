export const getGroupOptions = (data, cat) => {
   const {count, list, title, _type} = data;
   let group = typeof list[0] == 'string' ? [{label: null, options: [] }] : []
   const titleArray = title.split(' OR ')
   list.forEach((el,i) => {
      if (typeof el == 'string') {
         group[0].options.push({ value: el.toLowerCase(), label: el, category: cat })
      } else {
         group.push({label: titleArray[i], options: []})
         let options = el.map(el => ({ value: el.toLowerCase(), label: el, category: cat }))
         group[group.length - 1].options = options
      }
   })
   return group;
}

export const getIndexedGroupOptions = (data) => {
   const {count, list, title, _type} = data;
   let group = typeof list[0] == 'string' ? [{label: null, options: [] }] : []
   const titleArray = title.split(' OR ')
   list.forEach((el,i) => {
      if (typeof el == 'string') {
         group[0].options.push({ value: el.toLowerCase(), label: el, index: i})
      } else {
         group.push({label: titleArray[i], options: []})
         let options = el.map(el => ({ value: el.toLowerCase(), label: el, index: i}))
         group[group.length - 1].options = options
      }
   })
   return group;
}

export const getMultiCatGroupOptions = (data, catArray) => {
   const {count, list, title, _type} = data;
   let group = typeof list[0] == 'string' ? [{label: null, options: [] }] : []
   const titleArray = title.split(' OR ')
   list.forEach((el,i) => {
      if (typeof el == 'string') {
         group[0].options.push({ value: el.toLowerCase(), label: el, category: catArray[i] })
      } else {
         group.push({label: titleArray[i], options: []})
         let options = el.map(el => ({ value: el.toLowerCase(), label: el, category: catArray[i] }))
         group[group.length - 1].options = options
      }
   })
   return group;
}

export const filterItemObject = (val1, val2, cat1, cat2, init, i = 0) => {
   const current = {};
   Object.keys(init).forEach(el => {
      if (el === cat1) current[el] = val1;
      else if (el === cat2) current[el] = val2;
      else if (el === 'selectFromList') {
         current.selectFromList = init.selectFromList;
         current.selectFromList.special[i].selected = [val1[val1.length - 1], cat1];
      } else current[el] = init[el];
   })
   return current;
}

export const matchSpecial = (initItem, currentItem, cat) => {
   let special = currentItem.selectFromList.special
   if (special) {
      if (special.length > 1) {
         if (special[0].selected[1] === cat) return currentItem[cat]
         else if (special[1].selected[1] === cat) return currentItem[cat]
         else return initItem[cat]
      } else {
         if (special[0].selected[1] === cat) return currentItem[cat]
         else return initItem[cat]
      }
   } else return initItem[cat]
}

export const multiCatFilterDouble = (valA, valB, init, groupCat, i, extraVal = null) => {
   const current = {};
   Object.keys(init).forEach(el => {
      if (el === valA.category) current[el] = [...init[el], valA.value]
      else if (el === valB.category) current[el] = [...init[el], valB.value]
      else if (el === 'selectFromList') {
         current.selectFromList = init.selectFromList;
         current.selectFromList[groupCat][i].selected = [extraVal ? extraVal : valA.value, valA.category]}
      else current[el] = init[el];
   })
   return current;
}

export const multiCatFilterSingle = (value, init, cat, groupCat, i, extraVal = null) => {
   const current = {};
   Object.keys(init).forEach(el => {
      if (el === cat) current[el] = [...init[el], ...value]
      else if (el === 'selectFromList') {
         current.selectFromList = init.selectFromList;
         current.selectFromList[groupCat][i].selected = [extraVal ? extraVal : value[i], cat]
      } 
      else current[el] = init[el];
   })
   return current;
}

export const updateSubmitState = (value, category, index, state, isSubmitted) => {
   if (isSubmitted) {
      let currIndex = state.findIndex(s => s.index === index)
      return state.map((s,i) => {
         if (i === currIndex) {
            return {...s, category, value };
         } else return s;
      })
   } else {
      let currIndex = state.findIndex(s => !s.index)
      return state.map((s,i) => {
         if (i === currIndex) {
            return { index, category, value }
         } else return s;
      })
   }
}

export const getSubmitVals = (update, category) => {
   return update.filter(el => {
      if (Array.isArray(el.category)) {
         return el.category.includes(category);
      } else return el.category === category;
   }).flatMap(el => {
      if (Array.isArray(el.category)) {
         return el.value[el.category.indexOf(category)];
      } else return el.value;
   })
}

export const getMergedVals = (update, category, init, i) => {
   const current = {};
   Object.keys(init).forEach(key => {
      if (key === catA) current[key] = [...init[key], ...updateA];
      else if (key === catB) current[key] = [...init[key], ...updateB];
   })
   // if (Array.isArray(category)) {
   //    let [catA, catB] = category;
   //    let [updateA, updateB] = update;
   //    Object.keys(init).forEach(key => {
   //       if (key === catA) current[key] = [...init[key], ...updateA];
   //       else if (key === catB) current[key] = [...init[key], ...updateB];
   //       // else if (el === 'selectFromList') {
   //       //    current.selectFromList = init.selectFromList;
   //       //    current.selectFromList.special[i].selected = [val1[val1.length - 1], cat1];
   //       // }
   //       else current[key] = init[key]
   //    })
   // } else {
   //    Object.keys(init).forEach(key => {
   //       if (key === category) current[key] = [...init[key], ...update];
   //       // else if (el === 'selectFromList') {
   //       //    current.selectFromList = init.selectFromList;
   //       //    current.selectFromList.special[i].selected = [val1[val1.length - 1], cat1];
   //       // }
   //       else current[key] = init[key]
   //    })
   // }
   return current;
}