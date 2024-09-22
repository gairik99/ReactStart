
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './componests/NavBar'
import Contact from './componests/Contact'
import Cart from './componests/Cart'
import Home from './componests/Home'
import Login from './componests/Login'
import { PrivateRoute } from './componests/privateroute/PrivateRoute'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>

        } />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
