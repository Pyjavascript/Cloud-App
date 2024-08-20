import React from 'react'
import { useNavigate } from 'react-router-dom';

function Start() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/signup');
    };

  return (
    <>
    <div className='lg:relative w-screen h-screen lg:bg-[#f1f5fb]'>
        <div className='h-full w-full flex flex-col justify-between p-6 rounded-md '>
          <p className='text-purple-600'>Coderado.io</p>
        <div className='lg:w-1/2'>
        <h1 className='lg:text-6xl text-4xl font-semibold text-black'>Store Data Without Any Limit.</h1>
        <p className='lg:text-lg lg:mt-5 mt-3 text-sm font-normal text-slate-300'>Our website use firebase to store your data. Your data is private<br/>and secure.Share it all over the internet</p>
        </div>
        <img className='lg:absolute lg:w-1/2 lg:right-5 mt-6 animate-bounce max-w-70' src="./hdd.png" alt="" />

        <button onClick={handleRedirect} className='lg:w-64 border-2 border-transparent bg-purple-600 text-white w-full mt-12 p-2 rounded-lg hover:bg-transparent hover:border-2 hover:border-purple-600 shadow-lg hover:text-purple-600 transition-all'>Get Started</button>
        </div>
    </div>
    </>
  )
}

export default Start