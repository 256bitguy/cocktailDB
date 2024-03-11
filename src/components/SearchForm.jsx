import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm}=useGlobalContext();
  const searchValue=React.useRef('');
  React.useEffect(()=>{
    searchValue.current.focus()
   },[])
  

const searchCocktail=()=>{
  setSearchTerm(searchValue.current.value);
}
const handleSubmit=(e)=>{
e.preventDefault();
}
  return (
    <section  >
      <form   onSubmit={handleSubmit}>
        <div className='form-control'>
           
          <input type='text' id='name' ref={searchValue}
          onChange={searchCocktail} placeholder='Searh'/>
        </div>


      </form>

    </section>
  )
}

export default SearchForm
