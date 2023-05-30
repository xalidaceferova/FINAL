import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import EightKIcon from '@mui/icons-material/EightK';
import "./Footer.scss"
const Footer = () => {
  return (
  <>
  <footer>

       <div className='foot__middle'>
    <div className='foot__desc'>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</div>
    <div>
      <FacebookIcon className='footicon' />
      <TwitterIcon  className='footicon'/>
      <SportsBasketballIcon  className='footicon'/>
      <EightKIcon  className='footicon'/>
    </div>
       </div>


  </footer>
  
  </>
  )
}

export default Footer