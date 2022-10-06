import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import {auth} from "../firebase"



const googleSignIn = () =>{
 const provider = new GoogleAuthProvider()
 signInWithRedirect (auth, provider)    
}

const SingIn = () => {
  return (
    <div className="" >
        <button className='login-btn'  onClick={googleSignIn}>Login with google </button>
    </div>
  )
}

export default SingIn