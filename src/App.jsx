import { useState } from 'react'
import Reg from './pages/Reg'
import {Routes,Route} from 'react-router-dom'
import Log from './pages/Log'
import First from './pages/First'
import Dash from './pages/Dash'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
    <Route path='/register' element={<Reg />}/>
    <Route path='/' element={<Log />}/>
    <Route path='/home' element={<First />}/>
    <Route path='/creator' element={<Dash />}/>
   </Routes>
    </>
  )
}

export default App
