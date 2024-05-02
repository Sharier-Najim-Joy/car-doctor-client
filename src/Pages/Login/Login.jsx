import { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { AuthContext } from '../../provider/AuthProvider';




const Login = () => {
    const [showPass,setShowPass] = useState(false)
    const {signIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const userInfo = {
        //     email,
        //     password
        // }
        // console.log(userInfo);

        signIn(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 mr-11">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-center text-5xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPass ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" required />
                            <span className='cursor-pointer' onClick={()=>setShowPass(!showPass)}>
                                {
                                    showPass ? <IoIosEyeOff/> : <IoMdEye></IoMdEye>
                                }
                            </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className='btn bg-[#FF3811]' />
                        </div>
                        <div className='mx-auto text-center space-y-4'>
                            <h3>Or Sign In with</h3>
                            <div className='flex justify-evenly cursor-pointer'>
                                <button><FaFacebook></FaFacebook></button>
                                <button><FaLinkedin></FaLinkedin></button>
                                <button><FcGoogle></FcGoogle></button>
                            </div>
                            <h3>Have an account? <Link to='/signUp' className='text-[#FF3811]'>Sign Up</Link></h3>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default Login;