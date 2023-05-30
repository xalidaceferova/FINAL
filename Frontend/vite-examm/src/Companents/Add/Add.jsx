import React from 'react'
import "./Add.scss"
import {Formik} from "formik"
import * as Yup from "yup"
import axios from 'axios'
import { Helmet } from 'react-helmet'
const Add = () => {
  return (
   <>
   <Helmet>
    <title>Add</title>
   </Helmet>
   <section className='add'>

 
       <Formik
        initialValues={{
          name:"",
          price:""
        }}
        validationSchema={Yup.object({
          name:Yup.string().required("name daxil edin!!"),
          price:Yup.string().required("price daxil edin!!")
        })}
        onSubmit={(values)=>{
         axios.post("http://localhost:8080",values)
        }}
       >
          {({values,handleSubmit,handleChange,errors})=>(

             <form onSubmit={handleSubmit}>

                <input type="text" id='name' onChange={handleChange} value={values.name} />
                {errors.name &&(<div className='eror'>{errors.name}</div>)} <br />

                <input type="number" id='price' onChange={handleChange} value={values.price} />
                {errors.price && (<div className='eror'>{errors.price}</div>)} <br />

                <button type='submit' className='submit'>Submit</button>


             </form>
            

          )}


       </Formik>

   </section>
   
   
   </>
  )
}

export default Add