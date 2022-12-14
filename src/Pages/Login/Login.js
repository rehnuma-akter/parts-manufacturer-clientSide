import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () => {
        if (user || gUser){
        navigate(from, { replace: true });
    }
    }, [user, gUser, from, navigate])
    if(loading || gLoading){
        return <Loading></Loading>
    }

    if(gError || error){
        signInError = <small className='text-red-500   '> {error?.message || gError?.message}</small>
    }
    
    const onSubmit = data => {
        console.log(data); 
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className='flex h-screen justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-center font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            
                            </label>
                            <input type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" 
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message:'Email is Required'
                                    },
                                    pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'Provide a valid Email'
                                }
                                })}
                            />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" 
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message:'Password is Required'
                                    },
                                    minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters long'
                                }
                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                    {signInError}
                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                    </form>
                    <p><small>New to ZenBytes? <Link className='text-secondary' to="/register">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                    className="btn btn-outline">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login; 