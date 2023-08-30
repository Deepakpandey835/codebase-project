import React, { useState } from 'react'
import { MdVisibility } from 'react-icons/md'
import  {GoogleButton} from 'react-google-button';
import { UserAuth } from '../components/context/AuthContext'
import { Link } from 'react-router-dom'

const Login = () => {


  const {googleSignIn} = UserAuth();
    const handleGoogleSignIn = async () => {
        await googleSignIn()
        try {
        } catch (error){
            console.log(error)
        }
        
    }


  return (
    
    <div className= 'bg-gray-100 mt-8 flex w-full h-screen flex-col justify-center '>
        <form className='max-w-[400px] w-full mx-auto items-center justify-center hover:border-2 hover:border-indigo-400 bg-white p-4 shadow-2xl rounded-2xl	box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); '>
                <h2 className='text-4xl font-bold text-center py-6'>Login</h2>
                <div className='flex flex-col py-2'>
                <input className='border rounded-md p-2' type="text"placeholder="Enter Email/Username"></input>   
                </div>

                <div className="mt-2 border rounded-md p-2 bg-white flex py-2 px-4 shadow-md shadow-wheat-500 w-full  justify-between items-center">
                                            <input
                                                placeholder='Enter password'
                                                id="EnterPassword"
                                                name="EnterPassword"
                                                type="password"
                                                required
                                                className="bg-tranprent outline-none"
                                            />
                                            <MdVisibility></MdVisibility>
                                        </div>
                <button className='border-rounded  rounded-md w-full  my-5 py-2 bg-sky-950 text-white'>Submit</button>
                <button  onClick={handleGoogleSignIn} className='border-rounded  rounded-md w-full  py-2 bg-sky-950 text-white'>Continue With Google</button>
                {/* <button className='border-rounded  rounded-md w-full my-2 py-2 bg-black background-color: rgb(0 0 0); text-white'>Continue With Google</button> */}
                {/* <div className='max-w-[240px] m-auto py-1' >
                    <GoogleButton onClick={handleGoogleSignIn}/>
                </div> */}
                
                <div className='flex justify-center gap-y-4'>
                        <p>Don't Have An Account ? Sign Up</p>
                </div>
                 <div className='flex justify-center gap-y-6'>
                 <Link to='/forgetpassword'>

                   <p class="no-underline hover:underline ...">Forget password</p>
                   </Link>
                 </div>

                

        </form>

    </div>
    
  )
}

export default Login
