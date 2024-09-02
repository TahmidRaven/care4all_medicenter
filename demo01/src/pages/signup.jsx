import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='p-6 max-w-lg w-full bg-white shadow-md rounded-lg'>
        <h1 className='text-3xl text-center font-semibold mb-6'>Sign Up</h1>
        <form className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Username'
            id='username'
            className='bg-slate-100 p-3 rounded-lg'
          />
          <input
            type='email'
            placeholder='Email'
            id='email'
            className='bg-slate-100 p-3 rounded-lg'
          />
          <input
            type='password'
            placeholder='Password'
            id='password'
            className='bg-slate-100 p-3 rounded-lg'
          />
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            Sign Up
          </button>
        </form>
        <div className='flex gap-2 mt-5 justify-center'>
          <p>Have an account?</p>
          <Link to='/signin'>
            <span className='text-blue-500'>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
