import React from 'react'
import logo from '../assets/xers-logo.png'
import App from '../App';


export default function Home() {
  return (
   
    <header className='blue-gray flex-row'>
      <App/>
      <img src={logo} alt='logo'/>
      <div className='flex justify-left font-bold px-10 py-10 text-black text-xl'>Xers</div>
    </header>
  )
}
