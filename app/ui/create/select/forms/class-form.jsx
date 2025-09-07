'use client';

import { useState } from 'react';
import Button from '@/ui/elements/button';
import { classes } from '@/lib/init-data';
import dynamic from 'next/dynamic';
const Select = dynamic(() => import('react-select'), { ssr: false });

const ClassForm = ({current, setClass, updateByName, updateProficiences, clearClass}) => {

   const [className, setClassName] = useState('');
   const [skills, setSkills] = useState([])
   const [isDisabled, setIsDisabled] = useState(false);
   const [buttonText, setButtonText] = useState('Select');

   const skillSelectOptions = current.class ? current.proficiencies.class.selectFromList.skills : null

   const classOptions = classes.map(el => ({ value: el.toLowerCase(), label: el, category: 'class' }));
   const skillsOptions = current.class ? skillSelectOptions.list.map(el => ({ value: el.toLowerCase(), label: el, category: 'skills' })) : null;

   const handleSubmitClass = (e) => {
      e.preventDefault();
      if (className && !current.class) setClass(className);
      else if (className && current.class !== className) setClass(className); // make update class
      else if (current.class && !className) {
         setSkills([])
         clearClass()
      }
   }

   const handlePathSubmit = (e) => {
      e.preventDefault();
      updateProficiences('class.skills', skills);
   }

   const handleClassChange = (val) => {
      setClassName(val ? val.value : null);
   }

   const handleSkillChange = (val) => {
      let newVal = val.map(el => el.value)
      setSkills(newVal)
   }

   return (
      <>
         {current.name && <form className='flex flex-row gap-3 p-2 border-2 justify-stretch' onSubmit={handleSubmitClass}>
            <Select options={classOptions} isClearable name='class' id='select-class' defaultValue={className} onChange={handleClassChange}/>
            <Button value={buttonText} isDisabled={isDisabled} />
         </form>}
         { current.class && (<form className='flex flex-row gap-3 p-2 border-2' onSubmit={handlePathSubmit}>
            <Select options={skillsOptions} isOptionDisabled={() => skills.length >= skillSelectOptions.count} id='select-skills' defaultValue={[]} isMulti onChange={handleSkillChange}/>
            <Button value={buttonText} isDisabled={isDisabled} />
         </form>)}
      </>
   )
}

export default ClassForm;