

const CharacterDisplay = ({current}) => {
   
   return (
      <div className='flex flex-col w-1/2 p-4 m-1'>
         Display
         Name: {current.name}
      </div>
   );
}

export default CharacterDisplay;