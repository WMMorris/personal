import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars , faTimes} from '@fortawesome/free-solid-svg-icons'
import NavItem from './navItem/NavItem'
import NavTitle from './navTitle/NavTitle'
import './Navbar.css'

const Navbar = ()=> {    

    
    const [navMenu, setNavMenue ] = useState('')   

    let handleNavMenu = (e) =>{
        if (e === '') {
        setNavMenue("toggled")
            } else {
        setNavMenue('')
            }
    }   
   

    return (
        <nav className='clear-fix' >
            <div  className={`navbar ${navMenu}`} >
            <Link to="/"> <NavTitle text="Hill Top<coder/>"/> </Link>
                <div className='right'>
                    <Link to="/about"> <NavItem text='About'/> </Link>                               
                </div>
                <>
                    { navMenu === ''?
                        <FontAwesomeIcon icon={faBars} className='navbar-icon' onClick={()=>handleNavMenu(navMenu)}/>
                    : 
                        <FontAwesomeIcon icon={faTimes} className='navbar-icon' onClick={()=>handleNavMenu(navMenu)}/>
                    }                
                </>           
            </div>
        </nav>
    )
}

export default Navbar