import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Burgers'
import PizzasPage from './pages/Pizzas'
import Drinks from './pages/Drinks'
import IceCreams from './pages/IceCreams'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='drinks' element={<Drinks />} />
        <Route path='ice-creams' element={<IceCreams />} />
      </Route>
    </Routes>
  )
}
