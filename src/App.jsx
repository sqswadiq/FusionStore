import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import View from './pages/View'

function App() {
  

  return (
    <>

      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        {/* <Route path={'/wishlist'} element={<Wishlist/>}></Route> */}
        {/* <Route path={'/cart'} element={<Cart/>}></Route> */}
        <Route path={'/view/:id'} element={<View/>}></Route>
      </Routes>
      <Footer/>
      

    </>
  )
}

export default App
