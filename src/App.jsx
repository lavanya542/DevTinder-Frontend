import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './NavBar'
import {BrowserRouter,Route,Routes} from 'react-router'
import Login from './Login'
import Profile from './Profile'
import Logout from './Logout'
import Body from './Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/profile" element={<Profile/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
