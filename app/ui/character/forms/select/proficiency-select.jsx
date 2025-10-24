import { useEffect, useRef } from 'react'
import { getInitialProficiencyList } from '@/lib/actions'
import { IteratingSimpleSelectForm, IteratingGroupSelectForm, GroupSelectFormUnknownCat } from '@/select/forms/selection-menu'
import { SimpleSelectForm, GroupSelectForm } from '@/ui/character/forms/menus'
const ProficiencySelect = ({current, isEdit, getInitialValue, submit, id}) => {

   const initProficiencies = useRef()

   const getSelect = (el) => {
      if (!Array.isArray(el) || !el.length) return null;
      else if (el.length) return el;
      else return null;
   }

   const handleSubmit = (val, cat) => {
      const init = initProficiencies.current[cat]
      const update = [...init, ...val];
      submit('proficiencies', {path: `proficiencies.${id}.${cat}`, value: update})
      // updateByPath(`proficiencies.class.${id}`, update);
   }

   const proficiencies = current.proficiencies[id];
   const selectFromList = proficiencies.selectFromList;

   const getSelectForm = (n,i) => {
      const key = n === 'saving throws' ? 'savingThrows' : n;
      const select = getSelect(selectFromList[key])
      if (!select) return;
      if (select[0].type === 'simple_select') {
         return <SimpleSelectForm key={`proficiency-select-form-${i}`} list={select[0].list} title={select[0].title} id={n} count={select[0].count} submit={handleSubmit} init={proficiencies[key]} isEdit={isEdit} />
      } else if (select.type === 'group_select') {
         return <GroupSelectForm key={`proficiency-select-form-${i}`} list={select[0].list} title={select[0].title} id={n} count={select[0].count} submit={handleSubmit} init={proficiencies[key]} isEdit={isEdit} />
      }
   }

   useEffect(() => {
      if (isEdit) {
         const p = getInitialProficiencyList(id, current[id])
         initProficiencies.current = JSON.parse(JSON.stringify(p))
      } else initProficiencies.current = JSON.parse(JSON.stringify(proficiencies))
   }, [current[id]])

   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Proficiencies</div>
         { ['armour', 'languages', 'saving throws', 'skills', 'tools', 'weapons'].map((el,i) => getSelectForm(el,i)) }
      </div>
   )
}

export default ProficiencySelect;