 import React,{ Suspense, lazy } from 'react';

import CocktailList from '../components/CocktailList'
// import SearchForm from '../components/SearchForm'
import Loading from '../components/Loading';
const SearchForm =lazy(()=>import('../components/SearchForm'))

const Home = () => {
  return (
   <main>
     <Suspense fallback={<Loading />}>
    <SearchForm/>
        </Suspense>
    <CocktailList/>
   </main>
  )
}

export default Home
