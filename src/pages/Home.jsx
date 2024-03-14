 import React,{ Suspense, lazy, useEffect } from 'react';

import CocktailList from '../components/CocktailList'
   const url1 = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

const Home = () => {
  useEffect(()=>{
   const fetchMeal=async()=>{
    try{
      const response=await fetch(url1);
      const data=await response.json();
      console.log(data);
    }catch(error){
      console.error(error)
    }
   }
   fetchMeal();
  },[])
  return (
   <main>
    
    <CocktailList/>
   </main>
  )
}

export default Home
