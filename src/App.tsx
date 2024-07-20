import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home-page'
import ReceipePage from './pages/receipe-page'
import NavBar from './components/ui/nav-bar'

function App() {


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <HomePage/>} />
        <Route path='/recipes/:recipeId' element={ <ReceipePage/>} />
        <Route path='*' element={ <p>This page does not exist.</p>} />
      </Routes>
    </>
  )
}

export default App
