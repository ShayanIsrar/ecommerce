import React, { useContext, useState } from 'react'
import login from '../../assets/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../../common';
import { toast } from 'react-toastify';
import Context from '../../context';



const Login = () => {
    const navigate = useNavigate()

    const {fetchUserDetails} = useContext(Context)

    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (e)=>{
        const {name, value} = e.target;

        setData((preve)=>{
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        const dataResponse = await fetch(SummaryApi.signIn.url,{
            method: SummaryApi.signIn.method,
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const dataApi = await dataResponse.json()

        if(dataApi.success){
            toast.success(dataApi.message)
            navigate("/")
            fetchUserDetails()
        }
        if(dataApi.error){
            toast.error(dataApi.message)
        }
    }

    console.log("Data LoggedIn ", data)
  return (
    <section id='login'>
        <div className='mx-auto container p-4'>
            <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={login} alt="login icon" />
                </div>

                <form action="" className='pt-6' onSubmit={handleSubmit}>
                    <div className='grid'>
                        <label htmlFor="">Email : </label>
                        <div className='bg-slate-100 p-2'>
                            <input type="email" placeholder='enter email' name='email' value={data.email} onChange={handleOnChange} className='w-full h-full outline-none bg-transparent' required />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Password : </label>
                        <div className='bg-slate-100 p-2 flex'>
                            <input type={showPassword ? "text" : "password"} placeholder='enter password' name='password' onChange={handleOnChange} className='w-full h-full outline-none bg-transparent' required />
                            <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                                <span>
                                    {
                                        showPassword ? (
                                            <FaEyeSlash />
                                        ): (
                                            <FaEye />
                                        )
                                    }                                    
                                </span>
                            </div>
                        </div>
                        <Link to={"/forgot-password"} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                                    Forget Password ?
                        </Link>
                    </div>
                    <button className='bg-red-500 hover:bg-red-700 text-white px-6 py-2 w-full max-w-36 rounded-full hover:scale-105 transition-all mx-auto block mt-6'>Login</button>
                </form>
                <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className='text-red-500 hover:text-red-700 hover:underline'>Sign up</Link></p>
            </div>
        </div>
    </section>
  )
}

export default Login
