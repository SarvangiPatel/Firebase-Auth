
import React, { useState } from 'react'
import { auth, provider } from '../Services/Firebase'
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import GoogleButton from 'react-google-button'

const SignIn = () => {

    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")


     const handleSubmit = async (e)=>{
          e.preventDefault()
          
    
          try {
    
            const res = await signInWithEmailAndPassword(auth,email,password);
    
            console.log(res)
            
          } catch (error) {
              console.log(error)
          }
      }
    

      const handleGoogleLogin = async ()=>{


        try {
    
          const res = await signInWithPopup(auth,provider)
          console.log(res)
          
        } catch (error) {
            console.log(error)
        }
      }
  


  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <form action="" onSubmit={handleSubmit}>
        <h1>SignIn Here...</h1>
        <input type="email"
        value={email}  
        onChange={(e)=>setemail(e.target.value)}
        placeholder="Enter Email" />
        <br />
        <br />

        <input type="password" value={password}  
            onChange={(e)=>setpassword(e.target.value)} placeholder="Enter Password" />
        <br />
        <br />

        <input type="submit" className="btn" value="SignIn" />
      </form>

      <hr />
      <GoogleButton
  onClick={handleGoogleLogin}
/>
    </div>
  );
};

export default SignIn;
