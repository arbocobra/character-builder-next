import { Tooltip } from 'react-tooltip'

const capitalize = (val) => {
   if (typeof val === 'string' && val.length > 0) {
      const nonCaps = ['a', 'of', 'or', 'in', 'the', 'from']
      let wordList = val.split(' ').map((word, i) => {
         if (i === 0) return toCaps(word)
         else if (nonCaps.includes(word)) return word
         else return toCaps(word)
      })
      return wordList.join(' ')
   } else return val
}

const toCaps = (word) => word.charAt(0).toUpperCase() + word.slice(1)

export const TextRow = ({val}) => {
   const rowDisplay = 'grid col-span-6 grid-cols-3 gap-2 min-h-8 items-start'
   const labelDisplay = 'font-bold text-xs grid col-span-1 items-center justify-start min-h-8'
   const valueDisplay = 'text-base grid col-span-2 bg-medium p-1 justify-center font-serif min-h-8'
   return (
      <div className={rowDisplay}>
         <div className={labelDisplay}>{val.label}:</div>
         <div className={valueDisplay}>{capitalize(val.value)}</div>
      </div>
   )
}

export const BlockRow = ({val}) => {
   const rowDisplay = 'grid col-span-4 grid-cols-1 grid-rows-3 gap-2 pt-3'
   const valueContainer = 'grid row-span-2 justify-center'
   const valueDisplay = 'flex text-lg font-serif bg-medium w-15 rounded-md justify-center items-center'
   const labelDisplay = 'font-bold text-xs grid row-span-1 items-center justify-center'

   return (
         <div className={rowDisplay}>
            <div className={valueContainer}>
               <div className={valueDisplay}>{val.value}</div>
            </div>
            <div className={labelDisplay}>{val.label}</div>
         </div>
      )
}

export const ListRow = ({val, cat}) => {
   const rowDisplay = 'grid col-span-12 grid-cols-6 gap-2 min-h-8 items-start'
   const labelDisplay = 'font-bold text-xs grid col-span-1 items-center justify-start min-h-8'
   const valueContainer = 'col-span-5 justify-start gap-2 flex flex-row flex-wrap'
   const valueDisplay = 'text-base font-serif bg-medium justify-center items-center p-1'

   return (
         <div className={rowDisplay}>
            <div className={labelDisplay}>{val.label}:</div>
            <div className={valueContainer}>
               { val.value.map((l, i) => (<div key={`${cat}-display-${i}`} className={valueDisplay}>{capitalize(l)}</div>)) }
            </div>
         </div>
      )
}

export const FeatureRow = ({val}) => {
   const rowDisplay = 'grid col-span-12 grid-cols-6 gap-2 min-h-8 items-start'
   const labelDisplay = 'font-bold text-xs grid col-span-1 items-center justify-start min-h-8'
   const valueContainer = 'col-span-5 justify-start gap-2 flex flex-row flex-wrap'
   const valueDisplay = 'text-base font-serif bg-medium justify-center items-center p-1'

   const displayFeature = (l,i) => {
      return (
         <div key={`prof-display-${i}`} className={valueDisplay}>
            <a data-tooltip-id={`feat-ttip-${i}`}>
               {l.name}
            </a>
            <Tooltip style={{maxWidth: '400px'}} id={`feat-ttip-${i}`}>
               {l.description ? l.description : 'No description'}
            </Tooltip>
         </div>
      )
   }

   return (
         <div className={rowDisplay}>
            <div className={labelDisplay}>{val.label}:</div>
            <div className={valueContainer}>
               { val.value.map((l, i) => displayFeature(l,i)) }
            </div>
         </div>
      )
}

export const AbilitiesRow = ({val}) => {
   const rowDisplay = 'grid col-span-4 grid-cols-1 grid-rows-3 gap-2 pt-3'
   const valueContainer = 'grid row-span-2 justify-center'
   const valueDisplay = 'flex flex-col border-3 border-light-blue aspect-square w-20 rounded-full justify-center items-center'
   const labelDisplay = 'font-bold text-xs grid row-span-1 items-center justify-center'
   const abilityDisplay = 'text-xl/4 font-serif border-b pb-2'
   const modDisplay = 'text-lg/4 font-serif pt-1'

   return (
         <div className={rowDisplay}>
            <div className={valueContainer}>
               <div className={valueDisplay}>
                  <div className={abilityDisplay}>{val.total}</div>
                  <div className={modDisplay}>{val.modifier > 0 ? '+ ' + val.modifier : val.modifier}</div>
               </div>
            </div>
            <div className={labelDisplay}>{val.label}</div>
         </div>
      )
}

export const SavesRow = ({val}) => {
   const rowDisplay = 'grid col-span-6 grid-cols-6 gap-2 min-h-8'
   const labelDisplay = 'font-bold text-xs grid col-span-2 items-center justify-start'
   const valueDisplay = 'text-base grid col-span-2 bg-medium p-1 justify-center font-serif ml-2'
   const proficDisplay = 'grid col-span-1 items-center justify-center'

   const circleFill = <svg className='size-3 fill-slate-950 stroke-2 stroke-slate-950'><circle cx='6' cy='6' r='4' /></svg>
   const circle = <svg className='size-3 stroke-2 fill-none stroke-slate-950'><circle cx='6' cy='6' r='4' /></svg>

   return (
      <div className={rowDisplay}>
         <div className={proficDisplay}>{val.proficient ? circleFill : circle}</div>
         <div className={labelDisplay}>{val.label}:</div>
         <div className={valueDisplay}>{val.total}</div>
      </div>
   )
}

export const SkillsRow = ({val}) => {
   const rowDisplay = 'grid col-span-4 grid-cols-7 gap-2 min-h-8'
   const labelDisplay = 'font-bold text-xs grid col-span-4 items-center justify-start'
   const valueDisplay = 'text-base grid col-span-2 bg-medium p-1 justify-center font-serif'
   const proficDisplay = 'grid col-span-1 items-center justify-center'

   const solid = <svg className='size-4 stroke-[1.5] fill-slate-950 stroke-slate-950'><circle cx='8' cy='8' r='4' /></svg>
   const outline = <svg className='size-4 stroke-[1.5] fill-none stroke-slate-950'><circle cx='8' cy='8' r='4' /></svg>
   const ring = <svg className='size-4'><circle className='stroke-slate-950 stroke-[1.5] fill-none' cx='8' cy='8' r='5.5' /><circle className='fill-slate-950' cx='8' cy='8' r='3.5' /></svg>

   return (
      <div className={rowDisplay}>
         <div className={proficDisplay}>{val.isProfic ? solid : val.isExpert ? ring : outline}</div>
         <div className={labelDisplay}>{val.label}:</div>
         <div className={valueDisplay}>{val.score > 0 ? '+ ' + val.score : val.score}</div>
      </div>
   )
}