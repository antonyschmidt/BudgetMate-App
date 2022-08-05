//react router dom
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router'
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

          <Switch>
            <Route exact path='/'>
              {user && <Home />}
              {!user && <Redirect to='/login' />}
            </Route>
            <Route path='/signup'>
              {!user && <Signup />}
              {user && <Redirect to='/' />}
            </Route>
            <Route path='/login'>
              {!user && <Login />}
              {user && <Redirect to='/' />}
            </Route>
          </Switch>
        </BrowserRouter>
      }
    </div>
  )
}



