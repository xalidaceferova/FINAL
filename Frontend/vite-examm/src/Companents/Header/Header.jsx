import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import CallIcon from '@mui/icons-material/Call';
const Header = () => {
  return (
   <>
   <nav>
  <div className='nav__up'>
    <div className='middle'>
    <div className='navup__left'>We believe we helps people
for happier lives</div>
    <div className='logo'>
      <img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="" />
    </div>
    <div className='navup__rigth'>
       +880 123 12 658 439 
      <div className='telicon'>
         <CallIcon  className='tel'/>
      </div>
    </div>

    </div>
  </div>
  <div className='nav__bottom'>
     <div className='menu'>
      <ul>
        <li><Link className='list' to="/">Home</Link></li>
        <li><Link className='list' to="/add">Add</Link></li>
        <li><Link className='list' to="/wishlist">Wishlist</Link></li>
      </ul>
     </div>
  </div>
   </nav>
   
   </>
  )
}

export default Header