import React from 'react'
import "./Wishlist.scss"
import { removewishlist } from '../../Redux/WishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
const Wishlist = () => {
  const carts=useSelector(state=>state.wishlist.Items)
  const dispatch=useDispatch()

  return (
    <>
    <Helmet>
      <title>Wishlist</title>
    </Helmet>
    <section className='wishlist'>
{
          carts.map(item=>{
            return(
              <div className='card'>
              <div className='cardimg'>
                <img src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" alt="" />
              </div>
                 <div className='cardbody'>
                   
                    <button className='deletebtn' onClick={()=>{
                           dispatch(removewishlist(item.id))
                    }}>delete</button>
                    <p>{item.name}</p>
                      <p>{item.price}</p>
                     
                     
                 </div>
              </div>
            )
          })

}

    </section>
    
    
    </>
  )
}

export default Wishlist