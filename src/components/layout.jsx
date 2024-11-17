import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import Supermarket from '../pages/supermarket_page'
import MenuPage from '../pages/menu_page'
import WeekPage from '../pages/week_page'
import Recipes from '../pages/recipes'
import Recipe from '../pages/Recipe'



import NavBar from '../components/nav_bar'
import Add from '../pages/Add_food'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/supermarket' element={<Supermarket />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/week' element={<WeekPage />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/add' element={<Add />} />
            <Route path='/recipe' element={<Recipe />} />


          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
