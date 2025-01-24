import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import Homepage from './pages/Homepage'
import Mainlayout from './layouts/Mainlayout'
import BookDescription from './pages/BookDescription'
import About from './pages/About'
import Cart from './pages/Cart'
const router = createBrowserRouter (

  createRoutesFromElements(
    <Route path='/' element={ <Mainlayout /> }>
      <Route index element={ <Homepage /> } />
      <Route path='/book' element={ <BookDescription /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/cart' element={ <Cart /> } />
    </Route>

))

const App = () => {
  return <RouterProvider router={router}/>
}

export default App