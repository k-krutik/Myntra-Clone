import React from 'react'
import "./Navbar.css"
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
function Navbar() {
    return (
        <>
        <nav className='nav'>
          <div className="left">
            <img src="./Images/logo.png" alt="" />
            <ul>
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home & Lifestyle</li>
              <li>Beauty</li>
              <li>Studio</li>
            </ul>

          </div>

          <div className="right">
          <div class="search">
              <i class="fa fa-search"></i>
              <input type="text" class="form-control" placeholder="Search for products,brands and more"/>
          </div>
            
         
            <ul>
              <li><PermIdentityOutlinedIcon/></li>
              <li><FavoriteBorderOutlinedIcon/></li>
              <li><LocalMallOutlinedIcon/></li>
            </ul>
          


          </div>
        </nav>
       

        </>
    )
}

export default Navbar