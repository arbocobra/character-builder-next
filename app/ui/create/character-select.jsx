import InitialForm from './init-form';

const CharacterSelect = (props) => {
   
   return (
      <div className='items-start flex flex-col w-1/2 p-4 m-1'>
         Select
         <InitialForm {...props} />
      </div>
   );
}

export default CharacterSelect;