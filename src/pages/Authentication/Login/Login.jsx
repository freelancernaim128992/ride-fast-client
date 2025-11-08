import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='w-2/4 mx-auto mt-10'>
            <div className='mb-5'>
                <h1 className='text-3xl font-bold'>Welcome Back</h1>
                <p className='text-xs text-gray-600'>Login with Ride Fast</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register("email")} className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" {...register("password")} className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary mt-4 text-black">Login</button>
                </fieldset>
            </form>
            <div className='mt-2'>
                <p className='text-xs text-gray-600'>Dont't have any account? Register</p>
            </div>
        </div>
    );
};

export default Login;