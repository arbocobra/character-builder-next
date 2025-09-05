export const debounce = (onChange) => {
   let timeout;
   return (e) => {
      const form = e.currentTarget.value;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
         onChange(form);
      }, 1000);
   };
};
