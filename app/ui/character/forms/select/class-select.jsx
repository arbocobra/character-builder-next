import { useEffect, useState } from 'react';
import { subclasses as classes } from '@/lib/init-data';
import ProficiencySelect from '@/ui/character/forms/select/proficiency-select';
import ItemSelect from '@/ui/character/forms/select/item-select';
import HideDisplay from '@/ui/elements/hide-display';
import {SelectButton} from '@/ui/elements/button';
import { customStyles175 } from '@/ui/elements/select-theme'
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const ClassContainer = (props) => {

   const hasClass = props.current.class ? true : false;

   const hasSelect = (id) => {
      if (!hasClass) return false;
      else {
         if (Object.values(props.current[id].class.selectFromList).some(el => el !== null)) return true;
         else return false;
      }
   }

   return (
      <div className='flex flex-col gap-5'>
         <ClassSelect {...props} />
         { hasSelect('proficiencies') && <ProficiencySelect {...props} id={'class'} /> }
         { hasSelect('items') && <ItemSelect {...props} id={'class'} /> }
      </div>
   )
}

const ClassSelect = ({current, isEdit, getInitialValue, submit}) => {

   const classOptions = Object.keys(classes).map(el => ({ value: el.toLowerCase(), label: el, info: classes[el] }));
   const [selectClass, setSelectClass] = useState(isEdit ? getInitialValue(classOptions, current.class) : '')
   const [subOptions, setSubOptions] = useState(null)
   const [display, setDisplay] = useState(true)

   const buttonText = isEdit ? 'Update' : 'Select';

   const displaySubclass = () => {
      if (selectClass) {
         if (selectClass.info.level > current.level) return false;
         else return true;
      } else return false
   }

   const subOptionsLookup = () => {
      let info = selectClass.info
      let options = info.name.map(el => ({ value: el.toLowerCase(), label: info.title(info.id, el)}))
      setSubOptions(options)
   }

   const getSubclassOptions = () => {
      let selected = displaySubclass()
      if (selected) {
         subOptionsLookup()
      } else setSubOptions(null)
   }

   const handleClassChange = (val) => {
      if (val) {
         setSelectClass(val)
      } else {
         setSelectClass(null)
         setSubOptions(null)
      }
   }

   const handleSubmit = (data) => {
      const entries = Object.fromEntries(data.entries());
      submit('class', entries);
      setDisplay(false)
   }

   useEffect(() => {
      getSubclassOptions()
   }, [current, selectClass])

   const resetDisplay = () => {
      setSelectClass(null)
      setDisplay(true)
   }
   

   return (
      <div className='flex flex-col gap-3'>
         <div className='text-base font-medium'>Select Character Class</div>
         { display ? 
         <><form className='flex flex-row flex-wrap gap-3' action={handleSubmit}>
            <Select styles={customStyles175} options={classOptions} name='class' value={selectClass} id='class' onChange={handleClassChange} required />
            {subOptions && <SubclassSelect subOptions={subOptions} isEdit={isEdit} getInitialValue={getInitialValue} currentSub={current.subclass} /> }
            <SelectButton value={buttonText} />
         </form>
         { selectClass && !subOptions && <div className=''>{selectClass.label} selects their subclass at level {selectClass.info.level}</div> }</> 
         : <HideDisplay select={[selectClass]} resetDisplay={resetDisplay} /> }
      </div>
   )
}

const SubclassSelect = ({subOptions, isEdit, getInitialValue, currentSub}) => {

   const [selectSubclass, setSelectSubclass] = useState(isEdit ? getInitialValue(subOptions, currentSub) : '')

   useEffect(() => {
      if (selectSubclass) {
         let x = subOptions.find(el => el.value === selectSubclass.value)
         if (x === undefined) setSelectSubclass('')
      }
   },[subOptions])

   return (
      <Select styles={customStyles175} options={subOptions} name='subclass' value={selectSubclass} onChange={(v) => setSelectSubclass(v)} required />
   )
}

export default ClassContainer