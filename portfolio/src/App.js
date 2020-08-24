import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './navbar/Navbar.js'
import Footer from './footer/Footer.js'
import "./App.css"
import Home from './components/Home.js'
import About from './components/About.js'


const App = () => {
  return (
    <div className="App">
        <Navbar/>
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
        <Footer/>
    </div>
  );
}

export default App;
