import React, { useState, useContext, useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const url1 = "www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
 const fetchDrinks=async()=>{
  setLoading(true);

  try{
    const response=await fetch(`${url}${searchTerm}`);
const data=await response.json();
console.log(data);
const {drinks}=data;
if(drinks){
const newCocktails=drinks.map((item)=>{
  const{idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item
  const{ idMeal,strMeal,strCateogry,strArea,strInstruction,strMealThumb}=item
  return{
    id:idDrink,
    name:strDrink,
    image:strDrinkThumb,
    info:strAlcoholic,
    glass:strGlass
  }
})
setCocktails(newCocktails);
console.log(cocktails);
}else{
  setCocktails([]);
}
setLoading(false)
  }catch(error){
     
    setLoading(false);
  }
 }
 useEffect(()=>{
  fetchDrinks();
 },[searchTerm])
 
 
 
 
  return (
    <AppContext.Provider
      value={{ 
         loading,
         searchTerm, 
         cocktails, 
         setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
