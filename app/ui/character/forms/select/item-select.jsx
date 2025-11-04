import { useState, useEffect, useRef } from 'react'
import { getInitialItemList } from '@/lib/actions'
import { matchSpecial, updateSubmitState, getSubmitVals, getMergedVals } from '@/lib/display-actions'
import { SimpleSelectForm, GroupSelectForm, IteratingSelectForm } from '@/ui/character/forms/menus'
import { SpecialSelectForm1, SpecialSelectForm2, SpecialSelectForm3, SpecialSelectForm4, SpecialSelectForm5 } from '@/ui/character/forms/special-select-menus'

const ItemSelect = ({current, isEdit, getInitialValue, submit, id}) => {
   const initSubmitState = () => {
      const obj = current.items[id].selectFromList
      return Object.keys(obj).filter(val => obj[val]).flatMap(val => obj[val].map(v => ({index: null, category: null, value: null })))
   }
   const [submitted, setSubmitted] = useState(initSubmitState)
   const initItems = useRef()

   const getSubmitState = (value, category, index, i = null) => {
      const isSubmitted = submitted.some(s => s.index === index)
      const update = updateSubmitState(value, category, index, submitted, isSubmitted)
      setSubmitted(update)
      const submitVals = {}
      Object.keys(initItems.current).forEach(key => {
         if (key === 'currency') submitVals[key] = initItems.current.currency;
         else if (key === 'selectFromList') {
            submitVals[key] = initItems.current.selectFromList;
            if (i != null){} // option here to add 'selected' val in item object
         } else {
            let vals = getSubmitVals(update, key)
            submitVals[key] = [...initItems.current[key], ...vals]
         } 
      })
      return submitVals;
   }

   const handleSubmit = (val, cat, index) => {
      const update = getSubmitState(val, cat, index)
      // console.log(update)
      submit('items', {path: `items.${id}`, value: update})
      // submit('items', {path: `items.${id}.${cat}`, value: update})
   }

   const handleSpecialandNestedSubmit = (val, cat, index, i = 0) => {
      const update = getSubmitState(val, cat, index, i)
      submit('items', {path: `items.${id}`, value: update})
   }

   const getSelectForm = (key,i) => {
      let select = current.items[id].selectFromList[key] || null;
      if (select) {
         if (select.length > 1) return <IteratingSelectForm key={`item-select-form-${i}`} base='items' data={select} id={id} cat={key} submit={handleSpecialandNestedSubmit} current={current} init={initItems.current} isEdit={isEdit} idx={i} />
         else {
            switch (select[0].type){
               case 'simple_select':
                  return <SimpleSelectForm key={`item-select-form-${i}`} base='items' data={select[0]} id={id} cat={key} submit={handleSubmit} current={current} isEdit={isEdit} index={`s-${i}`} />
               case 'group_select':
                  return <GroupSelectForm key={`item-select-form-${i}`} base='items' data={select[0]} id={id} cat={key} submit={handleSubmit} current={current} isEdit={isEdit} index={`s-${i}`} />
               default: return;
            }
         }
      }
   }

   const getSpecialSelectForm = (key,i) => {
      const select = current.items[id].selectFromList[key] || null;
      if (select){
         switch (select[0].type){
            case 'special_select_1':
               return <SpecialSelectForm1 key={'item-special-select-form-1'} base='items' data={select[0]} id={id} cat={key} submit={handleSpecialandNestedSubmit} current={current} isEdit={isEdit} index={'sp-1'} />
            case 'special_select_2':
               return (
                  <div className='flex flex-col gap-4' key={'item-special-select-form-2-3'}><SpecialSelectForm2 base='items' data={select[0]} id={id} cat={key} submit={handleSpecialandNestedSubmit} current={current} isEdit={isEdit} index={0} /> 
                  <SpecialSelectForm3 base='items' data={select[1]} id={id} cat={key} submit={handleSpecialandNestedSubmit} current={current} isEdit={isEdit} index={1} /></div>) // return index as sp-3-${i} and i
            case 'special_select_4':
               return <SpecialSelectForm4 key={'item-special-select-form-4'} base='items' data={select[0]} id={id} cat={key} submit={handleSpecialandNestedSubmit} current={current} isEdit={isEdit} index={'sp-4'} />
            case 'special_select_5':
               return <SpecialSelectForm5 key={'item-special-select-form-5'} base='items' data={select[0]} id={id} cat={key} submit={handleSpecialandNestedSubmit} current={current} isEdit={isEdit} index={'sp-5'} />
            default: return;
         }
      }
   }

   useEffect(() => {
      setSubmitted(initSubmitState())
      // initItems.current = getInitialItemList(id, current[id])
      if (isEdit) {
         const p = getInitialItemList(id, current[id])
         initItems.current = JSON.parse(JSON.stringify(p))
      } else initItems.current = JSON.parse(JSON.stringify(current.items[id]))
   }, [current[id]])

   return (
      <div className='flex flex-col gap-4'>
         <div className='text-base font-medium'>Select Items</div>
         { ['armour', 'equipment', 'tools', 'weapons', 'special'].map((el,i) => el === 'special' ? getSpecialSelectForm(el,i) : getSelectForm(el,i)) }
      </div>
   )
}

export default ItemSelect;