import { useState, useEffect, useRef } from 'react'
import { backgrounds } from '@/lib/init-data'
import ProficiencySelect from '@/ui/character/forms/select/proficiency-select';
import ItemSelect from '@/ui/character/forms/select/item-select';
import HideDisplay from '@/ui/elements/hide-display';
import {SelectButton} from '@/ui/elements/button';
import { customStyles175 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const BackgroundContainer = (props) => {
   const hasBackground = props.current.background ? true : false;

   const hasSelect = (id) => {
      if (!hasBackground) return false;
      else {
         if (Object.values(props.current[id].background.selectFromList).some(el => el !== null)) return true;
         else return false;
      }
   }

   return (
      <div className='flex flex-col gap-5'>
         <BackgroundSelect {...props} />
         { hasSelect('proficiencies') && <ProficiencySelect {...props} id={'background'} />}
         { hasSelect('items') && <ItemSelect {...props} id={'background'} />}
         {/* { hasClass && <ItemSelect {...props} id={'class'} /> } */}
      </div>
   )
}

const BackgroundSelect = ({current, isEdit, getInitialValue, submit}) => {
   const backgroundOptions = backgrounds.map(el => ({ value: el.toLowerCase(), label: el }));
   
   const [selectBackground, setSelectBackground] = useState(isEdit ? getInitialValue(backgroundOptions, current.background) : '')
   const [display, setDisplay] = useState(true)
   
   const buttonText = isEdit ? 'Update' : 'Select';

   const handleBackgroundChange = (val) => {
      if (val) {
         setSelectBackground(val)
      } else {
         setSelectBackground(null)
      }
   }
   const handleSubmit = (data) => {
      const entries = Object.fromEntries(data.entries());
      submit('background', entries);
      setDisplay(false)
   }
   
   const resetDisplay = () => {
      setSelectBackground(null)
      setDisplay(true)
   }

   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Character Background</div>
         { display ? 
            <form className='flex flex-row gap-3' action={handleSubmit}>
               <Select styles={customStyles175} options={backgroundOptions} name='background' value={selectBackground} id='background' onChange={handleBackgroundChange} required />
               {/* {subOptions && <SubspeciesSelect subOptions={subOptions} isEdit={isEdit} getInitialValue={getInitialValue} currentSub={current.species} /> } */}
               <SelectButton value={buttonText} />
            </form>
            : <HideDisplay select={[selectBackground]} resetDisplay={resetDisplay} />
         }
      </div>
   )
}

// const SubspeciesSelect = ({subOptions, isEdit, getInitialValue, currentSub}) => {
//    const [selectSubspecies, setSelectSubspecies] = useState(isEdit ? getInitialValue(subOptions, currentSub) : '');

//    useEffect(() => {
//       if (selectSubspecies) {
//          let x = subOptions.find(el => el.value === selectSubspecies.value)
//          if (x === undefined) setSelectSubspecies('')
//       }
//    },[subOptions])

//    return (
//       <Select styles={customStyles175} options={subOptions} name='subspecies' value={selectSubspecies} onChange={(v) => setSelectSubspecies(v)} required />
//    )
// }

export default BackgroundContainer;