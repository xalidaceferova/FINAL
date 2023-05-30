import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import "./Detail.scss"

const Detail = () => {
  const {id}=useParams()
  const[detail,setdetail]=useState({})
  useEffect(()=>{
       axios.get(`http://localhost:8080/${id}`).then((res)=>{
        setdetail(res.data)
       })
  })
  return (
    <>
    <Helmet>
      <title>Detail</title>
    </Helmet>
     <div className='detail'>

     <div className='card'>
                  <div className='cardimg'>
                    <img src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" alt="" />
                  </div>
                     <div className='cardbody'>
                        <p>{detail.name}</p>
                          <p>{detail.price}</p>
                     </div>
                  </div>


     </div>
    
    
    </>
  )
}

export default Detail