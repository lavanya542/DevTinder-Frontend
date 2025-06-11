import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import {BrowserRouter,Route,Routes} from 'react-router'
import Login from './components/Login'
import Profile from './components/Profile'
import Logout from './components/Logout'
import Body from './components/Body'
import {Provider} from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'
import Connections from './components/Connections'
import Requests from './components/Requests'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/" element={<Feed/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/connections" element={<Connections/>}/>
          <Route path="/requests" element={<Requests/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    
  )
}

export default App
