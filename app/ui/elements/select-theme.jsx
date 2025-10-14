export const customTheme = (theme) => ({
   ...theme,
   borderRadius: 2,
   colors: {
      ...theme.colors,
      // primary: '#32a852',
      // primary25: '#bd1a1a',
      // primary50: '#afbd1a',
      // primary75: '#1a30bd',
   },
   spacing: {
      menuGutter: 15,
      baseUnit: 5,
      controlHeight: 20,
   }
})

export const customStyles175 = {
   control: (base) => ({
      ...base,
      width: '175px',
      borderRadius: 2,
      // border: '1px solid #333333',
      // '&:hover': {
      //    border: '1px solid #333333',
      // }
   }),
   valueContainer: (base) => ({
      ...base,
      // width: '100px',
   }),
}

export const customStyles150 = {
   control: (base) => ({
      ...base,
      width: '150px',
      borderRadius: 2,
   }),
   clearIndicator: (base) => ({
      ...base,
      fontSize: '20px'
   })
}

export const customStyles125 = {
   control: (base) => ({
      ...base,
      width: '125px',
      borderRadius: 2,
   }),

}

export const customStyles120 = {
   control: (base) => ({
      ...base,
      width: '120px',
      borderRadius: 2,
   }),
}

export const customStyles110 = {
   control: (base) => ({
      ...base,
      width: '110px',
      borderRadius: 2,
   }),
}

export const customStyles100 = {
   control: (base) => ({
      ...base,
      width: '100px',
      borderRadius: 2,
   }),
}

export const customStyles75 = {
   control: (base) => ({
      ...base,
      width: '75px',
      borderRadius: 2,
   }),
}