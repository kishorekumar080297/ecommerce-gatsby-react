import React, { Component } from 'react'
import { Link } from "gatsby"
import { FaCartArrowDown } from 'react-icons/fa';

import logo from '../../images/FBO.png'


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to="/" className="navbar-brand ml-5  text-white nav-text-brand">
                    <img src={logo} alt="FoneBayOn Logo" height= "50px" className="d-inline-block align-center"/>    
                    &nbsp;FoneBayOn
                </Link>
                <button className="navbar-toggler" type="button">
                    <span className="text-white">Menu</span>
                </button>
                <div className="collapse navbar-collapse show">
                    <ul className="navbar-nav ml-auto mr-5">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                                Home
                            </Link>
                        </li>  
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                                About Us    
                            </Link>
                        </li> 
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white">
                                <FaCartArrowDown className="cart-icon"/>    
                            </Link>
                        </li>   
                    </ul>      
                </div>               
            </nav>
        )
    }
}
