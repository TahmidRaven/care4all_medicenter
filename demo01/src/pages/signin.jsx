import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='p-6 max-w-lg w-full bg-white shadow-md rounded-lg'>
        <h1 className='text-3xl text-center font-semibold mb-6'>Sign In</h1>
        <form className='flex flex-col gap-4'>
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
            Sign In
          </button>
        </form>
        <div className='flex gap-2 mt-5 justify-center'>
          <p>Don't have an account?</p>
          <Link to='/signup'>
            <span className='text-blue-500'>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
