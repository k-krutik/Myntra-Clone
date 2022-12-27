import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
function Navbar() {
    return (
        <>
        <nav className='nav fixed-top'>
          <div className="left">

            <Link to="/"><img src="./Images/logo.png" alt="" /></Link>
            
            <ul>
              
            <Link className='link' to="/men"><li>Men </li></Link>
            <Link className='link' to="/women"><li>Women </li></Link>
            <Link className='link' to="/kids"><li>Kids </li></Link>
            <Link className='link' to="/home&style"><li>Home & Lifestyle </li></Link>
            <Link className='link' to="/beauty"><li> Beauty</li></Link>
            <Link className='link' to="/product"> <li>Product </li></Link>
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