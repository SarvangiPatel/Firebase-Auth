

import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../Services/Firebase'

const SignUp = () => {

  const [name , setname] = useState("")
  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")

  const handleSubmit = async (e)=>{
      e.preventDefault()
      

      try {

        const res = await createUserWithEmailAndPassword(auth,email,password);

        console.log(res)
        
      } catch (error) {
          console.log(error)
      }
  }


  return (


   <>

        <form onSubmit={handleSubmit}>

            <h1>SignUp Here...</h1>
            <input type="text" value={name} 
            onChange={(e)=>setname(e.target.value)}
            placeholder='Enter Name' /><br /><br />

            <input type="email" value={email}  
            onChange={(e)=>setemail(e.target.value)}placeholder='Enter Email' /><br /><br />

            <input type="password" value={password}  
            onChange={(e)=>setpassword(e.target.value)}placeholder='Enter Password' /><br /><br />

            <input type="submit" className="btn" />

        </form>
   
   </>

  )
}

export default SignUp