 import React,{ Suspense, lazy } from 'react';

import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import Loading from '../components/Loading';

const Home = () => {
  return (
   <main>
     <Suspense fallback={<Loading />}>
    <SearchForm/>
    <CocktailList/>
        </Suspense>
   </main>
  )
}

export default Home
