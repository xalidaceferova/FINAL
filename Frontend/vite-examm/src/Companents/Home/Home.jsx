import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"
import axios from "axios"
import { addwishlist } from '../../Redux/WishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import {Helmet} from "react-helmet"
const Home = () => {
  const[data,setData]=useState([])
  const[search,setsearch]=useState([])
  const[dummy,setDummy]=useState(false)
  useEffect(()=>{
    axios.get("http://localhost:8080").then((res)=>{
      setData(res.data)
    })
  },[search==="",dummy? data:""])
  const item=useSelector(state=>state.wishlist.Items)
  const dispatch=useDispatch()
  return (
   <>
   <Helmet>
<title>Home</title>

   </Helmet>
   <section className='home'>
     
     <div className='hometxt'>
        <div>
        <p>Lorem ipsum dolor sit amet.</p>
         <h1>Immigrations & Visa Consultation</h1>
         <button className='homebtn'>Book Consultancy</button>

        </div>
     </div>
     <div className='home__img'>
      <img src="https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="" />
     </div>

   </section>
   <section className='crud'>
   <div className='crud__head'>
    <div className='head'>
         <h2>Requirements to be Immigrants</h2>
         <p>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <input type="text" placeholder='search' className='search' onChange={(e)=>{
           setsearch(e.target.value)
             setData(data.filter(item=>item.name.includes(search)))

    }} />
    <button className='filter' onClick={()=>{
              setData([...data.sort((a,b)=>b.price-a.price)])
    }}>Filter by price</button>
   </div>
  <div className='crud__middle'>
    <div className='cards'>
 
         {
              data.map(item=>{
                return(
                  <div className='card'>
                  <div className='cardimg'>
                    <img src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" alt="" />
                  </div>
                     <div className='cardbody'>
                        <button className='wish' onClick={()=>{
                            dispatch(addwishlist({id:item._id, name:item.name,price:item.price}))
                        }}>Add wishlist</button>
                        <button className='deletebtn' onClick={()=>{
                            axios.delete(`http://localhost:8080/${item._id}`)
                            setDummy(true)
                        }}>delete</button>
                        <p>{item.name}</p>
                          <p>{item.price}</p>
                         <Link to={`/${item._id}`}>Go detail</Link>
                         
                     </div>
                  </div>
                )
              })

         }

    </div>
  </div>
   </section>
   <section className='feature'>
   <div className='feature__header'>
    <div className='feature__head'>
       <h2>Our Unique Features that can impress you</h2>
       <p>Who are in extremely love with eco friendly system.</p>
    </div>
   </div>
   <div className='services'>
    <div className='services__cards'>
    <div className='services__card'>
             <h3>Technical Skills</h3>
             <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
           </div>
           <div className='services__card'>
             <h3>Technical Skills</h3>
             <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
           </div>
           <div className='services__card'>
             <h3>Technical Skills</h3>
             <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
           </div>
           <div className='services__card'>
             <h3>Technical Skills</h3>
             <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
           </div>
           <div className='services__card'>
             <h3>Technical Skills</h3>
             <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
           </div>
           <div className='services__card'>
             <h3>Technical Skills</h3>
             <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
           </div>
    </div>
    
   </div>
   </section>
   <section className='news'>
    <div className='news__header'>
       <div className='news__head'>
            <h2>Latest News from our Blog</h2>
            <p>Who are in extremely love with eco friendly system.</p>
       </div>
    </div>
     <div className='news__cards'>
        <div className='news__card'>
           <div className='news__img'>
           <img src="https://preview.colorlib.com/theme/immigration/img/b1.jpg" alt="" />
           </div>
           <div className='news__body'>
              <div className='news__divs'>
                  <div className='new__div'>Travel</div>
                  <div className='new__div'>Life Style</div>
              </div>
              <h3>Portable latest Fashion for young women</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
           </div>
        </div>
        <div className='news__card'>
           <div className='news__img'>
           <img src="https://preview.colorlib.com/theme/immigration/img/b1.jpg" alt="" />
           </div>
           <div className='news__body'>
              <div className='news__divs'>
                  <div className='new__div'>Travel</div>
                  <div className='new__div'>Life Style</div>
              </div>
              <h3>Portable latest Fashion for young women</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
           </div>
        </div>
     </div>

   </section>
   </>
  )
}

export default Home