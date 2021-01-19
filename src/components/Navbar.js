import React from 'react'

import Logo from '../assets/images/bootstrap-logo.svg'

const styling = {
    color: "white"
    
}

const Navbar = () => {
    return (
        
                    
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                 <img src={Logo} alt="" width="30" height="24" class="d-inline-block align-top"/> 
                 <span className = "ms-2"  >Product Catalog</span>
                </a>
            </div>
         </nav>
    
    )
}

export default Navbar
