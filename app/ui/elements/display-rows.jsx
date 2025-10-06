import { Tooltip } from 'react-tooltip'

const capitalize = (val) => {
   if (typeof val === 'string' && val.length > 0) {
      let wordList = val.split(' ')
      if (wordList.length > 1) {
         const nonCaps = ['a', 'of']
         let caps = wordList.map(w => nonCaps.includes(w) ? w : w.charAt(0).toUpperCase() + w.slice(1))
         return caps.join(' ')
      } else {
         let word = val.charAt(0).toUpperCase() + val.slice(1)
         return word
      }
   } else return val
}

export const TextRow = ({val}) => {
   const rowDisplay = 'grid col-span-6 grid-cols-3 gap-2 min-h-8 items-start'
   const labelDisplay = 'font-bold text-xs grid col-span-1 items-center justify-start min-h-8'
   const valueDisplay = 'text-base grid col-span-2 bg-gray-300 p-1 justify-center font-serif min-h-8'
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
   const valueDisplay = 'flex text-lg font-serif bg-gray-300 w-15 rounded-md justify-center items-center'
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
   const valueDisplay = 'text-base font-serif bg-gray-300 justify-center items-center p-1'

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
   const valueDisplay = 'text-base font-serif bg-gray-300 justify-center items-center p-1'

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
   const valueDisplay = 'flex flex-col border-3 border-gray-400 aspect-square w-20 rounded-full justify-center items-center'
   const labelDisplay = 'font-bold text-xs grid row-span-1 items-center justify-center'
   const abilityDisplay = 'text-xl font-serif'
   const modDisplay = 'text-sm font-serif'

   return (
         <div className={rowDisplay}>
            <div className={valueContainer}>
               <div className={valueDisplay}>
                  <div className={abilityDisplay}>{val.total}</div>
                  <div className={modDisplay}>{val.modifier}</div>
               </div>
            </div>
            <div className={labelDisplay}>{val.label}</div>
         </div>
      )
}

export const SavesRow = ({val}) => {
   const rowDisplay = 'grid col-span-6 grid-cols-6 gap-2 min-h-8'
   const labelDisplay = 'font-bold text-xs grid col-span-2 items-center justify-start'
   const valueDisplay = 'text-base grid col-span-2 bg-gray-300 p-1 justify-center font-serif ml-2'
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