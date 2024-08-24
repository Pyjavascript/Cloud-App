import React from 'react'
import { useNavigate } from 'react-router-dom';

function Account() {
    const navigate = useNavigate();
    const Home = () => {
        navigate('/home');
      }
  return (
    <>
    <div className='bg-[#f1f5fb] h-screen w-screen'>
    <div className='p-2 w-full flex justify-start items-center'>
        <div className='text-sm' onClick={Home}>
        <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <p className='text-2xl mb-1.5 text-slate-400'>Account</p>
    </div>
    </div>
    
    </>
  )
}

export default Account