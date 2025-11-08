import { useEffect, useRef } from 'react'
import { getInitialProficiencyList } from '@/lib/actions'
import { IteratingSimpleSelectForm, IteratingGroupSelectForm, GroupSelectFormUnknownCat } from '@/select/forms/selection-menu'
import { SimpleSelectForm, GroupSelectForm } from '@/app/ui/character/forms/menus/main-menus'

const ProficiencySelect = ({current, isEdit, getInitialValue, submit, id}) => {

   const initProficiencies = useRef()

   const handleSubmit = (val, cat) => {
      const init = initProficiencies.current[cat]
      const update = [...init, ...val];
      submit('proficiencies', {path: `proficiencies.${id}.${cat}`, value: update})
   }

   const getSelectForm = (n,i) => {
      const key = n === 'saving throws' ? 'savingThrows' : n;
      let select = current.proficiencies[id].selectFromList[key] || null;
      if (!select) return;

      switch (select[0].type){
         case 'simple_select':
            return <SimpleSelectForm key={`proficiency-select-form-${i}`} base='proficiencies' data={select[0]} id={id} cat={key} submit={handleSubmit} current={current} isEdit={isEdit} />
         case 'group_select':
            return <GroupSelectForm key={`proficiency-select-form-${i}`} base='proficiencies' data={select[0]} id={id} cat={key} submit={handleSubmit} current={current} isEdit={isEdit} />
         default: return;
      }
   }

   useEffect(() => {
      if (isEdit) {
         const p = getInitialProficiencyList(id, current[id])
         initProficiencies.current = JSON.parse(JSON.stringify(p))
      } else initProficiencies.current = JSON.parse(JSON.stringify(current.proficiencies[id]))
   }, [current[id]])

   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Proficiencies</div>
         { ['armour', 'languages', 'saving throws', 'skills', 'tools', 'weapons'].map((el,i) => getSelectForm(el,i)) }
      </div>
   )
}

export default ProficiencySelect;