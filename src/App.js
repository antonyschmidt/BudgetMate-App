//react router dom
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
// pages
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Show from './pages/show/Show'
//components
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/show'>
            <Show />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}



