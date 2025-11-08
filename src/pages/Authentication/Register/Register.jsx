import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Register = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className='w-2/4 mx-auto mt-8'>
            <div className='mb-5'>
                <h1 className='text-3xl font-bold'>Create an Account</h1>
                <p className='text-xs text-gray-600'>Register with Ride Fast</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" {...register("name", { required: true })} className="input" placeholder="Name" />
                    {errors.name && <span className="text-red-500">Name is required</span>}
                    <label className="label">Email</label>
                    <input type="email" {...register("email", { required: true })} className="input" placeholder="Email" />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                    <label className="label">Password</label>
                    <input type="password" {...register("password", { required: true, minLength: 6 })} className="input" placeholder="Password" />
                    {errors.password && <span className="text-red-500">Password is required</span>}
                    {errors.password?.type === "minLength" && <span className="text-red-500">Password must be at least 6 characters</span>}
                    <button className="btn btn-primary mt-4 text-black">Register</button>
                </fieldset>
            </form>
            <div className='mt-2'>
                <p className='text-xs text-gray-600'>Already have an account? <Link to="/login" className="link link-hover text-blue-500 font-semibold">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;