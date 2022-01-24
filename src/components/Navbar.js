import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Button} from "./Button";
import './Navbar.css'

function Navbar(props) {

    const [burgerMenuClick, setBurgerMenuClick] = useState(false)
    const [button, setButton] = useState(true);

    const showButton = ()=> {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton)

    useEffect(()=>{
        showButton()
    }, [])

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={()=>{setBurgerMenuClick(false)}}>
                        TRVL <i className='fab fa-typo3'></i>
                    </Link>
                    <div className='menu-icon' onClick={()=>{setBurgerMenuClick(!burgerMenuClick)}}>
                        <i className={burgerMenuClick? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={burgerMenuClick? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={()=>{setBurgerMenuClick(false)}}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={()=>{setBurgerMenuClick(false)}}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={()=>{setBurgerMenuClick(false)}}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={()=>{setBurgerMenuClick(false)}}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle={'btn--outline'}>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;