//react router dom
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
// pages
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
//components
import Navbar from './components/Navbar'
//hooks
import { useAuthContext } from './hooks/useAuthContext'

export default function App() {
  const { user, authReady } = useAuthContext()

  return (
    <div className="App">

      {authReady &&
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={user ? (<Home />) : (<Navigate to='/login' />)} />
            <Route path='/signup' element={!user ? (<Signup />) : (<Navigate to='/' />)} />
            <Route path='/login' element={!user ? (<Login />) : (<Navigate to='/' />)} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  )
}



