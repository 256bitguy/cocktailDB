import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import {Home,Error,SingleCocktail,About, HomeLayOut} from './pages';


const App=()=>{
  const router=createBrowserRouter([
    {
      path:'/',
      element:<HomeLayOut/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<Home/>
        },{
          path:'about',
          element:<About/>
        }
        ,{
          path:'cocktail/:id',
          element:<SingleCocktail/>
        }
      ]
    }
  ])
  return(
    <RouterProvider router={router}/>
  )
}


export default App;























/*
import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="cocktail/:id" element={<SingleCocktail />} />
    <Route path="*" element={<Error />} />
    </Routes>
</Router>
  )
}

export default App
*/