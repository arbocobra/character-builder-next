import { useState, useEffect, useRef } from 'react'
import { species, subSpecies } from '@/lib/init-data'
import { ConditionalTwoPartSimpleSelection, SimpleSelectForm, GroupSelectForm, IteratingGroupSelectForm } from '@/select/forms/selection-menu'
import { ToggleButton } from '@/ui/elements/button';

const SpeciesForm = ({current, setSpecies, updateByPath, changeSpecies}) => {
   const [display, setDisplay] = useState(false)
   const initProficiencies = useRef(null);
  const hasSpecies = current.species ? true : false;
   
  const handleSubmitSpecies = (speciesVal, subspeciesVal) => {
      if (!hasSpecies) setSpecies(speciesVal, subspeciesVal);
      else changeSpecies(speciesVal, subspeciesVal)
   }

   const handleSubmitProficiency = (val, id) => {
      const init = initProficiencies.current[id]
      const update = [...init, ...val];
      updateByPath(`proficiencies.species.${id}`, update);
      // console.log(val,id)
   }

   const toggleDisplay = () => setDisplay(!display)

   useEffect(() => {
         if (hasSpecies && !initProficiencies.current) {
            initProficiencies.current = JSON.parse(JSON.stringify(current.proficiencies.species))
         }
      }, [current])

   if (current.name) {
         return (
            <div className='bg-sky-100 p-2'>
               <div className='flex flex-row justify-between'>
                  <div>Display Species Selection</div>
                  <ToggleButton value={display ? 'Close' : 'Open'} handleClick={toggleDisplay}/>
               </div>
               { display && (<div>
                  { current.name && <ConditionalTwoPartSimpleSelection listA={species} listB={subSpecies} title='Select Character Species' idA='species' idB='subspecies' submit={handleSubmitSpecies} /> }
                  { hasSpecies && <ProficiencySelect proficiencySelect={current.proficiencies.species.selectFromList} submit={handleSubmitProficiency} />}
               </div>) }
            </div>
         )
      }
}
export default SpeciesForm

const ProficiencySelect = ({proficiencySelect, submit}) => {
   
   const armourSelect = proficiencySelect.armour;
   const weaponsSelect = proficiencySelect.weapons;
   const toolSelect = proficiencySelect.tools;
   const skillSelect = proficiencySelect.skills
   const languageSelect = proficiencySelect.languages
   const savingThrowSelect = proficiencySelect.savingThrows

   const identifyItemSelect = (val, n) => {
      if (val.length > 1) {
         if (val.every(inner => inner.list.every(el => typeof el == 'string'))) return
         else return (<IteratingGroupSelectForm list={val} id={n} submit={submit} />)
      } else {
         if (val[0].list.every(op => typeof op == 'string')) return (<SimpleSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
         else return (<GroupSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
      }
   }

   return (
      <>
         { armourSelect && identifyItemSelect(armourSelect, 'armour') }
         { weaponsSelect && identifyItemSelect(weaponsSelect, 'weapons') }
         { toolSelect && identifyItemSelect(toolSelect, 'tools') }
         { skillSelect && identifyItemSelect(skillSelect, 'skills') }
         { languageSelect && identifyItemSelect(languageSelect, 'languages') }
         { savingThrowSelect && identifyItemSelect(toolSelect, 'saving throws') }
      </>
   )
}

// const ItemSelect = ({itemSelect, submit}) => {
//    const armourSelect = itemSelect.armour;
//    const weaponsSelect = itemSelect.weapons;
//    const equipmentSelect = itemSelect.equipment;
//    const toolSelect = itemSelect.tools;

//    const identifyItemSelect = (val, n) => {
//       if (val.length > 1) {
//          if (val.every(inner => inner.list.every(el => typeof el == 'string'))) return
//          else return (<IteratingGroupSelectForm list={val} id={n} submit={submit} />)
//       } else {
//          if (val[0].list.every(op => typeof op == 'string')) return (<SimpleSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
//          else return (<GroupSelectForm list={val[0].list} title={val[0].title} id={n} count={val[0].count} submit={submit} />)
//       }
//    }

//    return (
//       <>
//          { armourSelect && identifyItemSelect(armourSelect, 'armour') }
//          { weaponsSelect && identifyItemSelect(weaponsSelect, 'weapons') }
//          { equipmentSelect && identifyItemSelect(equipmentSelect, 'equipment') }
//          { toolSelect && identifyItemSelect(toolSelect, 'tools') }
//       </>
//    )
// }