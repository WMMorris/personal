import React , {useContext} from 'react'
import { Switch, Route } from 'react-router-dom'
import { UserContext } from "./context/UserProvider"
import Navbar from './navbar/Navbar.js'
import Footer from './footer/Footer.js'
import "./App.css"
import Home from './components/Home.js'
import About from './components/About.js'


const App = () => {

    const { handleNavMenu } = useContext(UserContext)

  return (
    <div className="App">
        <Navbar/>
        <main onClick={()=> handleNavMenu('toggled')}>
        <Switch>
            <Route 
                exact path="/" 
                render={()=> <Home />}
            />
            <Route 
                path="/about"
                render = {() => <About/>}
            />
        </Switch>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
